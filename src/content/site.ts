export type Language = "fr" | "en";
export type Localized<T> = Record<Language, T>;
const bi = <T>(fr: T, en: T): Localized<T> => ({ fr, en });

export const navItems = [
  { to: "/", label: bi("Accueil", "Home") },
  { to: "/about", label: bi("Qui sommes-nous", "About Us") },
  { to: "/expertise", label: bi("Domaines d’intervention", "Expertise") },
  { to: "/services", label: bi("Services", "Services") },
  { to: "/methodology", label: bi("Méthodologie", "Methodology") },
  { to: "/references", label: bi("Références", "References") },
  { to: "/contact", label: bi("Contact", "Contact") },
] as const;

export const common = {
  contact: bi("Nous contacter", "Contact Us"),
  discover: bi("Découvrir nos services", "Discover Our Services"),
  tagline: bi("Votre projet, notre expertise. De l’idée à la livraison.", "Your project, our expertise. From concept to delivery."),
  ready: bi("Prêt à démarrer votre projet ?", "Ready to start your project?"),
  copyright: bi("© 2026 Build Flow by AG. Tous droits réservés.", "© 2026 Build Flow by AG. All rights reserved."),
  quickLinks: bi("Liens rapides", "Quick links"), services: bi("Services", "Services"), contactTitle: bi("Contact", "Contact"),
};

export const expertise = [
  { key: "residential", title: bi("Résidentiel", "Residential"), text: bi("Villas, extensions, piscines, aménagements extérieurs, second œuvre et coordination de chantier.", "Villas, extensions, pools, outdoor landscaping, finishing works, and site coordination."), bullets: bi(["Villas", "Extensions", "Piscines", "Aménagements extérieurs", "Second œuvre"], ["Villas", "Extensions", "Pools", "Outdoor landscaping", "Finishing works"]) },
  { key: "retail", title: bi("Retail", "Retail"), text: bi("Projets pour Nike, Mango, Tommy Hilfiger, Calvin Klein, Crocs, H&M et autres enseignes internationales.", "Projects for Nike, Mango, Tommy Hilfiger, Calvin Klein, Crocs, H&M, and other international brands."), bullets: bi(["Aménagement de boutiques", "Coordination multi-sites", "Suivi de chantier"], ["Store fit-outs", "Multi-site coordination", "Site follow-up"]) },
  { key: "offices", title: bi("Bureaux & espaces professionnels", "Offices & Professional Spaces"), text: bi("Aménagement, consultation, budget, planning, coordination et suivi d’exécution.", "Fit-out, consulting, budgeting, planning, coordination, and execution follow-up."), bullets: bi(["Aménagement de bureaux", "Gestion de budget", "Planning et coordination"], ["Office fit-out", "Budget management", "Planning & coordination"]) },
  { key: "industry", title: bi("Industrie & projets techniques", "Industry & Technical Projects"), text: bi("Coordination des intervenants, suivi documentaire, contrôle d’avancement et assistance à la réception.", "Stakeholder coordination, document tracking, progress control, and handover assistance."), bullets: bi(["Coordination des intervenants", "Suivi documentaire", "Assistance à la réception"], ["Stakeholder coordination", "Document tracking", "Handover assistance"]) },
] as const;

export const serviceItems = [
  bi("Assistance à la Maîtrise d’Ouvrage (AMO)", "Owner’s Project Management Assistance (AMO)"),
  bi("Ordonnancement, Pilotage et Coordination (OPC)", "Scheduling, Management & Coordination (OPC)"),
  bi("Project Management", "Project Management"),
  bi("Coordination des études et des intervenants", "Design & stakeholder coordination"),
  bi("Consultation des entreprises et analyse des offres", "Contractor consultation and bid analysis"),
  bi("Planning, suivi des coûts et reporting", "Planning, cost tracking, and reporting"),
  bi("Suivi d’exécution et contrôle qualité", "Execution follow-up and quality control"),
  bi("Assistance aux opérations de réception et levée des réserves", "Handover assistance and punch-list management"),
  bi("Structuration documentaire / DOE", "Documentation structuring / As-built records (DOE)"),
];

