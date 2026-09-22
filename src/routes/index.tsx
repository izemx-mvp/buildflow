import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/pages";
export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Votre projet, notre expertise — Build Flow by AG" }, { name: "description", content: "Conseil en ingénierie de construction, AMO, OPC et Project Management au Maroc et à l’international." }, { property: "og:title", content: "Build Flow by AG — Conseil en ingénierie" }, { property: "og:description", content: "Votre projet, notre expertise. De l’idée à la livraison." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: HomePage,
});
