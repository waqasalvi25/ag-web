import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useRise } from "@/components/motion/Reveal";
import { images } from "@/lib/images";

export function PartnerSection() {
  const rise = useRise<HTMLElement>(true);

  return (
    <section ref={rise.ref} className={`ag-partner ${rise.className}`}>
      <div className="ag-partner-card">
        <img src={images.trust} alt="Terraced green fields in morning light" />
        <div className="ag-partner-shade" />
        <div className="ag-partner-copy">
          <h2>
            A trusted partner
            <br />
            in agricultural trade
          </h2>
          <p>
            AG Grain Industries Private Limited works with buyers who need reliable agricultural
            commodities, clear product specifications, and careful coordination from the first
            enquiry through shipment.
          </p>
          <p>
            With a focus on quality, consistency, and long-term partnerships, we connect
            Pakistan&apos;s agricultural potential with customers at home and around the world.
          </p>
          <Link to="/products" className="ag-partner-btn">
            Explore Our Products
            <span className="ag-btn-arrow" aria-hidden="true">
              <ArrowUpRight className="size-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
