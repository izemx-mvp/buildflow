# Build Flow Global

Build a multi-page, bilingual (French/English) corporate marketing website (vitrine site, no e-commerce) for "Build Flow by AG," a construction engineering consulting firm based in Casablanca, Morocco, offering AMO (Assistance à la Maîtrise d'Ouvrage), OPC (Ordonnancement, Pilotage et Coordination), and Project Management services for residential, retail, office, and industrial construction projects across Morocco, MENA, and international markets.

ASSETS
- Logo: attach the uploaded Build Flow by AG logo file directly in Lovable (drag it into the chat/project) and reference it as the header/footer logo — do not recreate or redraw the logo from the text description.
- Images: this project has no real photography available. For every image used (hero background, section visuals, founder portrait placeholder, domain/expertise section visuals, etc.), generate an image (AI-generated) rather than using a stock photo placeholder or a grey box — generate construction/architecture/engineering-appropriate visuals (e.g. blueprint close-ups, modern building facades, construction site coordination, office fit-out spaces) matching the blue/orange/grey palette described below. Do not use lorem-picsum or unsplash placeholder URLs.

TECH & STRUCTURE
- React + TypeScript (TSX), React Router with a real route per page (not a single-page scroll): "/", "/about", "/expertise", "/services", "/methodology", "/references", "/contact".
- Global language state (FR default, EN toggle) via context, persisted in localStorage, applied across every page, header, and footer — build it so all page text pulls from a central FR/EN content object per page, not hardcoded strings, so content is easy to edit later.
- Fully responsive: mobile-first, breakpoints at ~640px / 1024px / 1280px. Test that the header nav collapses into a mobile menu (hamburger) below 1024px.
- Reusable components: Header (logo + nav + language toggle + CTA button), Footer (contact summary + nav links + social placeholders), SectionHeading (uppercase eyebrow + title + optional subtitle), Card (icon/title/text), Button (primary orange, secondary outline blue), Timeline/Stepper (for methodology).

DESIGN SYSTEM
- Primary blue: #1B4F8C (headings, primary nav, icons). Secondary/lighter blue: #2E6DB4 for gradients/hovers.
- Accent orange: #F5821F (CTAs, highlights, numbers, underline accents) — use sparingly, as an accent not a dominant color.
- Neutral dark grey: #4A4A4A (body text, secondary labels). Light grey background for alternating sections: #F5F6F8. White: primary background.
- Typography: a clean modern sans-serif (e.g. Inter, Manrope, or similar geometric sans). Headings bold, uppercase, letter-spacing +0.02em on eyebrows/labels (matches the logo's "CONSEIL EN INGÉNIERIE" tracking). Body text regular weight, 16-18px, comfortable line-height (1.6).
- Section rhythm: generous vertical padding (80-120px desktop, 48-64px mobile) between sections, alternating white / light-grey backgrounds for visual separation.
- Buttons: pill or slightly rounded rectangle, orange fill with white text for primary CTAs ("Nous contacter" / "Contact Us"), blue outline for secondary.
- Icons: simple line icons (construction/engineering themed — blueprint, hard hat, building, checklist, handshake, clipboard) for services and domain cards.
- Overall tone: corporate, precise, confident, structured — NOT playful, NOT startup-flashy. Think engineering firm / consulting brand, similar to AMO/project-management agencies.
- Header: white background, logo on the left (Build Flow by AG logo — blue building icon with orange upward arrow, wordmark "BuildFlow" in blue/orange gradient + "BY AG" + "CONSEIL EN INGÉNIERIE" tagline), nav links center/right, language toggle (FR | EN) and a primary CTA button "Contact" on the far right. Sticky on scroll with subtle shadow.
- Footer: dark blue (#1B4F8C) or dark grey background, white text, 3-4 columns: company blurb + logo, quick nav links, services list, contact info (phone/email/address). Bottom bar with copyright.

============================================
PAGE 1 — HOME ("/")
============================================

HERO SECTION
- Full-width hero, dark blue background or blue gradient with a subtle construction/architecture photo overlay (dark overlay so text is legible), OR a clean white hero with a large architectural/blueprint-style graphic on the right and text on the left — choose whichever renders better, but keep it corporate.
- Eyebrow label: "CONSEIL EN INGÉNIERIE DE CONSTRUCTION" / "CONSTRUCTION ENGINEERING CONSULTING"
- H1: "Votre projet, notre expertise. De l'idée à la livraison." / "Your project, our expertise. From concept to delivery."
- Subtext: "AMO • OPC • Project Management — Maroc • MENA • International" / "AMO • OPC • Project Management — Morocco • MENA • International"
- Primary CTA button: "Nous contacter" / "Contact Us" (links to /contact)
- Secondary CTA (text link or outline button): "Découvrir nos services" / "Discover Our Services" (links to /services)

INTRO SECTION
- Centered short paragraph: "Build Flow by AG accompagne particuliers, investisseurs, enseignes et entreprises dans le pilotage de leurs projets de construction, d'aménagement et de rénovation. Notre approche repose sur une coordination structurée des intervenants, un suivi de terrain et une attention constante portée aux coûts, aux délais, à la qualité et à la bonne livraison du projet." / "Build Flow by AG supports individuals, investors, retail brands, and companies in managing their construction, fit-out, and renovation projects. Our approach is built on structured coordination between stakeholders, hands-on site follow-up, and constant attention to cost, timeline, and quality throughout delivery."

DOMAINS OF EXPERTISE — 4-card grid (2x2 on mobile, 4 across on desktop)
1. Résidentiel / Residential — icon: house — "Villas, extensions, piscines, aménagements extérieurs, second œuvre et coordination de chantier." / "Villas, extensions, pools, outdoor landscaping, finishing works, and site coordination."
2. Retail — icon: storefront/shopping bag — "Projets pour Nike, Mango, Tommy Hilfiger, Calvin Klein, Crocs, H&M et autres enseignes internationales." / "Projects for Nike, Mango, Tommy Hilfiger, Calvin Klein, Crocs, H&M, and other international brands."
3. Bureaux & espaces professionnels / Offices & Professional Spaces — icon: office building — "Aménagement, consultation, budget, planning, coordination et suivi d'exécution." / "Fit-out, consulting, budgeting, planning, coordination, and execution follow-up."
4. Industrie & projets techniques / Industry & Technical Projects — icon: gear/factory — "Coordination des intervenants, suivi documentaire, contrôle d'avancement et assistance à la réception." / "Stakeholder coordination, document tracking, progress control, and handover assistance."
Each card links to /expertise. Card style: white background, subtle shadow, icon in orange circle, hover lift effect.

CLIENT LOGO STRIP
- Section title: "Ils nous font confiance" / "They Trust Us"
- Horizontal logo strip / marquee (greyscale logos, color on hover if possible) for: Nike, Mango, Tommy Hilfiger, Calvin Klein, Crocs, H&M. (Use text-based placeholder badges styled as logo chips if actual logo assets aren't available — do not fabricate logo images.)

WHY BUILD FLOW — 3-4 short value points with icons, condensed from: "Un interlocuteur unique pour le client" / "A single point of contact", "Une vision globale du projet" / "A global project view", "Une coordination claire entre tous les intervenants" / "Clear coordination between all stakeholders", "Un suivi structuré des coûts, délais, qualité" / "Structured tracking of cost, timeline, and quality".

CLOSING CTA BANNER
- Orange or blue full-width banner: "Prêt à démarrer votre projet ?" / "Ready to start your project?" + button "Contactez-nous" / "Contact Us" → /contact

============================================
PAGE 2 — ABOUT US ("/about")
============================================
- Page header: eyebrow "QUI SOMMES-NOUS" / "ABOUT US", title "Notre histoire, notre engagement" / "Our Story, Our Commitment"
- Company intro paragraph (2-column layout, text left, image/graphic placeholder right): "Build Flow by AG accompagne particuliers, investisseurs, enseignes et entreprises dans le pilotage de leurs projets de construction, d'aménagement et de rénovation, avec une coordination structurée, un suivi de terrain rigoureux et une attention constante aux coûts, délais et qualité." / English equivalent as provided below.
- FOUNDER SECTION — reversed 2-column layout (photo placeholder left, text right): 
  - Label: "NOTRE FONDATRICE" / "OUR FOUNDER"
  - Name: "Imane Aadnan"
  - Title: "Gérante | Project Manager" / "Managing Director | Project Manager"
  - Bio: "Ingénieure en Génie Civil, diplômée de l'EMSI en 2016. Depuis mars 2016, Imane intervient sur des projets résidentiels, commerciaux, tertiaires et d'aménagement, avec une expérience de pilotage, coordination et suivi d'exécution. Son objectif : offrir au client un interlocuteur unique capable de structurer et piloter le projet de A à Z." / "Civil Engineer, graduate of EMSI (2016). Since March 2016, Imane has worked on residential, commercial, office, and fit-out projects, with experience in project management, coordination, and execution follow-up. Her goal: to give clients a single point of contact able to structure and manage their project from A to Z."
- Optional stat row: "2016" (founded/since) — "Maroc • MENA • International" (coverage) — "6+" domains/services — style as 3 bold stat blocks.

============================================
PAGE 3 — AREAS OF EXPERTISE ("/expertise")
============================================
- Page header: eyebrow "DOMAINES D'INTERVENTION" / "AREAS OF EXPERTISE", title "Des projets variés, une méthode unique" / "Diverse Projects, One Proven Method"
- 4 detailed alternating sections (image/graphic placeholder alternating left/right, text on the other side), each with a title, 1-2 sentence description, and a small bullet list of typical project types:

1. Résidentiel / Residential
   FR: "Villas, extensions, piscines, aménagements extérieurs, second œuvre et coordination de chantier."
   EN: "Villas, extensions, pools, outdoor landscaping, finishing works, and site coordination."
   Bullets: Villas • Extensions • Piscines/Pools • Aménagements extérieurs/Outdoor landscaping • Second œuvre/Finishing works

2. Retail
   FR: "Projets pour Nike, Mango, Tommy Hilfiger, Calvin Klein, Crocs, H&M et autres enseignes internationales."
   EN: "Projects for Nike, Mango, Tommy Hilfiger, Calvin Klein, Crocs, H&M, and other international brands."
   Bullets: Aménagement de boutiques/Store fit-outs • Coordination multi-sites/Multi-site coordination • Suivi de chantier/Site follow-up

3. Bureaux & espaces professionnels / Offices & Professional Spaces
   FR: "Aménagement, consultation, budget, planning, coordination et suivi d'exécution."
   EN: "Fit-out, consulting, budgeting, planning, coordination, and execution follow-up."
   Bullets: Aménagement de bureaux/Office fit-out • Gestion de budget/Budget management • Planning et coordination/Planning & coordination

4. Industrie & projets techniques / Industry & Technical Projects
   FR: "Coordination des intervenants, suivi documentaire, contrôle d'avancement et assistance à la réception."
   EN: "Stakeholder coordination, document tracking, progress control, and handover assistance."
   Bullets: Coordination des intervenants/Stakeholder coordination • Suivi documentaire/Document tracking • Assistance à la réception/Handover assistance

============================================
PAGE 4 — SERVICES ("/services")
============================================
- Page header: eyebrow "NOS SERVICES" / "OUR SERVICES", title "Un accompagnement complet, de A à Z" / "Full Support, From A to Z"
- 3x3 grid (or 3-column list) of 9 service cards, each with an icon, short title, and one-line description:

1. FR: "Assistance à la Maîtrise d'Ouvrage (AMO)" / EN: "Owner's Project Management Assistance (AMO)"
2. FR: "Ordonnancement, Pilotage et Coordination (OPC)" / EN: "Scheduling, Management & Coordination (OPC)"
3. FR: "Project Management" / EN: "Project Management"
4. FR: "Coordination des études et des intervenants" / EN: "Design & stakeholder coordination"
5. FR: "Consultation des entreprises et analyse des offres" / EN: "Contractor consultation and bid analysis"
6. FR: "Planning, suivi des coûts et reporting" / EN: "Planning, cost tracking, and reporting"
7. FR: "Suivi d'exécution et contrôle qualité" / EN: "Execution follow-up and quality control"
8. FR: "Assistance aux opérations de réception et levée des réserves" / EN: "Handover assistance and punch-list management"
9. FR: "Structuration documentaire / DOE" / EN: "Documentation structuring / As-built records (DOE)"

- Below the grid, add a "NOTRE VALEUR AJOUTÉE" / "OUR VALUE" section — 6 short value points in a 2x3 or 3x2 checklist layout with checkmark icons:
  FR: Un interlocuteur unique pour le client • Une vision globale du projet et de ses interfaces • Une présence terrain orientée résultats • Une coordination claire entre maîtrise d'ouvrage, maîtrise d'œuvre, BET, entreprises et fournisseurs • Un suivi structuré des coûts, délais, qualité et livrables • Une communication régulière et transparente
  EN: A single point of contact for the client • A global view of the project and its interfaces • Results-driven on-site presence • Clear coordination between owner, architect, engineering firms, contractors, and suppliers • Structured tracking of cost, timeline, quality, and deliverables • Regular, transparent communication

============================================
PAGE 5 — METHODOLOGY ("/methodology")
============================================
- Page header: eyebrow "NOTRE MÉTHODOLOGIE" / "OUR METHODOLOGY", title "Une méthode structurée, du premier jour à la livraison" / "A Structured Method, From Day One to Delivery"
- Vertical timeline/stepper component (numbered 01-06), each step with a large orange number, title, and description. On desktop this can be a horizontal stepper with connecting line; on mobile, stack vertically.

01 — FR: "Analyse" — "Compréhension des objectifs, contraintes et enjeux du projet." / EN: "Analysis" — "Understanding the project's goals, constraints, and challenges."
02 — FR: "Planification" — "Structuration des phases, jalons, intervenants et priorités." / EN: "Planning" — "Structuring phases, milestones, stakeholders, and priorities."
03 — FR: "Consultation" — "Préparation, consultation et analyse des offres." / EN: "Consultation" — "Preparing, running, and analyzing bids."
04 — FR: "Coordination" — "Pilotage des interfaces et suivi des actions." / EN: "Coordination" — "Managing interfaces and tracking actions."
05 — FR: "Contrôle" — "Avancement, qualité, coûts, délais et documentation." / EN: "Control" — "Progress, quality, cost, timeline, and documentation."
06 — FR: "Réception" — "Préparation, assistance à la réception, réserves et clôture." / EN: "Handover" — "Preparation, handover assistance, punch lists, and closeout."

- Closing CTA under the timeline: "Discutons de votre projet" / "Let's discuss your project" button → /contact

============================================
PAGE 6 — REFERENCES ("/references")
============================================
- Page header: eyebrow "RÉFÉRENCES & EXPÉRIENCE" / "REFERENCES & EXPERIENCE", title "Des projets qui parlent d'eux-mêmes" / "Projects That Speak for Themselves"
- 4 reference category blocks (card or alternating layout), each with a title and description:

1. FR: "Retail" — "Nike, Mango, Tommy Hilfiger, Calvin Klein, Crocs, H&M et autres enseignes." / EN: "Retail" — "Nike, Mango, Tommy Hilfiger, Calvin Klein, Crocs, H&M, and other brands."
2. FR: "Bureaux" — "Projets d'aménagement et de transformation d'espaces professionnels à Casablanca, notamment Twin Center et Zenith Sidi Maârouf." / EN: "Offices" — "Fit-out and transformation projects for professional spaces in Casablanca, including Twin Center and Zenith Sidi Maârouf."
3. FR: "Résidentiel" — "Villas, piscines, façades, dallages, aménagements extérieurs et coordination des corps d'état." / EN: "Residential" — "Villas, pools, facades, paving, outdoor landscaping, and trade coordination."
4. FR: "Projets techniques" — "Accompagnement de projets industriels et missions de documentation, coordination et préparation à la réception." / EN: "Technical Projects" — "Support for industrial projects and documentation, coordination, and handover preparation missions."

- COVERAGE MAP SECTION: eyebrow "ZONE D'INTERVENTION" / "COVERAGE", list or simple map graphic showing: "Maroc entier" / "All of Morocco", "Afrique du Nord" / "North Africa", "Moyen-Orient (MENA)" / "Middle East (MENA)", "Projets internationaux selon les besoins du client" / "International projects as needed"
- "POURQUOI BUILD FLOW" / "WHY BUILD FLOW" closing text block: FR: "Parce qu'un projet réussi nécessite plus que l'exécution de travaux : il nécessite une vision d'ensemble, une coordination rigoureuse et des décisions prises au bon moment. Build Flow intervient aux côtés du client pour structurer le projet, coordonner les parties prenantes et accompagner sa réalisation jusqu'à la livraison." / EN: "Because a successful project takes more than executing the works — it takes a big-picture view, rigorous coordination, and decisions made at the right time. Build Flow works alongside the client to structure the project, coordinate stakeholders, and support its delivery from start to finish."

============================================
PAGE 7 — CONTACT ("/contact")
============================================
- Page header: eyebrow "CONTACT", title "Parlons de votre projet" / "Let's Talk About Your Project"
- 2-column layout:
  LEFT — Contact form with fields: Nom complet/Full name, Email, Téléphone/Phone, Sujet/Subject (optional dropdown: Résidentiel/Residential, Retail, Bureaux/Offices, Industrie/Industry, Autre/Other), Message (textarea), Submit button "Envoyer" / "Send". Include basic client-side validation (required fields, email format). On submit, show a success confirmation state (no real backend needed for MVP — simulate submission).
  RIGHT — Contact info card: 
  - "BUILD FLOW BY AG"
  - "Imane Aadnan — Gérante | Project Manager" / "Imane Aadnan — Managing Director | Project Manager"
  - Phone: +212 662 716 472 (clickable tel: link)
  - Email: aadnanimane3@gmail.com (clickable mailto: link)
  - Address: "77 Rue Mohamed Smiha, 10e étage, N°57 — Casablanca, Maroc" / "77 Rue Mohamed Smiha, 10th floor, N°57 — Casablanca, Morocco"
  - Embed a Google Maps iframe placeholder below the info card, centered on Casablanca (use a generic embeddable Google Maps iframe for "Casablanca, Morocco" as a placeholder — do not fabricate exact coordinates).

============================================
HEADER NAV LABELS
============================================
FR: Accueil, Qui sommes-nous, Domaines d'intervention, Services, Méthodologie, Références, Contact
EN: Home, About Us, Expertise, Services, Methodology, References, Contact

============================================
FOOTER CONTENT
============================================
- Column 1: Logo + short tagline "Votre projet, notre expertise. De l'idée à la livraison." / "Your project, our expertise. From concept to delivery."
- Column 2: Quick links (same as nav)
- Column 3: Services (short list of the 9 services)
- Column 4: Contact — phone, email, address (same as contact page)
- Bottom bar: "© 2026 Build Flow by AG. Tous droits réservés." / "© 2026 Build Flow by AG. All rights reserved."

============================================
GENERAL QUALITY BAR
============================================
- No lorem ipsum anywhere — use the exact copy provided above for both languages.
- No placeholder client logos other than the brands listed (styled as text badges if real logo assets aren't available).
- Consistent spacing, alignment, and card sizing across all pages.
- Smooth hover states on all buttons, cards, and nav links.
- Accessible color contrast (dark text on light backgrounds, white text on dark/blue backgrounds only).
- SEO basics: unique <title> and meta description per page/language (French and English versions), based on the page's eyebrow + title copy.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/7bc5780d-b9ed-4f29-ad62-c370fb6f15e8).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
