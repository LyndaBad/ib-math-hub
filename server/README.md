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

## Live now
`hub` **v9.2**, deployed 4 November 2026 at 20:26 New York time from commit `75b87cc` (`server/deploy/hub/index.js`); v9.2 = v9 + “Keep open” (per class, or `true` for every class) stops an Exit Ticket closing after the lesson. v9 added:
Exit Tickets closing one hour after the lesson except for students marked absent; targeted retests/retakes only for their
students (and hidden from everyone else); personalised Exit Tickets and Quizzes recorded under their own names.
Checked after deploying: sign-in required (401), class-code join answers, no start-up errors in the logs.
To roll back: deploy `hub` with `index.ts` importing `.../ib-math-hub@a922e40/server/deploy/hub-v8/index.js`.
The `hub-probe` function only reports that the modules load; it returns no data.