export const home = {
  eyebrow: bi("CONSEIL EN INGÉNIERIE DE CONSTRUCTION", "CONSTRUCTION ENGINEERING CONSULTING"),
  title: common.tagline,
  subtext: bi("AMO • OPC • Project Management — Maroc • MENA • International", "AMO • OPC • Project Management — Morocco • MENA • International"),
  intro: bi("Build Flow by AG accompagne particuliers, investisseurs, enseignes et entreprises dans le pilotage de leurs projets de construction, d’aménagement et de rénovation. Notre approche repose sur une coordination structurée des intervenants, un suivi de terrain et une attention constante portée aux coûts, aux délais, à la qualité et à la bonne livraison du projet.", "Build Flow by AG supports individuals, investors, retail brands, and companies in managing their construction, fit-out, and renovation projects. Our approach is built on structured coordination between stakeholders, hands-on site follow-up, and constant attention to cost, timeline, and quality throughout delivery."),
  expertiseEyebrow: bi("NOS DOMAINES", "OUR EXPERTISE"), expertiseTitle: bi("Une expertise adaptée à chaque projet", "Expertise Tailored to Every Project"),
  trust: bi("Ils nous font confiance", "They Trust Us"), whyEyebrow: bi("POURQUOI BUILD FLOW", "WHY BUILD FLOW"), whyTitle: bi("Une gestion claire, du premier jour à la livraison", "Clear Management, From Day One to Delivery"),
  values: [bi("Un interlocuteur unique pour le client", "A single point of contact"), bi("Une vision globale du projet", "A global project view"), bi("Une coordination claire entre tous les intervenants", "Clear coordination between all stakeholders"), bi("Un suivi structuré des coûts, délais, qualité", "Structured tracking of cost, timeline, and quality")],
};

export const about = {
  eyebrow: bi("QUI SOMMES-NOUS", "ABOUT US"), title: bi("Notre histoire, notre engagement", "Our Story, Our Commitment"),
  intro: bi("Build Flow by AG accompagne particuliers, investisseurs, enseignes et entreprises dans le pilotage de leurs projets de construction, d’aménagement et de rénovation, avec une coordination structurée, un suivi de terrain rigoureux et une attention constante aux coûts, délais et qualité.", "Build Flow by AG supports individuals, investors, retail brands, and companies in managing construction, fit-out, and renovation projects, with structured coordination, rigorous on-site follow-up, and constant attention to cost, timeline, and quality."),
  founderLabel: bi("NOTRE FONDATRICE", "OUR FOUNDER"), founderTitle: bi("Gérante | Project Manager", "Managing Director | Project Manager"),
  bio: bi("Ingénieure en Génie Civil, diplômée de l’EMSI en 2016. Depuis mars 2016, Imane intervient sur des projets résidentiels, commerciaux, tertiaires et d’aménagement, avec une expérience de pilotage, coordination et suivi d’exécution. Son objectif : offrir au client un interlocuteur unique capable de structurer et piloter le projet de A à Z.", "Civil Engineer, graduate of EMSI (2016). Since March 2016, Imane has worked on residential, commercial, office, and fit-out projects, with experience in project management, coordination, and execution follow-up. Her goal: to give clients a single point of contact able to structure and manage their project from A to Z."),
};

export const expertisePage = { eyebrow: bi("DOMAINES D’INTERVENTION", "AREAS OF EXPERTISE"), title: bi("Des projets variés, une méthode unique", "Diverse Projects, One Proven Method") };
export const servicesPage = { eyebrow: bi("NOS SERVICES", "OUR SERVICES"), title: bi("Un accompagnement complet, de A à Z", "Full Support, From A to Z"), valueEyebrow: bi("NOTRE VALEUR AJOUTÉE", "OUR VALUE"), valueTitle: bi("La rigueur au service de votre projet", "Precision in Service of Your Project"), values: [bi("Un interlocuteur unique pour le client", "A single point of contact for the client"), bi("Une vision globale du projet et de ses interfaces", "A global view of the project and its interfaces"), bi("Une présence terrain orientée résultats", "Results-driven on-site presence"), bi("Une coordination claire entre maîtrise d’ouvrage, maîtrise d’œuvre, BET, entreprises et fournisseurs", "Clear coordination between owner, architect, engineering firms, contractors, and suppliers"), bi("Un suivi structuré des coûts, délais, qualité et livrables", "Structured tracking of cost, timeline, quality, and deliverables"), bi("Une communication régulière et transparente", "Regular, transparent communication")] };

