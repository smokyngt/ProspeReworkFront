# Prosperify Landing

Next.js landing site for Prosperify. The app uses the App Router, server route handlers for Workspace-backed content and meeting scheduling, and local i18next JSON resources.

## Commands

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run build
```

Workspace-backed blog, team, jobs, and calendar calls require:

```bash
npm --prefix ../workspace/api run seed:landing-key
```

Put the generated key in `WORKSPACE_API_KEY`; keep `WORKSPACE_API_URL` pointed at the Workspace API. For local development, copy `.env.example` to `.env.local` and use:

```bash
WORKSPACE_API_URL=http://localhost:3100/v1
WORKSPACE_API_KEY=<generated landing key>
```

## Structure

- `src/app`: route files, layout, metadata, global CSS, and route handlers.
- `src/features/landing`: landing page sections and page composition.
- `src/features/contact`: contact form UI.
- `src/features/roadmap`: roadmap page components.
- `src/components/ui`: reusable UI primitives.
- `src/components/shared`: reusable landing helpers.
- `src/locales`: translation resources.
- `public/assets`: public brand and partner assets.

## Naming

Use kebab-case for file and folder names. Keep `src/app` route files framework-shaped, and place reusable implementation details under `features`, `components/ui`, or `components/shared`.
