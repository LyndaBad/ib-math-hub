// Built from ../../supabase/functions/hub/index.ts (TypeScript types removed) so Supabase can import it from a pinned GitHub version.
import { createClient } from "npm:@supabase/supabase-js@2.95.3";
import { createEngine } from "./engine.js";
import { identity, studentState, mergeTeacher, mergeStudent, allowedFile, safeQuestion, prepareJoin, commitJoin, loginOf, removeStudent, safeUrl, pageMeta, submitGuard, labelPersonal } from "./policy.js";
const admin = createClient(Deno.env.get("SUPABASE_URL"), Deno.env.get("SUPABASE_SERVICE_ROLE_KEY"), { auth: { persistSession: false, autoRefreshToken: false } });
const headers = { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "authorization, apikey, content-type, x-client-info", "Access-Control-Allow-Methods": "POST, OPTIONS", "Cache-Control": "no-store" };
const response = (data, status = 200) => new Response(JSON.stringify(data), { status, headers });
const err = (m) => {
  throw Error(m);
};
async function read() {
  const { data, error } = await admin.from("hub_state").select("*").eq("id", 1).single();
  if (error) throw error;
  return data;
}
async function teacher(email) {
  const { data, error } = await admin.from("hub_teachers").select("email").eq("email", email.toLowerCase()).maybeSingle();
  if (error) throw error;
  return !!data;
}
async function transact(fn) {
  for (let i = 0; i < 6; i++) {
    const row = await read(), state = structuredClone(row.data);
    const result = await fn(state);
    const { data, error } = await admin.from("hub_state").update({ data: result.state, revision: row.revision + 1, updated_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("id", 1).eq("revision", row.revision).select("revision");
    if (error) throw error;
    if (data?.length) return result;
  }
  throw Error("Busy: please try again. Your changes were not committed.");
}
Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers });
  if (req.method !== "POST") return response({ error: "POST required" }, 405);
  try {
    const text = await req.text();
    if (text.length > 16 * 1024 * 1024) return response({ error: "Request too large." }, 413);
    const body = JSON.parse(text);
    if (body.action === "join") {
      const initial2 = await read();
      const p = prepareJoin(initial2.data, body);
      let uid = p.uid;
      if (uid) {
        const { error } = await admin.auth.admin.updateUserById(uid, { email: p.login, password: String(body.password), email_confirm: true });
        if (error) throw error;
      } else for (let tries = 0; ; tries++) {
        const { data, error } = await admin.auth.admin.createUser({ email: p.login, password: String(body.password), email_confirm: true, user_metadata: { name: p.name } });
        if (!error) {
          uid = data.user.id;
          break;
        }
        if (tries < 2 && /registered|exists/i.test(error.message)) {
          p.username = p.username.replace(/\d*$/, "") + (Math.floor(Math.random() * 90) + 10);
          p.login = p.login.replace(/\+[^@]+@/, "+" + p.username + "@");
          continue;
        }
        throw error;
      }
      await transact((state) => {
        commitJoin(state, p, uid);
        return { state };
      });
      return response({ status: "joined", username: p.username, login: p.login, name: p.name, group: p.group });
    }
    const token = (req.headers.get("Authorization") || "").replace(/^Bearer /i, "");
    const { data: { user }, error: authError } = await admin.auth.getUser(token);
    if (authError || !user) return response({ error: "Sign in to continue." }, 401);
    const initial = await read(), sess = identity(initial.data, user, await teacher(user.email || ""));
    const filter = (state) => sess.role === "teacher" ? state : studentState(state, sess);
    if (body.action === "load") return response({ session: sess, state: filter(initial.data) });
    if (body.action === "save") {
      const result = await transact((state) => {
        identity(state, user, sess.role === "teacher");
        return { state: sess.role === "teacher" ? mergeTeacher(body.base, body.state, state) : mergeStudent(body.base, body.state, state, sess.sid) };
      });
      return response({ state: filter(result.state) });
    }
    if (body.action === "practice") {
      if (sess.role !== "student") err("Student sign-in required.");
      const H = createEngine(initial.data, sess), st = H.roster.byId(sess.sid), sk = H.curriculum.SKILL[body.skill];
      if (!sk || sk.course !== st.course) err("Skill unavailable.");
      const gen = sk.gens[crypto.getRandomValues(new Uint32Array(1))[0] % sk.gens.length];
      const q = H.qcore.build(gen, crypto.getRandomValues(new Uint32Array(1))[0] % 1e6 + 1, {});
      q.parts = q.parts.filter((p) => p.answer.kind !== "open");
      q.marks = q.parts.reduce((n, p) => n + p.marks, 0);
      q.preview = !H.curriculum.isTaught(sk.id, st.group, H.mastery.asOf());
      const a = { id: "practice-" + crypto.randomUUID(), title: sk.name + " \xB7 Practice", type: "Practice", course: st.course, release: "auto", questions: [q] };
      await transact((state) => {
        state.progress[sess.sid + "|" + a.id] = { _serverAssessment: a, createdAt: (/* @__PURE__ */ new Date()).toISOString() };
        return { state };
      });
      const visible = { ...a, questions: a.questions.map((q2) => ({ ...safeQuestion(q2), parts: q2.parts.map((p) => ({ ...safeQuestion(q2).parts.find((x) => x.id === p.id), hint: p.hint })) })) };
      return response({ assessment: visible });
    }
    if (body.action === "submit") {
      if (sess.role !== "student") err("Student sign-in required.");
      const result = await transact(async (state) => {
        identity(state, user, false);
        const d = body.data || {};
        if (!d.token || typeof d.token !== "string") err("Submission token missing.");
        const existing = state.attempts.find((t) => t.sid === sess.sid && t.token === sess.sid + "|" + d.token);
        if (existing) return { state, attempt: existing };
        const H = createEngine(state, sess);
        let a = H.assess.byId(body.aid), opts = {};
        if (body.kind === "donow") {
          const d2 = H.donow.forStudent(sess.sid);
          if (!d2) err("No Do Now is open.");
          if (d2.done) return { state, attempt: d2.done };
          a = d2.assessment;
          opts.assessment = a;
        } else if (body.kind === "practice") {
          a = state.progress[sess.sid + "|" + body.aid]?._serverAssessment;
          if (!a) err("Practice session expired. Start a new one.");
          opts.assessment = a;
        }
        if (!a) err("Assessment not available.");
        {
          const me = H.roster.byId(sess.sid), why = submitGuard(state, sess.sid, a, { kind: body.kind, block: (H.curriculum.GROUPS[me.group] || {}).block, due: body.kind === "donow" || body.kind === "practice" ? null : a.dueBy && a.dueBy[me.group] || a.due || null });
          if (why) err(why);
        }
        if (a.type === "Retest" && !H.assess.forStudent(sess.sid).some((x) => x.id === a.id)) err("Retest not available.");
        const input = { token: sess.sid + "|" + d.token, responses: d.responses || {}, uploads: [], reflection: String(d.reflection || "").slice(0, 2e4), proof: d.proof === true, hints: d.hints || {} };
        for (const f of (d.uploads || []).slice(0, 20)) {
          if (!allowedFile(state, sess, f.id)) err("Invalid upload owner.");
          const split = f.id.lastIndexOf("/");
          const { data: items, error } = await admin.storage.from("hub-work").list(f.id.slice(0, split), { search: f.id.slice(split + 1) });
          if (error || !items?.some((x) => x.name === f.id.slice(split + 1))) err("Upload has not completed.");
          input.uploads.push({ id: f.id, name: String(f.name).slice(0, 200), type: f.type, size: f.size });
        }
        const r = H.assess.submit(a.id, sess.sid, input, opts);
        if (!r.ok) err(r.error);
        if (body.kind === "donow") {
          const rec = H.donow.forStudent(sess.sid).rec;
          r.attempt.donowKey = H.roster.byId(sess.sid).group + "|" + rec.lessonDate;
          labelPersonal(r.attempt, rec);
        }
        return { state, attempt: r.attempt };
      });
      const safe = filter(result.state);
      return response({ state: safe, attempt: safe.attempts.find((t) => t.id === result.attempt.id) });
    }
    if (body.action === "cite-url") {
      let u = safeUrl(body.url), res = null;
      for (let hop = 0; hop < 4; hop++) {
        const ctl = new AbortController(), t = setTimeout(() => ctl.abort(), 8e3);
        try {
          res = await fetch(u, { signal: ctl.signal, redirect: "manual", headers: { "User-Agent": "Mozilla/5.0 (compatible; IBMathHub/1.0; +https://missbadmusibmath.com)", "Accept": "text/html,application/xhtml+xml" } });
        } catch (_) {
          err("That page did not answer. Enter the details by hand.");
        } finally {
          clearTimeout(t);
        }
        if (res && res.status >= 300 && res.status < 400 && res.headers.get("location")) {
          u = safeUrl(new URL(res.headers.get("location"), u).toString());
          continue;
        }
        break;
      }
      if (!res || !res.ok) err(`That page could not be read${res ? " (" + res.status + ")" : ""}. Enter the details by hand.`);
      if (!/html|xml/i.test(res.headers.get("content-type") || "")) err("That address is not a web page (it may be a PDF). Enter the details by hand.");
      const reader = res.body.getReader(), parts = [];
      let size = 0;
      while (size < 15e5) {
        const { done, value } = await reader.read();
        if (done) break;
        parts.push(value);
        size += value.length;
      }
      try {
        await reader.cancel();
      } catch (_) {
      }
      const all = new Uint8Array(size);
      let o = 0;
      for (const p of parts) {
        all.set(p.subarray(0, Math.min(p.length, size - o)), o);
        o += p.length;
        if (o >= size) break;
      }
      return response(pageMeta(new TextDecoder().decode(all), u));
    }
    if (body.action === "file-upload") {
      if (!["image/jpeg", "image/png", "application/pdf"].includes(body.type) || !(body.size > 0) || body.size > 10485760) err("Choose a photo or PDF under 10 MB.");
      const path = user.id + "/" + crypto.randomUUID();
      const { data, error } = await admin.storage.from("hub-work").createSignedUploadUrl(path);
      if (error) throw error;
      return response({ path, ...data });
    }
    if (body.action === "file-read") {
      if (!allowedFile(initial.data, sess, body.path)) err("File access refused.");
      const { data, error } = await admin.storage.from("hub-work").createSignedUrl(body.path, 300);
      if (error) throw error;
      return response(data);
    }
    if (body.action === "set-password") {
      if (sess.role !== "teacher") err("Teacher only.");
      const pw = String(body.password || "");
      if (pw.length < 8) err("Use at least 8 characters.");
      if (pw.length > 72) err("That password is too long.");
      const s = loginOf(initial.data, body.sid);
      const { error } = await admin.auth.admin.updateUserById(s.uid, { password: pw });
      if (error) throw error;
      const out = await transact((state) => {
        const x = state.roster.students.find((y) => y.id === s.id);
        if (x && !x.joinedAt) x.joinedAt = (/* @__PURE__ */ new Date()).toISOString();
        return { state };
      });
      return response({ ok: true, username: s.username, state: out.state });
    }
    if (body.action === "delete-student") {
      if (sess.role !== "teacher") err("Teacher only.");
      const out = await transact((state) => {
        const r = removeStudent(state, body.sid);
        return { state, r };
      });
      if (out.r.uid) {
        try {
          const { data: files } = await admin.storage.from("hub-work").list(out.r.uid, { limit: 1e3 });
          if (files?.length) await admin.storage.from("hub-work").remove(files.map((f) => out.r.uid + "/" + f.name));
        } catch (_) {
        }
        await admin.auth.admin.deleteUser(out.r.uid);
      }
      return response({ ok: true, name: out.r.name, state: out.state });
    }
    if (body.action === "invite") {
      if (sess.role !== "teacher") err("Teacher only.");
      const st = initial.data.roster.students.find((s) => s.id === body.sid && s.active !== false);
      if (!st) err("Student not on the roster.");
      if (!st.email) err("This student has no email. They make their own login with the class code instead.");
      const redirectTo = "https://missbadmusibmath.com/";
      let { data, error } = await admin.auth.admin.generateLink({ type: "invite", email: st.email, options: { redirectTo } });
      if (error && /already.*registered|already.*exists/i.test(error.message)) ({ data, error } = await admin.auth.admin.generateLink({ type: "recovery", email: st.email, options: { redirectTo } }));
      if (error) throw error;
      return response({ link: data.properties.action_link });
    }
    return response({ error: "Unknown action" }, 400);
  } catch (e) {
    const message = e instanceof Error ? e.message : "Request failed";
    return response({ error: message }, message.startsWith("Conflict:") ? 409 : 400);
  }
});
