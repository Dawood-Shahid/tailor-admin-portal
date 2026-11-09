# tailor-admin-portal

**Tailor Admin Portal** is a lightweight Next.js app for tailoring shops. The UI wordmark is **Tailor Portal**. This repo is an early shell: the dashboard is wired to mock data; other product areas are placeholders until they are built step by step.

Built with Next.js App Router. API route handlers and future server logic live under `src/app/api/` and `src/lib/`.

## Current status

| Area | Status |
|------|--------|
| Dashboard (`/`) | Implemented — stat card, quick actions, recent activity (mock data) |
| Customers (`/customers`) | Placeholder page only; does not handle `?action=add` or `?focus=search` yet |
| Measurement Categories (`/measurements`) | Placeholder page (nav label “Measurement Categories”; page heading “Measurements”) |
| Login (`/login`) | Form UI only; submit shows an alert; not integrated with access control |
| Auth / logout | Not wired — root layout always shows the app shell |
| API | `GET /api/health` only |
| Persistence | None — `src/lib/auth/` and `src/lib/db/` are reserved, not implemented |

**Not in this repository (do not assume from external design docs):** a separate design-system prototype tree (`styles.css`, `tokens/`, `ui_kits/`), invoices, PKR formatting, WhatsApp share, dynamic measurement category builder, or inch/cm conversion. Product design reference: [Figma](docs/wireframes/README.md).

## Stack

- Next.js 15.5.3 (App Router, Turbopack for dev/build)
- React 19, TypeScript (strict)
- Tailwind CSS v4 — design tokens in `src/app/globals.css` (primary `#635bff`)
- Icons: `lucide-react`; class merging: `clsx`

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

There is no `typecheck` or `test` script in `package.json` yet.

## Routes

| Route | Behavior |
|-------|----------|
| `/` | Dashboard |
| `/customers` | Customers stub |
| `/measurements` | Measurement categories stub |
| `/login` | Login form (currently rendered inside the authenticated shell) |
| `GET /api/health` | Returns `{ ok: true }` |

## Project structure

```
├── docs/                 # Design docs and wireframes
├── public/               # Static assets
├── src/
│   ├── app/              # Pages, layout, components, API routes
│   │   ├── api/          # Route handlers (e.g. health)
│   │   └── components/   # layout, ui, dashboard
│   └── lib/              # Shared types and mock data (auth/db TBD)
│       ├── mock/
│       └── types/
├── package.json
└── next.config.ts
```

Path alias: `@/*` → `src/app/*` (shared lib is imported with relative paths from pages/components).

## Styling

Semantic utilities and `--app-*` tokens are defined in `src/app/globals.css`. Prefer classes such as `background`, `background-light`, `foreground-heading`, `btn-primary`, and border/separator helpers over raw hex in components.

## API

Health check: `GET /api/health`
