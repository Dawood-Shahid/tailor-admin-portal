# Project Instructions

## Overview

Tailor Admin Portal — a web app for tailoring shops to manage customers and measurements. **Current code** is a Next.js shell: a working dashboard on mock data, stub pages for customers and measurement categories, and login/logout UI without real authentication. Features will be added incrementally; do not treat READMEs from unrelated design-system prototypes as this repo’s file layout or product scope.

## Stack

- Next.js 15 App Router, React 19, TypeScript (strict)
- Tailwind CSS v4 (`@theme` + `@layer components` in `src/app/globals.css`)
- `lucide-react`, `clsx`
- No database, auth library, or client data-fetching layer in dependencies yet

## Commands

From `package.json`:

- Install: `npm install` or `npm ci`
- Development: `npm run dev`
- Build: `npm run build`
- Production server: `npm run start`
- Lint: `npm run lint`

No `typecheck` or `test` script is defined yet.

## Architecture

- **Pages:** `src/app/<route>/page.tsx`
- **Root layout:** `src/app/layout.tsx` — wraps authenticated views in `AppShell` today (`isAuthenticated` is hardcoded)
- **Components:** `src/app/components/{layout,ui,dashboard}/` — camelCase filenames, default exports, `*Props` interfaces; add `'use client'` only when needed
- **Shared logic:** `src/lib/types/`, `src/lib/mock/`; `src/lib/auth/` and `src/lib/db/` are placeholders
- **API:** `src/app/api/**/route.ts` — only `GET /api/health` exists
- **Path alias:** `@/*` → `src/app/*` only
- **Design:** Figma file key `yzCShiLbWqwBQFzsHFAtrc` (see `docs/wireframes/README.md` and `.cursor/rules/figma-design-source.mdc`)

Ask before changing the existing auth or payment flow once those exist.

## Constraints

- Do not change API contracts without approval
- Do not commit secrets
- Do not change native config or server auth without a stated reason
- Do not invent API contracts, environment variables, or business rules
- Out of scope unless explicitly requested: invoices, payments, WhatsApp share, PKR, dynamic category builder from external design-system docs
