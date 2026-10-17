# Project File Explanation

This document describes the project files and what each contributes. The root Vite-style implementation was removed during cleanup; its earlier role is retained below as a record. `metadata.json`, which appeared in an earlier inventory, is already absent from the current workspace. Installed packages and generated build output are not documented here.

## Which version of the site is active?

The project is configured to run as a **Next.js App Router** website. The `dev`, `build`, and `start` commands in `package.json` all call Next.js. The homepage is `src/app/page.tsx`, which imports sections from `src/components/sections/`. The GitHub Actions workflow also runs the Next.js build and publishes the generated `out/` directory to GitHub Pages.

The project previously contained a separate **Vite/React implementation** in the repository root. Those files were isolated from the Next.js site and have now been removed. The Vite entry also referred to packages absent from `package.json` and a missing `index.css`.

## Removed legacy files

The following files belonged to the removed Vite/React entry. Their explanations are kept below as a record of the old implementation.

- `App.tsx`
- `index.tsx`
- `index.html` (root HTML entry; unrelated to the Next.js `src/app/layout.tsx`)
- `vite.config.ts` (also references packages missing from `package.json`)
- Every file in the root `components/` folder: `About.tsx`, `Collaboration.tsx`, `Contact.tsx`, `Footer.tsx`, `Hero.tsx`, `InteractionShowcase.tsx`, `Navbar.tsx`, `Portfolio.tsx`, `Services.tsx`, and `Tools.tsx`
- `metadata.json` is not listed here because it was already absent before this cleanup. No use by either app entry point was found in the earlier inventory.

Other files are not page components, but serve project or deployment purposes: package manifests, TypeScript/Tailwind/PostCSS/ESLint configuration, `.gitignore`, `README.md`, `.github/copilot-instructions.md`, and `.github/workflows/deploy.yml`. Keep the workflow if GitHub Pages deployment is wanted. The Copilot instructions only guide GitHub Copilot and do not affect the site at runtime. `Explaination.md` is this file.

## Current Next.js site

### `src/app/page.tsx`

Defines the `/` homepage. It imports and renders, in order, the Hero, About, Projects, Experience, Contact, and Footer sections. It is a server component by default; the sections that need browser behavior mark themselves with `'use client'`.

### `src/app/layout.tsx`

Defines the shared HTML shell for all routes: `<html lang="en">`, `<body>`, and the site-wide providers and navigation. It loads Inter through `next/font/google`, imports the global stylesheet, sets the page title and description through Next.js `Metadata`, wraps the page in `ThemeProvider`, and places `Navigation` above the route content. The font is exposed as the CSS variable `--font-geist-sans` despite being Inter.

### `src/app/globals.css`

Loads Tailwind's base styles, component styles, and utilities. It defines light and dark CSS variables, applies those colors and the configured font to the body, adds a text-balancing utility, enables smooth scrolling, and styles WebKit scrollbars (with dark-mode variants). The `.dark` class on the document selects the dark color variables.

### `src/components/Navigation.tsx`

Client-side fixed navigation used by the active layout. A scroll listener sets `scrolled` when the page passes 50 pixels, changing the nav background and border. Its buttons smoothly scroll to the `hero`, `about`, `projects`, `experience`, and `contact` element IDs. Framer Motion animates the nav entrance and link hover/entrance. The bar only shows section links at medium screen widths and above. The dark-state background class contains `bg-white/`, which appears malformed and may not produce the intended light background utility.

### `src/components/ThemeProvider.tsx`

Client-side context wrapper for theme state. On mount it adds `dark` to the document element. The context currently always reports `theme: 'dark'`, and `toggleTheme` is an empty function; it provides the API shape for a theme switch but does not actually switch themes. `useTheme()` exposes this context to child components. The current page appears dark because the provider always adds the class.

### `src/components/sections/Hero.tsx`

Renders the introduction and primary links. Framer Motion variants make the heading, copy, buttons, and social links appear in a staggered sequence. Content includes the developer's name and education, with anchors to `#projects` and `#contact`, plus GitHub and LinkedIn links. Text and personal details are hard-coded in the component.

### `src/components/sections/About.tsx`

Renders the biography and a list of core skills. It uses the `useInView` hook with a 20% visibility threshold, then animates the heading, paragraphs, and skill chips when the section enters the viewport. The biography and skills are inline arrays, so edits are made directly in this file.

### `src/components/sections/Projects.tsx`

Defines project data in a local `projects` array (currently Crop Health AI and Weather App), including each title, description, technology list, and GitHub URL. It renders one animated link card per project and technology chips within each card. The custom `useInView` hook triggers the reveal animations when the section enters the viewport.

### `src/components/sections/Experience.tsx`

