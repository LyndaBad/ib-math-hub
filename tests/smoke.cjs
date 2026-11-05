// Smoke test: opens the site in a headless browser with a fake Supabase backend and sample data,
// visits the main teacher and student pages, and fails if any page throws an error or shows the error screen.
// Run: npm i playwright-core && node tests/smoke.cjs   (uses CHROME_PATH or the Playwright-installed Chromium)
const fs = require('fs'), path = require('path');
let chromium; try { ({ chromium } = require('playwright')); } catch (e) { ({ chromium } = require('playwright-core')); }
const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const SUPA = (html.match(/https:\/\/[a-z0-9]+\.supabase\.co/) || [])[0];
if (!SUPA) { console.error('Could not find the Supabase URL in index.html'); process.exit(1); }
const ref = SUPA.split('//')[1].split('.')[0];
const st = (id, name, group, extra = {}) => Object.assign({ id, name, email: id + '@example.org', username: id, group, course: group.slice(0, 2), active: true, joinedAt: '2026-11-01' }, extra);
const state = { schema: 2, settings: { halfLifeDays: 21, minEvidence: 3, join: { codes: {} }, dataCycle: { bounds: { SL: { 2: 20, 3: 30, 4: 40, 5: 55, 6: 70, 7: 85 }, HL: { 2: 20, 3: 30, 4: 45, 5: 60, 6: 72, 7: 85 } } }, announce: [{ id: 'n1', text: 'Smoke test announcement', groups: ['SL-A'], at: '2026-11-01T10:00:00Z' }] },
  roster: { source: 'imported', students: [st('s1', 'Student One', 'SL-A'), st('s2', 'Student Two', 'SL-A'), st('s3', 'Student Three', 'HL-A'), st('t1', 'Test Student', 'SL-A', { test: true })] },
  assessments: [], attempts: [], evidence: [], progress: {}, donow: {}, ia: {}, log: [], notices: [] };
function studentView(sid) { const s = JSON.parse(JSON.stringify(state)), me = s.roster.students.find(x => x.id === sid); s.roster.students = [me]; s.attempts = s.attempts.filter(t => t.sid === sid); s.evidence = s.evidence.filter(e => e.sid === sid);
  s.progress = Object.fromEntries(Object.entries(s.progress).filter(([k]) => k.startsWith(sid + '|'))); s.donow = {}; return s; }
const TEACHER = ['#/home', '#/class/SL-A', '#/class/HL-A', '#/lessons', '#/studio', '#/marking', '#/announce', '#/donow?group=SL-A', '#/mastery', '#/datacycle', '#/datacycle?tab=intervention', '#/datacycle?present=1', '#/datacycle?tab=heatmap', '#/datacycle?tab=wrong', '#/datacycle?tab=growth', '#/datacycle?tab=ab', '#/exam', '#/exam?course=HL', '#/weekly', '#/gradebook?g=SL-A', '#/gradebook?g=HL-B&kind=et', '#/feedback', '#/unitnotes?u=2&course=HL', '#/terms', '#/guide?group=SL-A&d=2026-12-02', '#/ia', '#/course', '#/settings', '#/student/s1'];
const STUDENT = ['#/home', '#/notebook', '#/donow', '#/practice', '#/progress', '#/ia', '#/calendar', '#/terms', '#/guide', '#/unitnotes?u=1', '#/feedback', '#/exampractice'];
(async () => {
  const b = await chromium.launch(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH, args: ['--no-sandbox'] } : { args: ['--no-sandbox'] });
  const problems = [];
  async function run(role, sid, routes) {
    const ctx = await b.newContext({ viewport: { width: 1280, height: 900 } }), p = await ctx.newPage(); let current = '';
    p.on('pageerror', e => problems.push(`${role} ${current}: ${e.message}`));
    await p.route('https://missbadmusibmath.com/**', r => r.fulfill({ contentType: 'text/html', body: html }));
    await p.route(SUPA + '/**', async r => { const u = r.request().url();
      if (u.includes('/functions/v1/hub')) { const sess = role === 'teacher' ? { role: 'teacher', name: 'Teacher', email: 'teacher@example.org' } : { role: 'student', sid, name: 'Student', email: sid + '@example.org' };
        return r.fulfill({ contentType: 'application/json', body: JSON.stringify({ session: sess, state: role === 'teacher' ? state : studentView(sid) }) }); }
      return r.fulfill({ contentType: 'application/json', body: JSON.stringify({ id: 'u1', email: 'x@example.org' }) }); });
    await p.addInitScript(k => { localStorage.setItem(k, JSON.stringify({ access_token: 'x', refresh_token: 'y', token_type: 'bearer', expires_in: 3600, expires_at: Math.floor(Date.now() / 1000) + 3600, user: { id: 'u1', email: 'x@example.org' } })); }, `sb-${ref}-auth-token`);
    for (const h of routes) { current = h; await p.goto('https://missbadmusibmath.com/' + h); await p.waitForTimeout(h === routes[0] ? 2500 : 900);
      const t = await p.evaluate(() => document.querySelector('main') ? document.querySelector('main').innerText : document.body.innerText);
      if (/Something went wrong showing this page/.test(t)) problems.push(`${role} ${h}: shows the error screen — ${t.slice(0, 160).replace(/\s+/g, ' ')}`);
      else if (t.trim().length < 20) problems.push(`${role} ${h}: page is empty`);
      else console.log(`ok  ${role.padEnd(7)} ${h}`); }
    await ctx.close();
  }
  await run('teacher', null, TEACHER); await run('student', 's1', STUDENT);
  await b.close();
  if (problems.length) { console.error('\nProblems found:\n- ' + problems.join('\n- ')); process.exit(1); }
  console.log(`\nAll ${TEACHER.length + STUDENT.length} pages opened without errors.`);
})().catch(e => { console.error(e); process.exit(1); });
