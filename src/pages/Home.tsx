import { CommoditiesSection } from "@/components/sections/CommoditiesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HighlightsSection } from "@/components/sections/HighlightsSection";
import { PartnerSection } from "@/components/sections/PartnerSection";
import { RelationshipSection } from "@/components/sections/RelationshipSection";
import { ShipmentSection } from "@/components/sections/ShipmentSection";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function Home() {
  usePageMeta({
    title: "AG Seven Industries",
    description:
      "AG Seven Industries supplies wheat, rice, maize, and export crops, from enquiry through shipment.",
  });

  return (
    <main>
      <HeroSection />
      <HighlightsSection />
      <CommoditiesSection />
      <PartnerSection />
      <ShipmentSection />
      <RelationshipSection />
    </main>
  );
}
