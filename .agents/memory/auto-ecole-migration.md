---
name: Auto-ecole Vite Migration
description: Lessons from migrating Auto École Yosra Harrabi from Next.js/next-intl to react-vite in the pnpm monorepo.
---

## Key decisions

**next-intl → custom React context**: Replaced all `import { useLocale, useTranslations } from "next-intl"` with `@/i18n/context` which exports `useLocale`, `useTranslations`, `useSetLocale`, and `type Locale`.

**Why:** next-intl is a Next.js-only package. The context lives at `artifacts/auto-ecole/src/i18n/context.tsx`.

**How to apply:** Any component that imported from `next-intl` or `@/i18n/routing` must import from `@/i18n/context` instead.

## Workflow env vars

The artifact sets `PORT=24122` and `BASE_PATH=/` in `.replit-artifact/artifact.toml`, but the Replit workflow runner doesn't inject them automatically via `configureWorkflow`. The fix is to inline them:

```
PORT=24122 BASE_PATH=/ pnpm --filter @workspace/auto-ecole run dev
```

**Why:** `vite.config.ts` throws if `PORT` or `BASE_PATH` are missing. The artifact env section only applies to the artifact runner, not the workflow runner.

## @base-ui/react dropdown

The original Next.js app had `@base-ui/react` installed, and the copied `dropdown-menu.tsx` used it. But the react-vite scaffold doesn't include it in `package.json`. Solution: replaced `LanguageSwitcher.tsx` with a plain custom dropdown (no library dependency).

## Cleaned-up Next.js-only files

Deleted: `src/proxy.ts`, `src/i18n/routing.ts`, `src/i18n/request.ts`, `src/app/` directory — these are Next.js middleware/layout files that cause Vite compilation errors if left in place.
