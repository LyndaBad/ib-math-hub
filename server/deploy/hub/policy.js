const clone=x=>JSON.parse(JSON.stringify(x));
const equal=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
const own=(o,k)=>Object.prototype.hasOwnProperty.call(o||{},k);
const fail=m=>{throw new Error(m)};
/* IACORE-START */
const IA_STAGES = [
  { id: 'topic', n: 1, title: 'Topic Finder', short: 'Topic', cps: ['cp1'], obj: ['topic'], fields: ['interests', 'connections', 'working'], checks: [/^idea:/, /^area$/] },
  { id: 'title', n: 2, title: 'Title Builder', short: 'Title', cps: ['cp2'], obj: ['titleB'], fields: ['title', 'why', 'aim', 'planIntro', 'terms'], checks: [], titleCheck: true },
  { id: 'rq', n: 3, title: 'Research Question Builder', short: 'Research question', cps: ['cp3'], obj: ['rqB'], fields: ['rq', 'outline'], checks: [/^rq(Sit|Var|Out|Maths)$/] },
  { id: 'plan', n: 4, title: 'Exploration Planner', short: 'Plan', cps: ['ws', 'y1'], obj: ['planB'], fields: ['mathsPlan', 'beyond', 'explorationPlan', 'hlEnough'], checks: [] },
  { id: 'write', n: 5, title: 'Writing', short: 'Writing', cps: ['cp4', 'cp5', 'cp6'], obj: ['gdoc'], fields: ['intro', 'peerGiven', 'peerReceived', 'finalIntro'], checks: [/^w:/], write: true },
  { id: 'review', n: 6, title: 'Criteria Review', short: 'Criteria review', cps: [], obj: ['review'], fields: [], checks: [], self: true },
  { id: 'final', n: 7, title: 'Final Check & Export', short: 'Final check', cps: [], obj: ['final'], fields: [], checks: [] }
];
const IA_STAGE_BY = Object.fromEntries(IA_STAGES.map(s => [s.id, s]));
const iaEq = (a, b) => JSON.stringify(a === undefined ? null : a) === JSON.stringify(b === undefined ? null : b);
const iaTime = t => { if (t === null || t === undefined || t === '') return null; const x = typeof t === 'number' ? t : Date.parse(t); return isNaN(x) ? null : x; };
/** Which stage owns a piece of a student's IA record. null = not tied to a stage (references, drafts, reflection log). */
function iaStageOf(group, key) {
  if (group === 'fields') { const s = IA_STAGES.find(s => s.fields.includes(key)); return s ? s.id : null; }
  if (group === 'checks') { const s = IA_STAGES.find(s => s.checks.some(r => r.test(key))); return s ? s.id : null; }
  if (group === 'status' || group === 'feedback') { const s = IA_STAGES.find(s => s.cps.includes(key)); return s ? s.id : null; }
  if (group === 'titleCheck') return 'title';
  if (group === 'self') return 'review';
  if (group === 'write') return 'write';
  if (group === 'stages') return IA_STAGE_BY[key] ? key : null;
  if (group === 'obj') { const s = IA_STAGES.find(s => s.obj.includes(key)); return s ? s.id : null; }
  return null;
}
const IA_MAPS = ['fields', 'checks', 'status', 'feedback', 'titleCheck', 'self', 'write', 'stages'];
const IA_OBJS = IA_STAGES.flatMap(s => s.obj);
/** For one student: each stage's state now — 'open' (work and submit), 'view' (read only) or 'locked' (no access). */
function iaAccess(state, sid, now) {
  now = now === undefined || now === null ? Date.now() : iaTime(now);
  const st = (((state || {}).roster || {}).students || []).find(s => s.id === sid), group = st ? st.group : null;
  const S = (state && state.settings) || {}, P = S.iapace || {}, G = ((P.groups || {})[group]) || {}, O = ((P.students || {})[sid]) || {}, T = S['iastage:' + sid] || {};
  const out = {};
  IA_STAGES.forEach((stg, i) => {
    const c = G[stg.id] || {}, o = O[stg.id] || {};
    const mode = o.mode || c.mode || 'locked', releaseAt = o.mode ? (o.releaseAt || null) : (c.releaseAt || null), due = o.due || c.due || null;
    let st8 = 'locked', why = mode === 'scheduled' ? 'scheduled' : mode === 'locked' ? 'locked' : '';
    if (mode === 'open') st8 = 'open';
    else if (mode === 'view') st8 = 'view';
    else if (mode === 'scheduled') { const r = iaTime(releaseAt); if (r !== null && now >= r) { st8 = 'open'; why = ''; } }
    const prev = IA_STAGES[i - 1], gate = !!(prev && (G[prev.id] || {}).gate) && !o.skipGate;
    if (gate && st8 !== 'locked' && !(T[prev.id] && T[prev.id].approved)) { st8 = 'locked'; why = 'approval'; }
    const mine = ((((state || {}).ia || {})[sid] || {}).stages || {})[stg.id] || {}, tr = T[stg.id] || {};
    const returned = tr.state === 'returned' && (iaTime(tr.at) || 0) >= (iaTime(mine.at) || 0);
    const lockAfter = o.lockAfterDue !== undefined ? !!o.lockAfterDue : !!c.lockAfterDue, d = iaTime(due);
    if (st8 === 'open' && lockAfter && d !== null && now > d && !o.reopen && !returned) { st8 = 'view'; why = 'deadline'; }
    if (st8 === 'view' && (o.reopen || returned)) { st8 = 'open'; why = ''; }
    out[stg.id] = { state: st8, why, mode, releaseAt, due, lockAfter, gate, show: c.show !== false, n: stg.n, title: stg.title, own: !!(o.mode || o.due || o.reopen || o.skipGate || o.lockAfterDue !== undefined) };
  });
  return out;
}
/** The student's own IA record without anything that belongs to a locked stage (kept safely on the server). */
function iaStrip(rec, acc) {
  const r = JSON.parse(JSON.stringify(rec || {})), locked = id => id && acc[id] && acc[id].state === 'locked';
  for (const g of IA_MAPS) if (r[g] && typeof r[g] === 'object') for (const k of Object.keys(r[g])) if (locked(iaStageOf(g, k))) delete r[g][k];
  for (const k of IA_OBJS) if (locked(iaStageOf('obj', k))) delete r[k];
  if (Array.isArray(r.versions)) r.versions.forEach(v => { if (v && v.fields) for (const k of Object.keys(v.fields)) if (locked(iaStageOf('fields', k))) delete v.fields[k]; if (v && locked('write')) delete v.write; });
  return r;
}
/** Stages whose work differs between two copies of a student's IA record. */
function iaChanged(b, n) {
  b = b || {}; n = n || {}; const hit = new Set();
  for (const g of IA_MAPS) { const B = b[g] || {}, N = n[g] || {}; for (const k of new Set([...Object.keys(B), ...Object.keys(N)])) if (!iaEq(B[k], N[k])) { const s = iaStageOf(g, k); if (s) hit.add(s); } }
  for (const k of IA_OBJS) if (!iaEq(b[k], n[k])) hit.add(iaStageOf('obj', k));
  return [...hit];
}
/** A stage's status for the student: approved / returned (teacher), submitted / in-progress / not-started (student). */
function iaStatus(state, sid, stageId) {
  const own = ((((state || {}).ia || {})[sid] || {}).stages || {})[stageId] || {}, T = ((((state || {}).settings || {})['iastage:' + sid]) || {})[stageId] || {};
  const sAt = iaTime(own.at) || 0, tAt = iaTime(T.at) || 0;
  if (T.state && tAt >= sAt) return T.state;
  return own.status || 'not-started';
}
/** The next moment a scheduled stage opens for this student (so the page can refresh itself then). */
function iaNextRelease(acc, now) { now = now === undefined ? Date.now() : iaTime(now); const t = Object.values(acc).filter(a => a.state === 'locked' && a.why === 'scheduled').map(a => iaTime(a.releaseAt)).filter(x => x !== null && x > now); return t.length ? new Date(Math.min(...t)).toISOString() : null; }
/* IACORE-END */
export const iacore={access:iaAccess,strip:iaStrip,changed:iaChanged,status:iaStatus,stages:IA_STAGES};
export function identity(state,user,teacher){
 if(!user.email_confirmed_at)fail('Verify your email before signing in.');
 const email=(user.email||'').toLowerCase();
 if(teacher)return {email,role:'teacher',name:'Miss Badmus',uid:user.id};
 const s=email?state.roster.students.find(s=>((s.email||'').toLowerCase()===email||(s.login||'')===email)&&s.active!==false):null;
 if(!s)fail('This account is not on the class list. Join your class with the class code from Miss Badmus.');
 return {email,role:'student',sid:s.id,name:s.name,uid:user.id};
}
export function safeQuestion(q,released=false){
 if(released)return clone(q);
 // Allowlist: never include seeds, generator metadata, keys, error rules, markschemes or solutions.
 return {id:q.id,stem:q.stem,fig:q.fig,bookRef:q.bookRef,skill:q.skill,marks:q.marks,paper:q.paper,preview:q.preview,slot:q.slot,
 parts:q.parts.map(p=>({id:p.id,label:p.label,command:p.command,prompt:p.prompt,fig:p.fig,marks:p.marks,dep:p.dep,
 answer:{kind:p.answer.kind,choices:p.answer.choices,labels:p.answer.labels,boxes:p.answer.boxes,int:p.answer.int,dp:p.answer.dp,exact:p.answer.exact,
 ...(Array.isArray(p.answer.value)?{value:p.answer.value.map(()=>null)}:{})}}))};
}
export function studentState(state,sess){
 const out=clone(state),sid=sess.sid,st=state.roster.students.find(s=>s.id===sid);
 out.roster={source:'imported',students:[clone(st)]};out.log=[];out.notices=[];
 // Class codes and other students' join requests stay with the teacher.
 out.settings=Object.fromEntries(Object.entries(out.settings||{}).filter(([k])=>k!=='join'&&k!=='iapace'&&!k.startsWith('joinreq:')&&(!k.startsWith('iamark:')||k==='iamark:'+sid)&&(!k.startsWith('iastage:')||k==='iastage:'+sid)));
 // IA stages: the release plan stays with the teacher; the student gets what is open to them now, and no work from a locked stage.
 const acc=iaAccess(state,sid);out.iaAccess=Object.fromEntries(Object.entries(acc).map(([k,a])=>[k,a.state==='locked'&&!a.show?{state:'locked',why:'hidden',n:a.n,show:false}:a]));out.iaNext=iaNextRelease(acc);
 const ts=out.settings['iastage:'+sid];if(ts)for(const k of Object.keys(ts))if(acc[k]&&acc[k].state==='locked')delete ts[k];
 // Their own IA comments always; the IA mark only once the teacher releases it.
 const im=out.settings['iamark:'+sid];if(im&&!im.release)delete im.marks;
 out.attempts=state.attempts.filter(t=>t.sid===sid).map(t=>{let x=clone(t);if(t.status!=='released'){x.auto={earned:0,max:t.max,parts:{}};x.final=null;x.comment='';}if(x.inline)x.inline.questions=x.inline.questions.map(q=>safeQuestion(q,t.status==='released'));return x});
 const released=new Set(out.attempts.filter(t=>t.status==='released').map(t=>t.aid));
 out.assessments=state.assessments.filter(a=>['published','closed','archived'].includes(a.status)&&a.groups.includes(st.group)&&(!Array.isArray(a.targets)||a.targets.includes(sid))).map(a=>{let x=clone(a);x.questions=x.questions.map(q=>safeQuestion(q,released.has(a.id)));delete x.history;delete x.reviewed;delete x.targets;return x});
 out.evidence=state.evidence.filter(e=>e.sid===sid);
 out.progress=Object.fromEntries(Object.entries(state.progress).filter(([k])=>k.startsWith(sid+'|')).map(([k,v])=>{const x=clone(v);delete x._serverAssessment;return [k,x]}));
 out.ia=own(state.ia,sid)?{[sid]:iaStrip(state.ia[sid],acc)}:{};out.donow={};
 const d=state.donow[st.group];if(d&&d.status==='published'&&d.plans[sid]){out.donow[st.group]={...clone(d),plans:{[sid]:d.plans[sid].map(it=>({slot:it.slot,skill:it.skill,reason:it.reason,preview:it.preview,challenge:it.challenge,question:it.question?safeQuestion(it.question):null}))}};}
 return out;
}
function mergeField(base,next,current,label){
 if(equal(base,next))return current;
 if(!equal(base,current)&&!equal(next,current))fail('Conflict: '+label+'. Reload before editing this item again.');
 return next===undefined?undefined:clone(next);
}
function mergeMap(base={},next={},current={},label){
 const result=clone(current);for(const k of new Set([...Object.keys(base),...Object.keys(next)])){
 if(['__proto__','constructor','prototype'].includes(k))fail('Invalid key');
 const v=mergeField(base[k],next[k],current[k],label+' '+k);if(v===undefined)delete result[k];else result[k]=v;
 }return result;
}
function mergeList(base,next,current,label){
 const keyed=arr=>Object.fromEntries(arr.map(x=>[x.id,x]));
 for(const list of [base,next,current])if(list.some(x=>!x.id)||new Set(list.map(x=>x.id)).size!==list.length)fail('Invalid '+label+' identifiers');
 return Object.values(mergeMap(keyed(base),keyed(next),keyed(current),label));
}
export function mergeTeacher(base,next,current){
 if(!base||!next||next.schema!==2)fail('Invalid state');const out=clone(current);
 for(const k of ['assessments','attempts','evidence'])out[k]=mergeList(base[k],next[k],current[k],k);
 for(const k of ['progress','donow','ia','settings'])out[k]=mergeMap(base[k],next[k],current[k],k);
 out.roster={source:'imported',students:mergeList(base.roster.students,next.roster.students,current.roster.students,'roster')};
 // A student may be on the roster without an email until they join with the class code.
 const emails=new Set();for(const s of out.roster.students){if(!s.name||(s.email&&!/^\S+@\S+\.\S+$/.test(s.email))||!['HL-A','HL-B','SL-A','SL-B'].includes(s.group)||s.course!==s.group.slice(0,2))fail('Invalid roster');if(!s.email)continue;let e=s.email.toLowerCase();if(emails.has(e))fail('Duplicate roster email: '+e);emails.add(e);}
 out.log=[...current.log,...next.log.slice(base.log.length)].slice(-400);
 out.updatedAt=new Date().toISOString();return out;
}
export function mergeStudent(base,next,current,sid){
 const out=clone(current),prefix=sid+'|';
 const filter=o=>Object.fromEntries(Object.entries(o||{}).filter(([k])=>k.startsWith(prefix)).map(([k,v])=>[k,Object.fromEntries(['responses','uploads','reflection','updatedAt','createdAt'].filter(f=>own(v,f)).map(f=>[f,v[f]]))]));
 const merged=mergeMap(filter(base.progress),filter(next.progress),filter(current.progress),'saved answers');
 for(const k of Object.keys(out.progress))if(k.startsWith(prefix)){const server=out.progress[k]._serverAssessment;if(server)merged[k]={...(merged[k]||{}),_serverAssessment:server};delete out.progress[k];}Object.assign(out.progress,merged);
 // Teacher-only records under a student's name: absence marks from the register and reminders. A student can never create,
 // change or delete them; the only thing a student may do is mark their own reminder as read.
 const teacherOnly=k=>k.startsWith(prefix+'att:')||k.startsWith(prefix+'nudge:');
 for(const k of new Set([...Object.keys(out.progress),...Object.keys(current.progress||{})])){
  if(!k.startsWith(prefix)||!teacherOnly(k))continue;
  const cur=(current.progress||{})[k],mine=out.progress[k];
  if(!cur){delete out.progress[k];continue;}
  const read=k.startsWith(prefix+'nudge:')&&!!(mine&&mine.responses&&mine.responses.read);
  out.progress[k]=clone(cur);if(read)out.progress[k].responses={...(cur.responses||{}),read:true};
 }
 const b=base.ia?.[sid]||{},n=next.ia?.[sid]||{},c=current.ia?.[sid]||{};
 if(!equal(b,n)){
 // A locked or closed stage cannot be changed, whatever the browser sends.
 const acc=iaAccess(current,sid);for(const id of iaChanged(b,n)){const a=acc[id];if(!a||a.state!=='open')fail(`IA Stage ${a?a.n:''} (${a?a.title:id}) is ${a&&a.state==='view'?'closed for changes':'locked'} — Miss Badmus controls when it opens. Reload the Hub; your saved work is safe.`);}
 const v=clone(c);
 for(const k of ['fields','titleCheck','self','write','checks','topic','titleB','rqB','planB','gdoc','review','final','cites','seen'])v[k]=mergeMap(b[k],n[k],c[k],'IA '+k);
 for(const k of ['topic','titleB','rqB','planB','gdoc','review','final','cites','seen'])if(!Object.keys(v[k]).length&&!own(c,k))delete v[k];
 for(const k of ['sources','log','drafts'])v[k]=mergeField(b[k],n[k],c[k],'IA '+k)||[];
 // Versions only ever grow: new snapshots from this device are added to the server's list.
 const seenV=new Set((b.versions||[]).map(x=>x&&x.at));v.versions=[...(c.versions||[]),...(n.versions||[]).filter(x=>x&&x.at&&!seenV.has(x.at)).map(clone)].slice(-25);
 v.stages=clone(c.stages||{});for(const [k,value] of Object.entries(n.stages||{})){
 if(equal(value,b.stages?.[k]))continue;
 if(!IA_STAGES.some(s=>s.id===k)||!value||!['in-progress','submitted'].includes(value.status))fail('Only Miss Badmus can approve or return an IA stage.');
 v.stages[k]=mergeField(b.stages?.[k],{status:value.status,at:String(value.at||'').slice(0,40),reflection:String(value.reflection||'').slice(0,4000),target:String(value.target||'').slice(0,20)},c.stages?.[k],'IA stage');}
 v.status={...(c.status||{})};for(const [k,value] of Object.entries(n.status||{})){
 if(value===b.status?.[k])continue;
 if(!['submitted','in-progress'].includes(value)||c.status?.[k]==='signed-off')fail('Only the teacher can sign off or reopen an IA checkpoint.');
 v.status[k]=mergeField(b.status?.[k],value,c.status?.[k],'IA status');}
 v.updatedAt=new Date().toISOString();out.ia[sid]=v;
 }
 return out;
}
export function allowedFile(state,sess,path){
 if(typeof path!=='string'||path.includes('..'))return false;
 if(sess.role==='teacher')return true;
 // Files Miss Badmus attached to the IA guide are for every student.
 const g=state.settings&&state.settings.iaguide;if(g&&Array.isArray(g.files)&&g.files.some(f=>f&&f.id===path))return true;
 return path.startsWith(sess.uid+'/');
}


