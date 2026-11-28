# Frontend ↔ Figma alignment: change log

Source of truth: `figma/figma.json` (7 frames: Home, Projects ×2 duplicates, Services, Project detail, Contact, Admin).

## 1. Setup
The uploaded zip had no build files, so these were added: `package.json`, `vite.config.js`, `index.html`.
Stack: Vite 7, React 19, React Router 7, Tailwind 4. No extra dependencies.
Google Fonts: Cormorant Garamond 600 and Manrope 400/500/700.

## 2. Design tokens (`src/index.css`)
- Colors: ink `#1e1e21`, muted `#5e5e64`, line `#e8e3d8`, gold `#d2a84c` (text gold `#7a5a12`), cream `#faf8f3` / `#f6eedb`, drawing `#efebe1` → `#e1d9c4`.
- Shadow `shadow-card`: `0 6px 24px rgb(60 45 10 / .08)`.
- Utilities: `wrap` (1296px container, 24/48px padding), `section-y` (104px desktop), `title-page/xl/lg/md/sm`, `text-lead`, `text-body`.

## 3. Files
**New**
- `components/ui/`: `PageHeader`, `SectionHead`, `CarouselControls`, `ProjectCard`, `CtaBanner` (moved from Home), `Field` (+ `FileField`)
- `pages/Services/ServicesPage.jsx`, `pages/Projects/ProjectsPage.jsx`, `pages/ProjectDetail/ProjectDetailPage.jsx`, `pages/Contact/ContactPage.jsx`, `pages/Admin/AdminPage.jsx`
- `data/projectsStore.js`: localStorage for admin-added projects and slider photos

**Modified**
`index.css`, `App.jsx`, `data/siteData.js`, `Navbar`, `Footer`, `Layout`, `Button`, `Logo`, `Blueprint`, `Hero`, `StatsStrip`, `About`, `WhatWeDo`, `FeaturedProjects`, `HowWeWork`, `HomePage`, `PlaceholderPage` (token swap).

**Removed**: `pages/Home/components/CtaBanner.jsx` (now `components/ui/CtaBanner.jsx`).

## 4. Changes by area
- **Header/footer:** 76px header with a 3px gold active underline and a 44px quote button. Footer is a 3-column layout with a divider and copyright line.
- **Home:** hero carousel (3 slides); stats strip with dividers; About image collage; What we do lists; Featured projects scroll-snap carousel (6 cards, dots, arrows); How we work (2.4px gold top border); CTA banner.
- **Services:** selectable list (left) and detail card with image (right).
- **Projects:** filter pills (All, Residential, Commercial, Service buildings, Electrical, Interior, Other) and a 3-column grid.
- **Project detail:** `/projects/:id` with an image carousel, overview, chips, "At a glance" card and "More projects".
- **Contact:** info column plus message form (mock success message).
- **Admin:** new-project form, your projects list, home slider photo upload. Data is saved in the browser only.
- **Data:** added Smouha Clinic Fit-out and Solar Yard Phase 1; renamed Harbor Substation → Harbor Substation Upgrade; added WhatsApp number.
- **Illustrations:** Figma has vector drawings only (no photos), so `Blueprint` was restyled and given new variants: crane, interior, solar.
- **Responsive:** grids collapse from 4/3 columns to 2 and then 1; mobile menu kept; fluid heading sizes (Figma only specifies 1521px).
- **Scroll:** `Layout` scrolls to top on route change.

## 4b. Follow-up requests
1. **Layout crash:** `useEffect(() => window.scrollTo(0,0))` returned a non-function and crashed on unmount ("destroy is not a function"). Fixed by wrapping the call in braces.
2. **Top bar:** the black contact bar moved from the top to the very bottom of the page (below the footer).
3. **Header width:** now full width (24/48px side padding, no 1296px cap).
4. **Admin link:** hidden from the desktop and mobile header menus. Still in the footer; `/admin` still works.
5. **Hero redesign:** slider photo (or line drawing) fills the whole hero, with a dark left-to-right gradient (bottom-up on mobile) and white text on top. The old offset gold frame was removed.

## 5. Bugs found and fixed during verification
- `sr-only` link text escaped the carousel and caused horizontal page overflow (fixed by adding `relative` to `ProjectCard`).
- Six carousel dots overflowed on 390px screens (dots are 36px wide on mobile).
- Hero text and controls shrank toward the center in the flex layout (added `w-full` to the containers).

## 6. Verification
- `vite build` passes.
- All 8 routes load without console errors, with no horizontal overflow at 1521, 820 and 390px.
- Desktop page heights are within about 1–4% of the Figma frames (Home 4947 vs 4910, Contact 1708 vs 1710, Admin 2701 vs 2688). Several pages are 15–60px off, mainly Projects (2135 vs 2080).

## 7. Missing or ambiguous in Figma
- Only "Structural and concrete construction" has service description text.
- Only "Corniche Business Hub" has full detail data; the other projects show only the fields they have.
- Hover, focus and animation states are unspecified.
- The gradient direction and the "Sample drawing" tag styling are estimated.
- No About or Quote frames exist, so those routes stay placeholders.
- Fonts didn't load in my offline test, so check real rendering in a browser.
