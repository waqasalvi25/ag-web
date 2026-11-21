import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { PackagingHeroSection } from "@/components/sections/PackagingHeroSection";
import { useRise } from "@/components/motion/Reveal";
import { images } from "@/lib/images";
import { usePageMeta } from "@/hooks/usePageMeta";

const services = [
  "Product and grade discussion",
  "Packaging format and pack size coordination",
  "Customer artwork and label coordination",
  "Bulk or retail-ready supply discussions",
  "Order planning and dispatch coordination",
];

const steps = [
  {
    index: "01",
    title: "Share your requirements",
    text: "Share product, target market and expected order volume.",
  },
  {
    index: "02",
    title: "Define the specification",
    text: "Discuss product specification, quality requirements and packaging format.",
  },
  {
    index: "03",
    title: "Review the details",
    text: "Review artwork, labeling information and commercial terms.",
  },
  {
    index: "04",
    title: "Confirm the plan",
    text: "Confirm the order, production or sourcing plan and delivery schedule.",
  },
  {
    index: "05",
    title: "Coordinate dispatch",
    text: "Coordinate dispatch and required shipping documentation.",
  },
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

function SolutionsIntro() {
  const rise = useRise<HTMLElement>(true);

  return (
    <section ref={rise.ref} className={`ag-pack-intro ${rise.className}`}>
      <div className="ag-container ag-pack-intro-grid">
        <h2>
          Private label &
          <br />
          packaging solutions
        </h2>
        <p>
          AG Grain Industries supports buyers who want flour, grain, pulse and salt products packed
          under their own brand. Packing, labeling and private-label options are agreed before
          production, so the product arrives ready for your market.
        </p>
      </div>
    </section>
  );
}

function PotentialServices() {
  const rise = useRise<HTMLElement>(true);

  return (
    <section ref={rise.ref} className={`ag-pack-services ${rise.className}`}>
      <div className="ag-container ag-pack-services-grid">
        <div className="ag-pack-services-media">
          <img src={images.packagingWarehouse} alt="Stacked cartons on pallets ready for dispatch" />
        </div>
        <div className="ag-pack-services-copy">
          <h2>Potential services</h2>
          <ol className="ag-pack-list">
            {services.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const rise = useRise<HTMLElement>(true);

  return (
    <section ref={rise.ref} className={`ag-pack-steps ${rise.className}`}>
      <div className="ag-container">
        <div className="ag-pack-steps-head">
          <h2>How it works</h2>
          <p>A clear path from your product requirements to coordinated dispatch.</p>
        </div>
        <div className="ag-pack-step-list">
          {steps.map((step) => (
            <article key={step.index} className="ag-pack-step">
              <span>{step.index}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="ag-quality-note ag-pack-note">
          Confirmed for your order — each enquiry is assessed individually against product,
          packing and destination needs.
        </p>
      </div>
    </section>
  );
}

function PackagingDiscuss() {
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
              Tell us the product, packing format and brand details you need, and our team will
              follow up with the next steps.
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

export default function PrivateLabelPackaging() {
  usePageMeta({
    title: "Private Label & Packaging | AG Seven Industries",
    description:
      "Private-label grain products and packaging programs for buyers who want their own brand.",
  });

  return (
    <main className="ag-about-page ag-packaging-page">
      <PackagingHeroSection />
      <SolutionsIntro />
      <PotentialServices />
      <HowItWorks />
      <PackagingDiscuss />
    </main>
  );
}
