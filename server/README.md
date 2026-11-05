# Deployed server code (backup)

Exact copy of the Supabase Edge Function `hub` as deployed on project `innufzhtrttxecgainwo` (Miss Badmus IB Math Hub),
version 8, downloaded 4 November 2026. JWT verification is off for this function (`verify_jwt: false`);
it checks the Supabase session itself.

- `index.ts` — the request handler (actions: load, save, submit, practice, join, …)
- `policy.js` — what each role may see and change
- `engine.js` — a bundled copy of the site's marking engine

The older copy inside `ib-math-hub-source.zip` (1 November) is superseded by this one.

## Deploying
Supabase loads the server from a pinned GitHub version through jsDelivr (the engine is too large to upload through the connector):
the deployed `hub` function is a one-line `index.ts` that imports
`https://cdn.jsdelivr.net/gh/LyndaBad/ib-math-hub@<commit>/server/deploy/hub/index.js`.
- `deploy/hub/` — current server (built from `supabase/functions/hub/`)
- `deploy/hub-v8/` — rollback: the server exactly as it was before 4 November 2026
- `deploy/probe.js` — checks the modules load (used by the `hub-probe` test function)
