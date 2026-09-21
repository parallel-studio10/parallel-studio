# PARALLEL studio site

Portfolio and commercial website for PARALLEL, the independent digital studio founded by Sehjal Saxena and Sambhav Jain. The public Work archive currently features StudyDump only; other project drafts are held back until ready to share.

## Run locally

```bash
npm install
npm run dev
```

Use `npm test` for enquiry logic and `npm run build` to check the production bundle. `/styleguide` is an internal design reference.

The header appearance control follows the visitor's system theme until they choose light or dark mode. Their choice is saved in the browser.

## Contact configuration

The public studio email is set in `src/data/site.js` and can be overridden with `VITE_STUDIO_EMAIL`. The current address is `workwithparallel0@gmail.com`.

The form sends JSON only when `VITE_CONTACT_ENDPOINT` contains a real URL. The endpoint must accept a `POST` request with `Content-Type: application/json` and return a 2xx response only after it has stored or delivered the enquiry. It must validate data, handle spam and rate limiting, and keep email credentials and other secrets on the server. Vite exposes every `VITE_*` value in the browser, so put only public configuration there.

Without an endpoint, development mode validates the form and shows a clearly labeled preview. A production build prepares a `mailto:` draft addressed to the studio; the visitor must open and send that draft from their email app. A direct email link remains available on the page.

Project types, goals, budget currency and ranges, timeline and referral choices are editable in `src/data/contact.js`. Services links pass a `service` query parameter to preselect a matching project type.

## Content and launch notes

Project metadata and case study narratives live in `src/data/projects.js` and `src/data/caseStudies.js`. Other content is kept in the corresponding `src/data/` modules. Contact logic lives in `src/lib/projectEnquiry.js` and the form component in `src/components/contact/`.

Before publishing, confirm any unknown project details and approved imagery. Set the canonical site URL and social image when available. `public/robots.txt` currently blocks indexing during development. Configure the deployment host to serve `index.html` for direct visits to client-side routes.
