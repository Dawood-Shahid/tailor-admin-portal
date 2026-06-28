# tailor-admin-portal

Tailor Measurement Admin Portal — a lightweight web app for tailoring shops to manage customer profiles and measurements. Includes dashboard, customer management, category measurement, basic authentication, and logout.

Built with Next.js (App Router), with API routes and server logic colocated in the same app.

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

## Project structure

```
├── docs/              # Design docs and wireframes
├── public/            # Static assets
├── src/
│   ├── app/           # Pages, components, and API routes
│   │   └── api/       # Route Handlers (backend)
│   └── lib/           # Shared server logic (db, auth, validators)
├── package.json
└── next.config.ts
```

## API

Health check: `GET /api/health`
