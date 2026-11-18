import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useRise } from "@/components/motion/Reveal";
import { images } from "@/lib/images";

function StoryButton({
  to,
  label,
  variant = "solid",
}: {
  to: string;
  label: string;
  variant?: "solid" | "line";
}) {
  return (
    <Link to={to} className={`ag-story-btn${variant === "line" ? " ag-story-btn-line" : ""}`}>
      {label}
      <span className="ag-btn-arrow" aria-hidden="true">
        <ArrowUpRight className="size-4" />
      </span>
    </Link>
  );
}

export function RelationshipSection() {
  const rise = useRise<HTMLElement>(true);

  return (
    <section ref={rise.ref} className={`ag-stories ${rise.className}`}>
      <div className="ag-container ag-stories-grid">
        <article className="ag-story ag-story-specs">
          <img src={images.bn2} alt="Field team reviewing crop notes on a clipboard" />
          <div className="ag-story-shade" />
          <div className="ag-story-copy">
            <h2>
              Clear specifications.
              <br />
              Careful coordination.
            </h2>
            <p>
              Product requirements, quality parameters and packing details are agreed before supply
              moves forward, so both sides know what is expected.
            </p>
            <p>Certificates, grade notes and shipment documents stay attached to each enquiry.</p>
            <StoryButton to="/quality-food-safety" label="Discuss Quality Requirements" />
          </div>
        </article>

        <article className="ag-story ag-story-relations">
          <img src={images.bn1} alt="Trade discussion around a meeting table" />
          <div className="ag-story-shade" />
          <div className="ag-story-copy">
            <h2>
              Building long-term
              <br />
              trade relationships
            </h2>
            <p>
              Clear communication, dependable sourcing and careful follow-through help turn the first
              enquiry into lasting supply partnerships.
            </p>
            <StoryButton to="/contact" label="Talk to Our Team" />
          </div>
        </article>

        <article className="ag-story ag-story-wide">
          <img src={images.bn3} alt="Warehouse pallets ready for dispatch" />
          <div className="ag-story-shade" />
          <div className="ag-story-copy ag-story-copy-center">
            <h2>Discuss your requirements</h2>
            <p>
              Tell us which commodity you need, your target quantity and destination, and the
              specifications that matter to your business.
            </p>
            <div className="ag-story-actions">
              <StoryButton to="/request-a-quote" label="Request a Quote" />
              <StoryButton to="/request-a-quote" label="Request a Quote" variant="line" />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
