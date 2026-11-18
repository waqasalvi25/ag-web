import { Link } from "react-router-dom";
import { PageHero } from "@/components/site/PageHero";
import { commodities } from "@/components/site/navLinks";
import { images } from "@/lib/images";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function Products() {
  usePageMeta({
    title: "Products | AG Seven Industries",
    description: "Wheat, rice, maize, and export crops from AG Seven Industries.",
  });

  return (
    <main className="ag-page">
      <PageHero
        crumb="Products"
        title="Product range"
        text="Wheat, rice, maize, and export crops. Specifications and packing are confirmed for each enquiry."
      />
      <div className="ag-container ag-page-grid">
        {commodities.map((item) => (
          <Link key={item.href} to={item.href} className="ag-commodity-card">
            <img src={images[item.image]} alt={item.alt} />
            <span className="ag-commodity-index">{item.index}</span>
            <span className="ag-commodity-name">{item.title}</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
