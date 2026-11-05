# Deployed server code (backup)

Exact copy of the Supabase Edge Function `hub` as deployed on project `innufzhtrttxecgainwo` (Miss Badmus IB Math Hub),
version 8, downloaded 4 November 2026. JWT verification is off for this function (`verify_jwt: false`);
it checks the Supabase session itself.

- `index.ts` — the request handler (actions: load, save, submit, practice, join, …)
- `policy.js` — what each role may see and change
- `engine.js` — a bundled copy of the site's marking engine

The older copy inside `ib-math-hub-source.zip` (1 November) is superseded by this one.
