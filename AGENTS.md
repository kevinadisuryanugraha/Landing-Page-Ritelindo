<!-- bmad:context -->
<!-- Verified 2026-10-07 against cb748a3d995bd9dea486f4a80c3211299f31bb3c. Managed by bmad-project-context; edits inside this block are replaced on refresh. Keep anything you want preserved outside the markers. -->

## Landing-Page-Ritelindo

High-converting B2B Landing Page for Ritelindo Group (Google Ads Search Campaign). React 18, Vite 5, TypeScript, Tailwind CSS. Planning documents and specifications live in `docs_kevin/` (`PRD-Landing-Page-Ritelindo.md`, `DESIGN.md`, `EXPERIENCE.md`, `ARCHITECTURE.md`, `TICKETS.md`).

## Policy

- Content must remain decoupled: all marketing copy, 7 value propositions, package details, FAQs, and testimonials live in `src/data/content.ts`; do not hardcode marketing text in JSX components.
- Exactly one `<h1>` tag allowed across the entire landing page (in `src/components/Hero.tsx`) for B2B on-page SEO compliance.
- Every external link opening in a new tab must have `target="_blank" rel="noopener noreferrer"` to prevent reverse tabnabbing.
- Never add backend database dependencies or server-side authentication; this is an ultra-fast static site.

## Where things are

- Central data store: `src/data/content.ts`
- WhatsApp URL generator & UTM tracking preservation: `src/utils/whatsapp.ts`
- UI Component layer: `src/components/` (Navbar, Hero, ValueProps, Layout3DSection, PackageShowcase, BusinessSectors, WorkflowSection, Testimonials, FaqAccordion, FinalCta, Footer, StickyWhatsApp)
- HTML entry & SEO Open Graph metadata: `index.html`
- Static build output: `dist/`

## Running and verifying

- Local development: `npm run dev` (starts Vite dev server at `http://localhost:5173`).
- Production verification: `npm run build` (runs `tsc && vite build`).
- Local preview of production build: `npm run preview`.
- CI/CD build outputs to `dist/` and deploys cleanly to Vercel, Netlify, or GitHub Pages.

## Conventions that differ from defaults

- Design tokens defined in `tailwind.config.js`: `primary` (`#0A3981`), `whatsapp` (`#25D366`), `brandGold` (`#F59E0B`).
- Mobile-first thumb zone: sticky bottom CTA bar is strictly visible on `< 768px` (`md:hidden fixed bottom-0`), while desktop has a floating action bubble (`hidden md:block fixed bottom-6 right-6`).
- Font family uses Plus Jakarta Sans preconnected from Google Fonts with sans-serif fallback.

## Known pitfalls

- `"noUnusedLocals": true` in `tsconfig.json` causes `tsc` to fail on unused imports; always remove unused variables before building.
- WhatsApp message text must always be URL-encoded using `encodeURIComponent()` to avoid broken links on mobile browsers.

<!-- /bmad:context -->

<!-- antislop:start -->
## antislop
For UI, copy, people, mobile layout, or code comments work, read `antislop.md` (core) and then the skill for the task:
- UI / visual: `.agents/skills/antislop-ui/SKILL.md`
- Copy & text: `.agents/skills/antislop-copywriting/SKILL.md`
- People: `.agents/skills/antislop-human/SKILL.md`
- Mobile / responsive: `.agents/skills/antislop-layoutmobile/SKILL.md`
- Code comments: `.agents/skills/antislop-code/SKILL.md`

Before starting, follow the core's "Two Usage Modes" section in strict order: explicit session instruction first, then global preference, then ask. A session instruction always wins. For a resolved mode, say `antislop active: <mode> (session override).` or `antislop active: <mode> (global preference).` once before presenting findings or making edits, using the actual mode and source.
<!-- antislop:end -->
