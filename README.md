# Miss Badmus’ IB Math Hub
Inquirers. Thinkers. Reflective Learners.

Live site: https://missbadmusibmath.com/

This version preserves the supplied Claude v2.1 classroom design and adds verified Supabase sign-in, private cloud persistence, roster import and CSV exports. The classroom starts empty. No demonstration accounts or simulated marks are loaded.

## Getting started
The owner is badmuslyn@gmail.com. Choose First-time teacher setup, set your own password, then confirm the message sent to badmuslyn@gmail.com. Use Teacher password reset if you already activated this account. In Data & settings, import a CSV with name,email,group columns (groups: SL-A, SL-B, HL-A, HL-B). Review the import before saving. Reimport matches by email and preserves student work. Deactivation blocks access without deleting work.

Create an activation/reset link for each roster student and give that link privately to that student. Links grant account access: do not post them in a shared Canvas announcement. Students choose their own password. Email delivery is not required.

Create and review assessments before approving and publishing. Student attempts are marked on the server; teacher marking and release remain available. Personalised Do Now plans use recorded topic performance and require teacher publication. IA notebooks, responses, evidence, assessments and settings save to Supabase. Photo/PDF working is in a private storage bucket.

Wait for “Saved to cloud” before closing. Use Refresh to receive work from another device. If a save conflict appears, export your pending backup and reload before editing that item again. The app requires an internet connection and does not cache classroom records for offline use. Your sign-in session is retained in this browser; sign out on shared devices.

Data & settings exports roster, results and evidence CSVs and a full JSON data backup. The JSON contains attachment references; download individual files separately from marking. Add the live URL to Canvas as an external link. There is no Canvas grade sync or school integration.

## Current source (4 November 2026)
The root `index.html` is the live site and the source of truth. `ib-math-hub-source.zip` was refreshed from it: `src/js/` holds each module exactly as it appears in the live page, plus a copy of the live `index.html`. The `supabase/` folder in the zip is still the 1 November copy; see `SOURCE-NOTE.md` inside the zip.

## Source and deployment
- `src/`: frontend source, original question generators, curriculum and pacing data.
- `docs/`: built multi-file preview. The public repository hosts an equivalent bundled `index.html` at its root and a complete source ZIP.
- `supabase/functions/hub/`: authenticated server API and server maths engine.
- `supabase/migrations/`: database tables, RLS and private storage bucket.
- `tests/backend.mjs`: authorization, answer privacy, merge, roster and CSV checks.
- `tools/build-engine.cjs` and `tools/build-live.cjs`: reproducible build.

Requires Node 20+ to build/test. Run `npm run build`, `npm test`, then `npm run serve`. Deploy the `hub` Edge Function with all three source files. It verifies bearer tokens itself, so platform verify_jwt is false. The service-role key is read only from Supabase environment variables; it is never part of the site. Frontend configuration contains only the intended public publishable key.

Supabase project: `innufzhtrttxecgainwo` in LyndaBad’s Org. Auth site URL must be `https://missbadmusibmath.com/`. Owner access is held in `hub_teachers`; student access is checked against active roster emails. Direct database reads/writes by anonymous and authenticated clients are revoked. The Edge Function filters student responses and uses optimistic revision checks to protect concurrent saves.

## Scope and operating limits
This is a small-classroom release using a single versioned classroom document. It is not intended for district-scale usage. It has no paid AI service. Question banks are original generators from the supplied project; no Oxford textbook pages or questions are shipped. Pacing comes from the supplied Claude project and can be reviewed in Course & pacing.

Hosting uses GitHub Pages and the existing Supabase Free organization. Usage limits still apply; a free project may pause when inactive. No paid add-ons were enabled. Export backups regularly; an independent production security review and school approval are outside this implementation.

The vendored Supabase JavaScript client is pinned to 2.95.3 (MIT). Original local font licenses remain with the assets. The supplied branding and project content remain the owner's materials.