Defines education, personal project work, and open-source entries in an `experiences` array. It renders them as a vertical timeline with title, period, organization, and description. `useInView` starts the staggered Framer Motion animations as the section becomes visible. The entries are descriptive static content, not data fetched from an API.

### `src/components/sections/Contact.tsx`

Renders a contact heading, email link, GitHub button, and GitHub/LinkedIn/email links. It animates these elements when visible using `useInView`. The email address and profile URLs are hard-coded. The links use `target="_blank"` and `rel="noopener noreferrer"` where they open an external page.

### `src/components/sections/Footer.tsx`

Renders a simple footer with a copyright line. `new Date().getFullYear()` keeps the year current without manual updates. It uses Tailwind classes for spacing, border, and light/dark text colors.

### `src/hooks/useInView.ts`

Implements a reusable React hook around the browser's `IntersectionObserver`. It returns a ref to attach to an HTML element and a boolean `isInView`. Optional `threshold` and `rootMargin` values customize when the element counts as visible. Once visibility becomes true, it stays true; the effect disconnects observation by unobserving the element on cleanup. The hook is used by About, Projects, Experience, and Contact.

## Historical: root-level alternate React/Vite implementation (removed)

These files formed a separate dark, neon-accented portfolio. They were connected through `App.tsx`; the Next.js route did not import them.

### `App.tsx`

Assembles the alternate portfolio from root `components/`: Navbar, Hero, About, Portfolio, Services, Tools, InteractionShowcase, Collaboration, Contact, and Footer. It uses React state and an effect to wait until the component mounts before rendering, then adds the page background, text colors, selection styling, and two blurred decorative gradients. This is the root app imported by `index.tsx`.

### `index.tsx`

The React DOM entry for the alternate app. It looks for `<div id="root">`, throws a clear error if it is missing, creates a React 19 root, and renders `<App />` inside `React.StrictMode`.

### `index.html`

An HTML shell for the alternate Vite-style app. It sets the document title and viewport, loads Tailwind and Google Fonts from CDNs, configures custom Tailwind colors/fonts/utilities, defines a few CSS effects, and provides the `root` mount element. An import map loads React, Framer Motion, and Lucide from `esm.sh`; the module script starts `index.tsx`. It also links to `/index.css`, which is absent. This is not the HTML template used by the Next.js application.

### `components/Navbar.tsx`

Alternate app's responsive navigation. A scroll listener changes the nav's glass-like background after 50 pixels. `navLinks` defines anchor links for Home, About, Portfolio, Services, and Contact. React state controls a full-screen mobile menu, while Framer Motion animates the navbar, overlay, and links. The small profile image is loaded from GitHub.

### `components/Hero.tsx`

Alternate app's large portfolio title section. It uses Framer Motion scroll hooks to shift the grid, title, subtitle, accent, and buttons while scrolling, and fades them near the bottom of the hero. Entrance animations introduce the “Creative Developer” label, “PORTFOLIO” heading, initials, and two buttons. The buttons are currently visual controls without click handlers or anchor destinations.

### `components/About.tsx`

Alternate app's profile section. It combines an externally hosted GitHub avatar, school/role badge, animated biography, GitHub and contact links, and three static statistic blocks. Framer Motion reveals the image and copy as the section enters view. The text, numbers, and links are hard-coded.

### `components/Portfolio.tsx`

Alternate app's draggable project carousel. A local array defines three project cards with title, category, image URL, and external link. React refs measure the slider and viewport; `ResizeObserver` and a window resize listener update drag constraints. Framer Motion enables horizontal dragging. Cards show images, category/title overlays, and hover effects.

### `components/Services.tsx`

Alternate app's expertise section. It maps a local list of website design, graphic design, and 3D modeling entries into large hoverable rows. Each row shows its description and an animated arrow on hover. The `motion` import is present but not used; the markup itself uses CSS/Tailwind hover states.

### `components/Tools.tsx`

Alternate app's technology grid. A static array of languages, frameworks, and tools is mapped into responsive cards. Framer Motion animates cards into view with small delays and scales them on hover.

### `components/InteractionShowcase.tsx`

Alternate app's interactive animation demo grid. It demonstrates a hoverable shape, a click counter (`useState`), a draggable circle constrained to a region, and an infinitely rotating shape. Framer Motion powers the interactions and Lucide icons label each example.

### `components/Collaboration.tsx`

Alternate app's animated “Skills Ecosystem” diagram. A `nodes` array stores labels and x/y offsets. The component draws a grid and center point, then uses SVG lines and positioned animated labels to connect the center to each skill node. Framer Motion controls reveal, pulse, and hover animations.

### `components/Contact.tsx`

Alternate app's contact section. It shows a headline, hard-coded email and location, decorative gradient effects, and a styled contact form with name/email fields and interest buttons. The form has no submit handler or `action`, so it is presentation-only and does not send messages. Interest buttons are explicitly `type="button"` and do not track a selection.

