# Premium asymmetric editorial redesign

## Outcome
Redesign all seven Build Flow by AG pages into a premium, content-rich architectural consultancy site while preserving the existing TanStack routes, bilingual content system, logo, and brand palette.

## Build
- Expand `content/site.ts` so every new heading, lead, label, alt text, form state, FAQ, breadcrumb, and accessibility label exists in French and English through `bi()`.
- Create shared visual building blocks: highlighted headlines, eyebrow labels, `BrandArc`, blueprint backgrounds, scroll-reveal and count-up behavior, `PageHero`, client-logo fallbacks, image treatments, diagrams, and the split global CTA.
- Replace every page layout with the specified mix of asymmetric splits, overlaps, bento grids, sticky sections, full-image bands, timeline/process views, coverage graphics, accordions, and responsive variants.
- Remove the generated founder portrait and use the requested IA monogram panel until a real photo exists.
- Generate and assign a distinct image to every specified slot, with no reused source, crop, or position. Keep official client-logo imports optional so missing files display styled text fallbacks safely.
- Restyle the shared header and footer, including bilingual labels, complete navigation, footer project strip, and orange arc detail.
- Preserve the front-end-only contact flow, adding the one-second sending state and updated address map query.

## Verification
- Check every route in French and English, including metadata, alt text, breadcrumbs, labels, form states, FAQs, and navigation accessibility.
- Verify all requested image slots are unique and that no generated client logo or founder portrait remains.
- Test layouts and interaction at 375px, 768px, 1280px, and 1440px, including reduced-motion behavior, sticky navigation, anchor tracking, accordions, marquee, count-up, and form validation.
- Confirm the preview build is clean before completion.
