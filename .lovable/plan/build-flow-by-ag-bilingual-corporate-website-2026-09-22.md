# Build Flow by AG — Bilingual Corporate Website

## Overview
Build a seven-page French/English corporate website for Build Flow by AG, using the supplied logo and a cohesive set of AI-generated engineering and architecture visuals. French will be the default language, with a persistent FR/EN switch affecting every page, navigation item, form label, and footer entry.

## Pages and navigation
- Create real routes for `/`, `/about`, `/expertise`, `/services`, `/methodology`, `/references`, and `/contact` using the project’s native TanStack routing.
- Add a shared sticky header with the supplied logo, desktop navigation, contact action, language switcher, and a menu below 1024px.
- Add a shared four-column footer with company summary, quick links, service links, and contact details.
- Give every route unique bilingual title, description, Open Graph, and Twitter metadata.

## Design system and assets
- Define the supplied blue, lighter blue, orange, grey, light-grey, and white palette as semantic design tokens.
- Use Manrope with bold structured headings, tracked uppercase labels, restrained shadows, compact corner radii, and generous section spacing.
- Upload the supplied logo as a project asset and use it unchanged in the header and footer.
- Generate a coordinated visual set: architectural hero, company/blueprint image, founder portrait placeholder, residential, retail, office, industrial, and coverage imagery. Keep all visuals realistic, professional, and color-coordinated.
- Use Lucide line icons for services, expertise, values, contact, and methodology.

## Shared content and components
- Centralize all French and English copy in one typed content module, organized by shared content and page.
- Add a language context with French as default and browser persistence after hydration.
- Build reusable header, footer, section heading, card, button, page intro, call-to-action banner, and methodology stepper components.
- Ensure links use native client navigation and active states.

## Page implementation
- **Home:** immersive image-led introduction, overview, four expertise cards, client text-badge strip, value points, and closing contact banner.
- **About:** company introduction, generated company visual, founder profile with generated portrait placeholder, and three key facts.
- **Expertise:** four alternating image/text sections for residential, retail, offices, and technical projects.
- **Services:** nine aligned service cards and a six-point value checklist.
- **Methodology:** six-step connected process on desktop and vertical stepper on mobile, ending with a contact action.
- **References:** four project-category blocks, client badges, a stylized Morocco/MENA coverage visual, and closing rationale.
- **Contact:** validated bilingual form with subject selection and simulated success state, plus clickable contact details and a generic Casablanca Google Maps embed.

## Responsive and interaction quality
- Build mobile-first layouts for approximately 640px, 1024px, and 1280px breakpoints.
- Keep multi-item header rows stable on narrow screens; prevent clipping and overlap.
- Add restrained transitions for navigation, cards, buttons, menu opening, and image reveals, while respecting reduced-motion preferences.
- Verify every page at desktop and mobile widths, including menu behavior, language persistence, links, form validation, metadata, contrast, and generated imagery.

## Technical notes
- The existing project is TanStack Start, so the requested URL structure will use its built-in React router rather than adding a conflicting router package.
- The contact form is intentionally client-only for this MVP and will not send email or store submissions.
- Listed client names will appear as typographic badges; no fabricated brand marks will be created.