### `components/Footer.tsx`

Alternate app's social footer. It renders icon links for Instagram, Twitter, LinkedIn, and GitHub, plus a copyright year generated at runtime. The Twitter link currently uses `href="#"`, so it does not point to a real profile.

## Project configuration, docs, and automation

### `package.json`

Defines project metadata, npm scripts, and direct dependencies. Scripts run the Next.js dev server, production build, production server, and lint command. Runtime libraries include Next.js, React, Framer Motion, and Lucide icons; development tools include TypeScript, Tailwind, PostCSS, Autoprefixer, ESLint, and type definitions. It does **not** declare Vite or `@vitejs/plugin-react`, even though `vite.config.ts` imports them.

### `package-lock.json`

Generated npm lockfile that records the resolved versions and dependency graph for repeatable installs (`npm ci`). It is generated from `package.json` and normally should be changed by npm when dependencies are installed or updated, rather than edited by hand.

### `next.config.ts`

Configures Next.js to export a static site into `out/`, supports a configurable base path through `NEXT_PUBLIC_BASE_PATH`, sets asset paths to work under that base path, adds trailing slashes to routes, and disables Next image optimization for static hosting. The GitHub Pages workflow sets the base path based on the repository name.

### `vite.config.ts`

Configuration for the alternate Vite app: starts the dev server on port 3000 and host `0.0.0.0`, installs the React plugin, exposes `GEMINI_API_KEY` under two `process.env` names, and maps `@` to the repository root. The current app has no declared Vite dependencies and uses a different alias (`@/*` maps to `src/*` in TypeScript), so this config is not part of the active Next.js build.

### `tsconfig.json`

Sets TypeScript compiler options for modern browser libraries and ES modules, strict checking, no emitted JS, preserved JSX, JSON imports, incremental checking, and Next.js plugin support. The `@/*` alias points imports to `src/*`. It includes TypeScript and TSX files across the project, including the alternate root components, and excludes `node_modules` and `vite.config.ts`.

### `tailwind.config.ts`

Tells Tailwind to scan Next.js `src/pages`, `src/components`, and `src/app` for class names. It enables class-based dark mode, connects Tailwind's `background` and `foreground` colors to CSS variables, configures sans/mono font stacks, and defines fade/slide animations. It does not scan the root `components/` directory, which is another sign that those components belong to a separate, inactive setup.

### `postcss.config.mjs`

Registers Tailwind CSS and Autoprefixer as PostCSS plugins. Tailwind expands utility directives, and Autoprefixer adds browser-specific CSS prefixes when needed.

### `.eslintrc.json`

Extends Next.js Core Web Vitals lint rules. It supplies lint configuration for the Next.js project and works with the lint script in `package.json` when supported by the installed Next.js/ESLint versions.

### `.gitignore`

Lists local or generated files Git should normally omit: installed dependencies, Next.js and build output, coverage, logs, local environment files, Vercel state, and TypeScript build artifacts. It does not delete these files; it keeps them out of version control.

### `metadata.json`

Stores a name and description for a “Lumina Creative Portfolio.” No imports or runtime use were found in the active Next.js page or root React entry, so it currently appears to be unused metadata, possibly retained from a design or generation tool.

### `README.md`

Project-level usage guide with setup commands, feature/stack descriptions, project structure, customization pointers, and deployment advice. It describes the Next.js app and should be treated as documentation, not executable code. Some claims (such as Next.js “14+”) are broader than the installed Next.js 15.1 dependency.

### `.github/copilot-instructions.md`

Repository instructions for GitHub Copilot, describing the intended stack and design style. It is read by compatible Copilot tooling and has no effect on the website's runtime or build output.

### `.github/workflows/deploy.yml`

GitHub Actions workflow that runs on pushes to `main` or manual dispatch. It checks out the repository, installs Node 20 and npm dependencies, calculates the GitHub Pages base path, runs `npm run build`, uploads `out/`, and deploys the artifact to GitHub Pages. Keep this file if this automatic deployment is desired.

## Practical cleanup recommendation

The isolated root Vite-style app (`App.tsx`, `index.tsx`, `index.html`, `vite.config.ts`, and the ten files under root `components/`) was not used by the active Next.js deployment. Its alternate entry lacked its Vite dependencies and referenced an `index.css` that was not present. `metadata.json` was not used by either app entry point and is now absent. The remaining configuration and documentation support the Next.js app, its development/build workflow, or GitHub Pages deployment.

## Cleanup completed

The unused root Vite-style files described above have now been removed. `metadata.json` was already absent when cleanup began. The Next.js application under `src/`, its Vercel-compatible configuration, GitHub Pages workflow, and documentation remain in place. `.gitignore` now also ignores environment files (while allowing `.env.example`) and the generic `dist/` build-output directory.
