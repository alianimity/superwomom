# 01 · Setup & Conventions

## Recommended Stack (primary)
- Next.js (App Router), TypeScript
- Tailwind CSS, shadcn/ui (Radix primitives), Framer Motion
- react-hook-form + zod (validation)
- Deployed on Vercel

Alternatives:
- Framework: Remix, SvelteKit
- Styling: CSS Modules, styled-components
- Motion: GSAP

## Repo & Tooling
- Node LTS, pnpm or npm
- ESLint + TypeScript strict
- Prettier consistent formatting
- Git branching: feature/*, PR reviews
- Windows PowerShell notes: 
  - Prefer separate commands over chained when needed (cd .. then Remove-Item -Recurse -Force)
  - Use separate git add and git commit commands instead of chained && operations
  - PowerShell console buffer issues: keep commit messages concise to avoid rendering errors

## Project Initialization (Next.js + Tailwind)
<details><summary>Commands</summary>

```bash
npx create-next-app@latest my-site --ts --eslint --src-dir --app --tailwind --use-npm
cd my-site
npm i @radix-ui/react-slot framer-motion zod react-hook-form class-variance-authority lucide-react
```

```bash
# If you see tailwind darkMode array config error, use:
# tailwind.config.ts → export default { darkMode: 'class', ... }
```
</details>

## Directory Structure (App Router)
- src/app/(routes) - service pages should follow consistent URL patterns (/services/[category])
- src/components/(ui + sections) - separate UI components from section components
- src/lib/(utilities)
- public/(assets) - include /logos/SVGs/ for brand assets, favicons
- docs/ - for documentation, catalogs, and playbooks
- memory-bank/ - for project context and decision tracking

## Environment
- Vercel for hosting (zero-config)
- .env for API keys (never commit)
- Preview deployments for each PR