export const methodology = {
 eyebrow: bi("NOTRE MÉTHODOLOGIE", "OUR METHODOLOGY"), title: bi("Une méthode structurée, du premier jour à la livraison", "A Structured Method, From Day One to Delivery"), discuss: bi("Discutons de votre projet", "Let’s discuss your project"),
 steps: [
  { title: bi("Analyse", "Analysis"), text: bi("Compréhension des objectifs, contraintes et enjeux du projet.", "Understanding the project’s goals, constraints, and challenges.") },
  { title: bi("Planification", "Planning"), text: bi("Structuration des phases, jalons, intervenants et priorités.", "Structuring phases, milestones, stakeholders, and priorities.") },
  { title: bi("Consultation", "Consultation"), text: bi("Préparation, consultation et analyse des offres.", "Preparing, running, and analyzing bids.") },
  { title: bi("Coordination", "Coordination"), text: bi("Pilotage des interfaces et suivi des actions.", "Managing interfaces and tracking actions.") },
  { title: bi("Contrôle", "Control"), text: bi("Avancement, qualité, coûts, délais et documentation.", "Progress, quality, cost, timeline, and documentation.") },
  { title: bi("Réception", "Handover"), text: bi("Préparation, assistance à la réception, réserves et clôture.", "Preparation, handover assistance, punch lists, and closeout.") },
 ]
};

export const references = {
 eyebrow: bi("RÉFÉRENCES & EXPÉRIENCE", "REFERENCES & EXPERIENCE"), title: bi("Des projets qui parlent d’eux-mêmes", "Projects That Speak for Themselves"), coverageLabel: bi("ZONE D’INTERVENTION", "COVERAGE"), coverageTitle: bi("Une expertise sans frontières", "Expertise Without Borders"),
 categories: [
  { title: bi("Retail", "Retail"), text: bi("Nike, Mango, Tommy Hilfiger, Calvin Klein, Crocs, H&M et autres enseignes.", "Nike, Mango, Tommy Hilfiger, Calvin Klein, Crocs, H&M, and other brands.") },
  { title: bi("Bureaux", "Offices"), text: bi("Projets d’aménagement et de transformation d’espaces professionnels à Casablanca, notamment Twin Center et Zenith Sidi Maârouf.", "Fit-out and transformation projects for professional spaces in Casablanca, including Twin Center and Zenith Sidi Maârouf.") },
  { title: bi("Résidentiel", "Residential"), text: bi("Villas, piscines, façades, dallages, aménagements extérieurs et coordination des corps d’état.", "Villas, pools, facades, paving, outdoor landscaping, and trade coordination.") },
  { title: bi("Projets techniques", "Technical Projects"), text: bi("Accompagnement de projets industriels et missions de documentation, coordination et préparation à la réception.", "Support for industrial projects and documentation, coordination, and handover preparation missions.") },
 ],
 coverage: bi(["Maroc entier", "Afrique du Nord", "Moyen-Orient (MENA)", "Projets internationaux selon les besoins du client"], ["All of Morocco", "North Africa", "Middle East (MENA)", "International projects as needed"]),
 whyLabel: bi("POURQUOI BUILD FLOW", "WHY BUILD FLOW"), why: bi("Parce qu’un projet réussi nécessite plus que l’exécution de travaux : il nécessite une vision d’ensemble, une coordination rigoureuse et des décisions prises au bon moment. Build Flow intervient aux côtés du client pour structurer le projet, coordonner les parties prenantes et accompagner sa réalisation jusqu’à la livraison.", "Because a successful project takes more than executing the works — it takes a big-picture view, rigorous coordination, and decisions made at the right time. Build Flow works alongside the client to structure the project, coordinate stakeholders, and support its delivery from start to finish.")
};

export const contact = {
 eyebrow: bi("CONTACT", "CONTACT"), title: bi("Parlons de votre projet", "Let’s Talk About Your Project"),
 fields: { name: bi("Nom complet", "Full name"), email: bi("Email", "Email"), phone: bi("Téléphone", "Phone"), subject: bi("Sujet", "Subject"), message: bi("Message", "Message"), send: bi("Envoyer", "Send"), sending: bi("Envoi…", "Sending…") },
 subjects: bi(["Sélectionnez un domaine", "Résidentiel", "Retail", "Bureaux", "Industrie", "Autre"], ["Select an area", "Residential", "Retail", "Offices", "Industry", "Other"]),
 required: bi("Ce champ est requis.", "This field is required."), invalidEmail: bi("Saisissez une adresse email valide.", "Enter a valid email address."), successTitle: bi("Merci pour votre message.", "Thank you for your message."), successText: bi("Nous reviendrons vers vous dans les meilleurs délais.", "We’ll get back to you as soon as possible."), reset: bi("Envoyer un autre message", "Send another message"),
 address: bi("77 Rue Mohamed Smiha, 10e étage, N°57 — Casablanca, Maroc", "77 Rue Mohamed Smiha, 10th floor, N°57 — Casablanca, Morocco")
};

export const brands = ["NIKE", "MANGO", "TOMMY HILFIGER", "CALVIN KLEIN", "CROCS", "H&M"];
