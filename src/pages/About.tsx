import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { AboutHeroSection } from "@/components/sections/AboutHeroSection";
import { useRise } from "@/components/motion/Reveal";
import { images } from "@/lib/images";
import { usePageMeta } from "@/hooks/usePageMeta";

const capabilities = [
  "Grain sourcing and procurement",
  "Specification and quality alignment",
  "Packaging and private-label support",
  "Domestic trading and export coordination",
  "Documentation and shipment follow-through",
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

function WhoWeAre() {
  const rise = useRise<HTMLElement>(true);

  return (
    <section ref={rise.ref} className={`ag-about-who ${rise.className}`}>
      <div className="ag-container ag-about-who-grid">
        <div className="ag-about-who-copy">
          <p className="ag-about-label">Who we are</p>
          <h2>
            A trusted partner in
            <br />
            agricultural trade
          </h2>
          <p>
            We coordinate agricultural commodities for buyers who need a clear product brief, a
            considered supply plan and a team that stays close from enquiry through dispatch.
          </p>
          <p className="ag-about-tagline">Pakistan-based. Partnership-focused.</p>
        </div>
        <div className="ag-about-who-media">
          <img src={images.aboutWho} alt="Farm team reviewing crop notes in a sunlit field" />
        </div>
      </div>
    </section>
  );
}

function VisionMission() {
  const rise = useRise<HTMLElement>(true);

  return (
    <section ref={rise.ref} className={`ag-about-vm ${rise.className}`}>
      <div className="ag-container ag-about-vm-grid">
        <article className="ag-about-card">
          <span>01</span>
          <h3>Our vision</h3>
          <p>
            To be a trusted partner in agricultural trade, known for clear specifications, careful
            coordination and lasting commercial relationships.
          </p>
        </article>
        <article className="ag-about-card">
          <span>02</span>
          <h3>Our mission</h3>
          <p>
            To connect Pakistan&apos;s agricultural potential with domestic and export demand through
            dependable sourcing, quality focus and practical shipment support.
          </p>
        </article>
      </div>
    </section>
  );
}

function Capabilities() {
  const rise = useRise<HTMLElement>(true);

  return (
    <section ref={rise.ref} className={`ag-about-cap ${rise.className}`}>
      <div className="ag-container ag-about-cap-grid">
        <h2>
          From agricultural source
          <br />
          to customer requirement
        </h2>
        <ol className="ag-about-cap-list">
          {capabilities.map((item, index) => (
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

function AboutDiscuss() {
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
              Tell us which commodity you need, your target quantity and destination, and the
              specifications that matter to your business.
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

export default function About() {
  usePageMeta({
    title: "About Us | AG Seven Industries",
    description:
      "Learn about AG Grain Industries — a Pakistan-based agricultural trading partner focused on quality, clear specifications and lasting supply relationships.",
  });

  return (
    <main className="ag-about-page">
      <AboutHeroSection />
      <WhoWeAre />
      <VisionMission />
      <Capabilities />
      <AboutDiscuss />
    </main>
  );
}
