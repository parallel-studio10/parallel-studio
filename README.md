# PARALLEL studio site — Milestone 2

The homepage and design system for PARALLEL, an independent digital studio founded by Sehjal Saxena and Sambhav Jain. The Work archive, case studies, Services, About and Contact pages remain provisional for later milestones.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Use `npm run build` to check the production bundle.

## Structure

- `src/data/` holds the site settings, projects, services, team details and homepage copy.
- `src/pages/Home.jsx` composes seven homepage sections. The other public routes remain provisional; `/styleguide` is an internal design reference.
- `src/components/sections/` holds the hero, selected work, studio statement, services, process, founders and closing CTA.
- `src/components/layout/`, `navigation/`, `project/` and `ui/` hold reusable building blocks.
- `src/components/project/MediaFrame.jsx` accepts responsive picture sources when approved project imagery is ready; its current typographic surfaces are deliberate placeholders.
- `src/styles/tokens.css` is the source of design values; `home.css` contains homepage composition and `styleguide.css` documents the visual examples.
- `src/hooks/usePageMeta.js` handles document titles, descriptions, canonical links and social metadata.
- `src/assets/` is reserved for approved project assets.

## Design system

- Space Grotesk Variable is used for display type and the text wordmark; DM Sans Variable is used for body and utility text. Both are self-hosted through `@fontsource-variable` packages with OFL licenses.
- The palette uses warm off-white, near-black, neutral supporting colors and one restrained rust accent. An inverted dark surface is available for occasional contrast.
- The grid has four columns on mobile, eight on tablet and twelve on desktop. Layout helpers cover full spans, paired columns, reading widths and offsets.
- Section sizes, spacing, gutters and interaction timing are tokenized. Motion is limited to small CSS responses and respects reduced-motion preferences.
- `/styleguide` includes wordmark options, type, colors, grid, spacing, actions, metadata, two project-preview studies, image treatments, dark surfaces and rules.

## Homepage

- The editorial hero uses paired rules, staggered type and direct links to selected work and the contact route.
- Three featured projects are read from `src/data/projects.js`. Only StudyDump has a confirmed year and scope; all three use typography in place of unapproved screenshots.
- Services and founder details come from their shared data modules. Motion is limited to CSS entry and hover effects, with a reduced-motion fallback.
- The navigation, previews and all homepage sections adapt from narrow mobile through desktop without horizontal scrolling.

## Before launch

- Confirm the remaining project descriptions, dates, services, images and case studies in `src/data/projects.js`.
- Set `site.url`, `site.socialImage`, email, social links and availability only when those details are confirmed.
- Connect a real enquiry channel and complete the Contact page before presenting it as ready for submissions.
- Replace `public/robots.txt` (currently blocks indexing during development), generate a sitemap and add any confirmed schema markup.
- Decide whether the internal `/styleguide` route should remain available.
- Configure the deployment host to serve `index.html` for direct visits to client-side routes.

No client outcomes, testimonials, pricing, contact details or social handles have been assumed.
