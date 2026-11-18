import { PageHero } from "@/components/site/PageHero";
import { commodities } from "@/components/site/navLinks";
import { images } from "@/lib/images";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function Gallery() {
  usePageMeta({
    title: "Gallery | AG Seven Industries",
    description: "Photographs of the commodities and fields behind AG Seven Industries.",
  });

  return (
    <main className="ag-page">
      <PageHero
        crumb="Gallery"
        title="Gallery"
        text="Fields, harvests, and the commodities prepared for trade."
      />
      <div className="ag-container ag-page-grid">
        {commodities.map((item) => (
          <figure key={item.href} className="ag-commodity-card">
            <img src={images[item.image]} alt={item.alt} />
            <span className="ag-commodity-name">{item.title}</span>
          </figure>
        ))}
      </div>
    </main>
  );
}
