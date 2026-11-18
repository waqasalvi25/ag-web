import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useRise } from "@/components/motion/Reveal";
import { images } from "@/lib/images";

export function DiscussSection() {
  const rise = useRise<HTMLElement>(true);

  return (
    <section ref={rise.ref} className={`ag-discuss ${rise.className}`}>
      <img src={images.discuss} alt="Stacked commodity sacks in a warehouse" />
      <div className="ag-discuss-shade" />
      <div className="ag-container ag-discuss-copy">
        <h2>Discuss your requirements</h2>
        <p>
          Share the commodity, quantity, packing, and destination. Our team will reply with the
          details needed for the next step.
        </p>
        <div>
          <Link to="/request-a-quote" className="ag-btn">
            Request a Quote
          </Link>
          <Link to="/contact" className="ag-icon-btn" aria-label="Contact us">
            <ArrowUpRight className="size-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
