This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
<!--
	README for Hadisarbain project
	Purpose: Give both end-users and developers a quick orientation.
-->

# Hadisarbain — ইমাম নববির চল্লিশ হাদিস

> A small Next.js + Tailwind site presenting a curated collection of prophetic sayings (Hadith). The UI uses a decorative Persian/Islamic motif in the header, an indexed sidebar of pages, and typeface choices to provide a readable, traditional aesthetic.

---

## Key goals

- Present a browsable collection of hadith organized by themed pages
- Provide a calm, readable UI with subtle geometric ornamentation
- Lightweight, static-friendly Next.js app using Tailwind CSS

---

## Tech stack

- Next.js (app router)
- React + TypeScript
- Tailwind CSS for styling
- Lucide icons (used in UI controls)

---

## Quick start (developer)

Prerequisites: Node.js (16+), Yarn or npm

Install dependencies:

```bash
yarn install
# or
npm install
```

Run dev server:

```bash
yarn dev
# or
npm run dev
```

Open http://localhost:3000 in your browser.

Build for production:

```bash
yarn build
yarn start
```

---

## Project structure (high level)

- `app/` — Next.js app routes and global assets
	- `globals.css` — global Tailwind import and site-wide CSS (scrollbar overrides live here)
	- `layout.tsx`, `page.tsx` — top-level layout and entry page
	- `components/` — main UI components
		- `Header.tsx` — topbar with gradient and subtle SVG pattern
		- `Sidebar.tsx` — page index and navigation (contains item list, styles, background)
		- `QuoteDisplay.tsx` — main quote rendering UI
		- `AboutModal.tsx` — modal shown from header
- `data/quotes.ts` — the quotes/pages dataset used by the app
- `public/` — static assets (images, fonts if any)
- `package.json`, `tsconfig.json`, `next.config.ts` — project config

There is also a `src/` folder (designer/development scaffolding) with additional UI helpers and assets.

---

## Styling & design notes (for the tech person)

- The header uses a horizontal gradient (`from-teal-900 via-emerald-800 to-teal-900`) with an SVG `pattern` overlay for a geometric motif.
- The sidebar was styled to visually match the header using a subtle vertical gradient and (optionally) a lighter repeating SVG pattern. See `app/components/Sidebar.tsx`.
- Fonts used in components: `Cinzel` for headings and `Amiri` for body/serif where appropriate — these are applied inline in components where the decorative style is required.
- Global custom scrollbar styles were added to `app/globals.css` (WebKit + Firefox). Adjust variables there:
	- `--scrollbar-thumb` and `--scrollbar-thumb-hover` for color/contrast.

---

## How to modify content

- Quotes and page data live in `app/data/quotes.ts`. Edit or extend the array to change what the site displays.
- Navigation labels (page themes) come from the same data source.

---

## Developer tips

- When changing styling in `globals.css` or Tailwind config, restart the dev server if you don't see changes.
- Use a hard reload (Ctrl+F5) to clear cached assets when testing CSS updates.
- If you want the sidebar pattern removed or stronger, edit `app/components/Sidebar.tsx` — the SVG overlay and gradient variables are placed there.

---

## Contributing

1. Fork the repo and create a feature branch.
2. Make changes and run the app locally to verify.
3. Open a pull request describing the change.

© Project