/* ---------- joining a class with a code (no Google): class code + first and last name → matched to the roster → the student picks a password ---------- */
export const cleanCode=c=>String(c||'').toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,12);
export function groupForCode(state,code){const c=cleanCode(code),J=((state.settings||{}).join)||{};if(c.length<4)return null;return Object.keys(J.codes||{}).find(g=>J.codes[g]&&cleanCode(J.codes[g].code)===c&&J.codes[g].open!==false&&['HL-A','HL-B','SL-A','SL-B'].includes(g))||null;}
/** Name → comparable words: "Okafor, Amara J" and "Amara J. Okafor" both give amara j okafor; accents dropped. */
export function nameTokens(n){let s=String(n||'').trim();const i=s.indexOf(',');if(i>0)s=s.slice(i+1)+' '+s.slice(0,i);return s.normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase().replace(/['’`.]/g,'').replace(/[^a-z\s-]/g,' ').split(/[\s-]+/).filter(Boolean);}
export function nameScore(rosterName,person){
 const a=nameTokens(rosterName),b=nameTokens(person);if(!a.length||!b.length)return 0;
 const big=t=>t.filter(x=>x.length>1),A=big(a),B=big(b);
 if(A.length&&A.join(' ')===B.join(' '))return 4;
 const fa=a[0],fb=b[0],la=a[a.length-1],lb=b[b.length-1];
 if(a.length>1&&b.length>1&&fa===fb&&la===lb)return 3;
 const SA=new Set(A),SB=new Set(B);
 if((B.length>=2&&B.every(x=>SA.has(x)))||(A.length>=2&&A.every(x=>SB.has(x))))return 2;
 if(a.length>1&&b.length>1&&la===lb&&Math.min(fa.length,fb.length)>=3&&(fa.startsWith(fb)||fb.startsWith(fa)))return 1;
 return 0;
}
/** The one roster student whose name fits best; null when nobody fits or two fit equally well. */
export function bestMatch(students,person){let best=0,hits=[];for(const s of students){const sc=nameScore(s.name,person);if(sc>best){best=sc;hits=[s];}else if(sc&&sc===best)hits.push(s);}return best&&hits.length===1?hits[0]:null;}
/** Student sign-in names are usernames (amara.okafor). Supabase needs an email, so each maps to a plus-address of the teacher's
    own Gmail. Nothing is ever emailed to it (accounts are created confirmed); it is only the key the sign-in uses. */
export const loginEmail=u=>'badmuslyn+'+String(u).toLowerCase().replace(/[^a-z0-9.]/g,'')+'@gmail.com';
export function usernameFor(state,s){
 if(s.username)return s.username;
 // "De la Cruz, Mateo" → mateo.delacruz (surname before the comma); "Amara J Okafor" → amara.okafor
 const raw=String(s.name||''),ci=raw.indexOf(','),w=x=>nameTokens(x).filter(t=>t.length>1).map(t=>t.replace(/[^a-z0-9]/g,'')).filter(Boolean);
 const firstW=s.first?w(s.first)[0]:ci>0?w(raw.slice(ci+1))[0]:w(raw)[0],lastW=s.last?w(s.last).join(''):ci>0?w(raw.slice(0,ci)).join(''):(w(raw).length>1?w(raw).slice(-1)[0]:'');
 const base=([firstW,lastW].filter(Boolean).join('.')||'student').slice(0,30),used=new Set(state.roster.students.map(x=>x.username).filter(Boolean));
 let u=base,i=2;while(used.has(u))u=base+(i++);return u;
}
const GL={'SL-A':'AA SL · A day','SL-B':'AA SL · B day','HL-A':'AA HL · A day','HL-B':'AA HL · B day'};
/** Checks a join (code, first, last, password) against the roster. Throws a message for the student, or returns who they are. */
export function prepareJoin(state,body){
 const group=groupForCode(state,body.code);if(!group)fail('That class code is not right, or joining is closed. Check it with Miss Badmus.');
 const first=String(body.first||'').trim().slice(0,60),last=String(body.last||'').trim().slice(0,60);
 if(!first||!last)fail('Type your first name and your last name.');
 const pw=String(body.password||'');if(pw.length<8)fail('Choose a password with at least 8 characters.');if(pw.length>72)fail('That password is too long (72 characters at most).');
 const s=bestMatch(state.roster.students.filter(x=>x.group===group&&x.active!==false),first+' '+last);
 if(!s)fail(`We couldn’t find ${first} ${last} on the ${GL[group]} list. Check the spelling — use your name as it is on the class register — or ask Miss Badmus.`);
 if(s.joinedAt)fail(`${s.name} has already joined. If that is you and you have forgotten your password, ask Miss Badmus to reset your login.`);
 const username=usernameFor(state,s);
 return {sid:s.id,name:s.name,group,username,login:loginEmail(username),uid:s.uid||null};
}
/** Saves the join once the sign-in account exists. */
export function commitJoin(state,p,uid,now=new Date().toISOString()){
 const s=state.roster.students.find(x=>x.id===p.sid);if(!s||s.joinedAt)fail('Someone has just joined with this name. Ask Miss Badmus.');
 if(state.roster.students.some(x=>x.id!==s.id&&x.username===p.username))fail('Please try again.');
 Object.assign(s,{username:p.username,login:p.login,uid,joinedAt:now});
 state.log.push({at:now,who:s.name,what:'Joined '+p.group+' with the class code (username '+p.username+')'});state.log=state.log.slice(-400);
}
/** Teacher: the student whose password is being reset (must have joined with the class code). */
export function loginOf(state,sid){const s=state.roster.students.find(x=>x.id===sid);if(!s)fail('Student not on the roster.');if(!s.uid)fail(s.email?'This student signs in with an email: use Create activation / reset link.':s.name+' has not joined yet, so there is no password to reset.');return s;}
/** Teacher: delete a student and everything that belongs to them. Returns their sign-in account id (deleted by the caller). */
export function removeStudent(state,sid){
 const s=state.roster.students.find(x=>x.id===sid);if(!s)fail('Student not on the roster.');
 state.roster.students=state.roster.students.filter(x=>x.id!==sid);
 state.attempts=state.attempts.filter(t=>t.sid!==sid);state.evidence=state.evidence.filter(e=>e.sid!==sid);
 for(const k of Object.keys(state.progress||{}))if(k.startsWith(sid+'|'))delete state.progress[k];
 if(state.ia)delete state.ia[sid];
 for(const g of Object.keys(state.donow||{})){const d=state.donow[g];if(d&&d.plans)delete d.plans[sid];}
 state.log.push({at:new Date().toISOString(),who:'Miss Badmus',what:'Deleted '+s.name+' ('+s.group+') and their work'});state.log=state.log.slice(-400);
 return {uid:s.uid||null,name:s.name};
}

/* ---------- reference lookups: read a web page's own citation details (never invent missing ones) ---------- */
/** Only public http(s) pages on normal ports; no local or private network addresses. */
export function safeUrl(raw){
 let u;try{u=new URL(String(raw||'').trim());}catch(_){fail('Paste the full web address, starting with https://');}
 if(!['http:','https:'].includes(u.protocol))fail('Only web pages (http or https) can be looked up.');
 if(u.username||u.password)fail('That address cannot be looked up.');
 if(u.port&&!['80','443'].includes(u.port))fail('That address cannot be looked up.');
 const h=u.hostname.toLowerCase().replace(/^\[|\]$/g,'');
 if(!h.includes('.')||/(^|\.)(localhost|local|internal|intranet|lan|home|corp)$/.test(h))fail('That address cannot be looked up.');
 const v4=h.match(/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/);
 if(v4){const [a,b]=[+v4[1],+v4[2]];if(a===10||a===127||a===0||(a===169&&b===254)||(a===172&&b>=16&&b<=31)||(a===192&&b===168)||(a===100&&b>=64&&b<=127)||a>=224)fail('That address cannot be looked up.');}
 if(h.includes(':'))fail('That address cannot be looked up.');
 return u.toString();
}
const ent=t=>String(t||'').replace(/&#x([0-9a-f]+);/gi,(_,x)=>String.fromCodePoint(parseInt(x,16))).replace(/&#(\d+);/g,(_,x)=>String.fromCodePoint(+x)).replace(/&quot;/g,'"').replace(/&apos;|&#39;/g,"'").replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&nbsp;/g,' ').replace(/&amp;/g,'&').replace(/\s+/g,' ').trim();
/** Title, authors, site, date and DOI from a page's meta tags and JSON-LD — only what the page states. */
export function pageMeta(html,url=''){
 html=String(html||'').slice(0,1500000);const meta={};
 for(const m of html.matchAll(/<meta\b[^>]*>/gi)){const tag=m[0],at=k=>{const r=tag.match(new RegExp('\\b'+k+'\\s*=\\s*("([^"]*)"|\'([^\']*)\'|([^\\s>]+))','i'));return r?(r[2]??r[3]??r[4]):null;};
  const key=(at('name')||at('property')||at('itemprop')||'').toLowerCase(),c=at('content');if(!key||c==null)continue;(meta[key]=meta[key]||[]).push(ent(c));}
 const first=(...k)=>{for(const x of k)if(meta[x]&&meta[x][0])return meta[x][0];return '';};
 let ld=[];for(const m of html.matchAll(/<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)){try{const j=JSON.parse(m[1]);const flat=x=>Array.isArray(x)?x.flatMap(flat):x&&x['@graph']?flat(x['@graph']):[x];ld=ld.concat(flat(j));}catch(_){}}
 const art=ld.find(x=>x&&(x.headline||(/Article|Report|WebPage|Dataset|Book/i.test(String(x['@type']||''))&&x.name)))||{};
 const nm=a=>typeof a==='string'?a:a&&a.name?String(a.name):'';
 const isUrl=t=>/^https?:\/\//i.test(t)||/^\//.test(t);
 let authors=(meta['citation_author']||meta['dc.creator']||[]).filter(a=>a&&!isUrl(a));
 if(!authors.length){const la=art.author?(Array.isArray(art.author)?art.author:[art.author]).map(nm).filter(Boolean):[];authors=la.length?la:[first('author'),first('article:author')].filter(a=>a&&!isUrl(a)).slice(0,1);}
 authors=[...new Set(authors.map(ent))].slice(0,20);
 const titleTag=(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)||[])[1];
 const title=first('citation_title','dc.title','og:title','twitter:title')||ent(art.headline||art.name||'')||ent(titleTag||'');
 const site=first('og:site_name','citation_journal_title','citation_publisher','application-name')||ent(nm(art.publisher));
 const dRaw=first('citation_publication_date','citation_date','citation_online_date','article:published_time','dc.date','dc.date.issued','date','pubdate')||String(art.datePublished||'');
 const d=dRaw.match(/^(\d{4})(?:[-\/.](\d{1,2})(?:[-\/.](\d{1,2}))?)?/);const published=d?[d[1],d[2]&&String(d[2]).padStart(2,'0'),d[3]&&String(d[3]).padStart(2,'0')].filter(Boolean).join('-'):'';
 const doiM=(first('citation_doi','dc.identifier','prism.doi')||'').match(/10\.\d{4,9}\/\S+/);
 return {url,title:title.slice(0,500),authors,site:site.slice(0,200),published,doi:doiM?doiM[0]:''};
}

// ---------- added 4 Nov 2026: submission guards ----------
const BLOCK_END={'Block 1':'12:00','Block 4':'14:30'};const ET_GRACE_MIN=60;
function nyNow(now){const p=Object.fromEntries(new Intl.DateTimeFormat('en-CA',{timeZone:'America/New_York',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(now||new Date()).map(x=>[x.type,x.value]));return {date:`${p.year}-${p.month}-${p.day}`,hm:`${p.hour}:${p.minute}`};}
/** "HH:MM" New York time when Exit Tickets close for a block (one hour after it ends). */
export function etCloseTime(block){const [h,m]=(BLOCK_END[block]||'15:00').split(':').map(Number),t=h*60+m+ET_GRACE_MIN;return String(Math.floor(t/60)).padStart(2,'0')+':'+String(t%60).padStart(2,'0');}
/** Why this student may not submit this assessment now, or null. a = the assessment, due = its due date for their class. */
export function submitGuard(state,sid,a,{kind,block,due,now,group}={}){
 if(Array.isArray(a.targets)&&!a.targets.includes(sid))return 'This retake is not set for you.';
 const kept=a.keepOpen===true||!!(a.keepOpen&&typeof a.keepOpen==='object'&&group&&a.keepOpen[group]);
 if(kind!=='donow'&&kind!=='practice'&&a.type==='Exit Ticket'&&due&&!kept){
  const n=nyNow(now),closed=n.date>due||(n.date===due&&n.hm>=etCloseTime(block));
  if(closed&&!state.progress[sid+'|att:'+due])return 'This Exit Ticket closed after the lesson. If you were absent, speak to Miss Badmus.';
 }
 return null;
}
/** Personalised Exit Tickets and Quizzes are delivered through the Do Now slot; record them under their own name. */
export function labelPersonal(attempt,rec){
 const k=rec&&(rec.kind==='Exit Ticket'||rec.kind==='Quiz')?rec.kind:null;if(!k||!attempt||!attempt.inline)return attempt;
 attempt.inline.type=k;attempt.inline.title=String(attempt.inline.title||'').replace(/^Do Now/,'Personalised '+k);attempt.personal=k;return attempt;
}
