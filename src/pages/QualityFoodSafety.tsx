import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { QualityHeroSection } from "@/components/sections/QualityHeroSection";
import { useRise } from "@/components/motion/Reveal";
import { images } from "@/lib/images";
import { usePageMeta } from "@/hooks/usePageMeta";

const approachCards = [
  {
    index: "01",
    title: "Raw materials",
    text: "Supplier selection and inbound checks keep lots aligned to the agreed product brief.",
  },
  {
    index: "02",
    title: "Clear specifications",
    text: "Grade, moisture, packing and documentation needs are confirmed before supply moves.",
  },
  {
    index: "03",
    title: "Careful handling",
    text: "Storage and movement practices protect cleanliness, consistency and lot integrity.",
  },
  {
    index: "04",
    title: "Process monitoring",
    text: "Key quality points are reviewed through sourcing, packing and dispatch stages.",
  },
  {
    index: "05",
    title: "Packaging review",
    text: "Bags, labels and private-label details are checked against buyer requirements.",
  },
  {
    index: "06",
    title: "Continuous improvement",
    text: "Feedback from each shipment helps refine checks for the next order.",
  },
];

const certifications = [
  "ISO 9001 quality management",
  "ISO 22000 food safety management",
  "HACCP-based controls",
  "Halal certification support",
  "Pakistan Standards Authority alignment",
];

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

function QualityApproach() {
  const rise = useRise<HTMLElement>(true);

  return (
    <section ref={rise.ref} className={`ag-quality-approach ${rise.className}`}>
      <div className="ag-container">
        <div className="ag-quality-approach-head">
          <h2>Our quality approach</h2>
          <p>
            From supplier selection through dispatch, quality checks stay attached to each enquiry so
            both sides know what is expected before goods move.
          </p>
        </div>
        <div className="ag-quality-cards">
          {approachCards.map((card) => (
            <article key={card.index} className="ag-quality-card">
              <span>{card.index}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FoodSafety() {
  const rise = useRise<HTMLElement>(true);

  return (
    <section ref={rise.ref} className={`ag-quality-safety ${rise.className}`}>
      <div className="ag-container ag-quality-safety-grid">
        <div className="ag-quality-safety-media">
          <img src={images.qualityField} alt="Field team reviewing quality notes on a clipboard" />
        </div>
        <div className="ag-quality-safety-copy">
          <h2>Food safety commitment</h2>
          <p>
            Hygiene, product integrity and destination requirements guide how lots are selected,
            handled and packed. Where buyers need supporting documents, certificates and grade notes
            stay linked to the shipment plan.
          </p>
          <p>
            Our team works to keep food-safety expectations clear from the first discussion through
            final dispatch.
          </p>
        </div>
      </div>
    </section>
  );
}

function Standards() {
  const rise = useRise<HTMLElement>(true);

  return (
    <section ref={rise.ref} className={`ag-quality-standards ${rise.className}`}>
      <div className="ag-container">
        <div className="ag-quality-standards-head">
          <h2>Standards & certifications</h2>
          <p>
            We maintain practical management systems and work toward recognised standards that
            support buyer confidence in domestic and export trade.
          </p>
        </div>
        <p className="ag-quality-note">
          Potential certification pathway — subject to implementation and certification.
        </p>
        <ol className="ag-quality-cert-list">
          {certifications.map((item, index) => (
            <li key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function QualityDiscuss() {
  const rise = useRise<HTMLElement>(true);

  return (
    <section ref={rise.ref} className={`ag-stories ag-about-discuss ${rise.className}`}>
      <div className="ag-container">
        <article className="ag-story ag-story-wide">
          <img src={images.bn3} alt="Warehouse pallets ready for dispatch" />
          <div className="ag-story-shade" />
          <div className="ag-story-copy ag-story-copy-center">
            <h2>Discuss your requirements</h2>
            <p>
              Share the quality parameters, packing needs and destination expectations for your next
              order, and our team will follow up with the next steps.
            </p>
            <div className="ag-story-actions">
              <StoryButton to="/request-a-quote" label="Request a Quote" />
              <StoryButton to="/contact" label="Talk to Our Team" variant="line" />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default function QualityFoodSafety() {
  usePageMeta({
    title: "Quality & Food Safety | AG Seven Industries",
    description:
      "Quality checks and food-safety controls for AG grain products, from sourcing through shipment.",
  });

  return (
    <main className="ag-about-page ag-quality-page">
      <QualityHeroSection />
      <QualityApproach />
      <FoodSafety />
      <Standards />
      <QualityDiscuss />
    </main>
  );
}
