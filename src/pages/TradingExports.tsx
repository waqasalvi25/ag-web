import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { TradeHeroSection } from "@/components/sections/TradeHeroSection";
import { useRise } from "@/components/motion/Reveal";
import { images } from "@/lib/images";
import { usePageMeta } from "@/hooks/usePageMeta";

const opportunities = [
  {
    title: "Wheat & flour",
    text: "Milling wheat and flour-linked supply for food and feed programmes.",
    href: "/products/wheat",
    image: images.tradeWheat,
    alt: "Golden wheat ears in warm light",
  },
  {
    title: "Rice",
    text: "Basmati and non-basmati options prepared against destination grades.",
    href: "/products/rice",
    image: images.tradeRice,
    alt: "Ripe rice panicles in a paddy field",
  },
  {
    title: "Pulses & commodities",
    text: "Pulses and related crops for wholesale and food manufacturing trade.",
    href: "/products/export-crops",
    image: images.tradePulses,
    alt: "Yellow lentils in a burlap sack",
  },
  {
    title: "Himalayan pink salt",
    text: "Retail, food-service and private-label salt programmes for export.",
    href: "/products/export-crops",
    image: images.tradeSalt,
    alt: "Jar of Himalayan pink salt",
  },
];

const emptyQuote = {
  product: "",
  grade: "",
  quantity: "",
  packaging: "",
  destination: "",
  deliveryTerm: "",
  shipmentDate: "",
};

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

function Opportunities() {
  const rise = useRise<HTMLElement>(true);

  return (
    <section ref={rise.ref} className={`ag-trade-opps ${rise.className}`}>
      <div className="ag-container">
        <div className="ag-trade-opps-head">
          <h2>Export product opportunities</h2>
          <p>
            Explore key commodities for international buyers. Specifications, packing and
            documentation are confirmed for each enquiry.
          </p>
        </div>
        <div className="ag-trade-opps-grid">
          {opportunities.map((item) => (
            <Link key={item.title} to={item.href} className="ag-trade-opp-card">
              <img src={item.image} alt={item.alt} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function BuyerSupport() {
  const rise = useRise<HTMLElement>(true);

  return (
    <section ref={rise.ref} className={`ag-trade-support ${rise.className}`}>
      <div className="ag-container ag-trade-support-grid">
        <div className="ag-trade-support-media">
          <img src={images.tradeSupport} alt="International trade discussion around a meeting table" />
        </div>
        <div className="ag-trade-support-copy">
          <h2>International buyer support</h2>
          <p>
            We help buyers align product specifications, packing formats, destination documents and
            shipment timing. Communication stays clear from first enquiry through dispatch, so both
            sides know what is expected before goods move.
          </p>
          <p>
            Commercial terms, quality notes and logistics details are reviewed together to keep the
            export process practical and dependable.
          </p>
        </div>
      </div>
    </section>
  );
}

function Incoterms() {
  const rise = useRise<HTMLElement>(true);

  return (
    <section ref={rise.ref} className={`ag-trade-incoterms ${rise.className}`}>
      <div className="ag-container">
        <div className="ag-trade-incoterms-card">
          <h2>Incoterms & delivery terms</h2>
          <p>
            Delivery terms such as EXW, FOB and related options are discussed against destination,
            packing and documentation needs. The agreed term is confirmed before the order plan is
            finalised.
          </p>
        </div>
      </div>
    </section>
  );
}

function ExportQuoteForm() {
  const rise = useRise<HTMLElement>(true);
  const [form, setForm] = useState(emptyQuote);

  return (
    <section ref={rise.ref} className={`ag-trade-quote ${rise.className}`}>
      <div className="ag-container">
        <div className="ag-trade-quote-head">
          <h2>Request an export quotation</h2>
          <p>
            To help us respond efficiently, please include the product name, required grade or
            specification, quantity, packaging, destination country or port, preferred delivery term
            and target shipment date.
          </p>
        </div>
        <div className="ag-trade-form">
          <input
            aria-label="Product name"
            value={form.product}
            onChange={(event) => setForm({ ...form, product: event.target.value })}
            placeholder="Product Name"
          />
          <input
            aria-label="Required grade or specification"
            value={form.grade}
            onChange={(event) => setForm({ ...form, grade: event.target.value })}
            placeholder="Required Grade Or Specification"
          />
          <input
            aria-label="Quantity"
            value={form.quantity}
            onChange={(event) => setForm({ ...form, quantity: event.target.value })}
            placeholder="Quantity"
          />
          <input
            aria-label="Packaging"
            value={form.packaging}
            onChange={(event) => setForm({ ...form, packaging: event.target.value })}
            placeholder="Packaging"
          />
          <input
            aria-label="Destination country or port"
            value={form.destination}
            onChange={(event) => setForm({ ...form, destination: event.target.value })}
            placeholder="Destination Country Or Port"
          />
          <input
            aria-label="Preferred delivery term"
            value={form.deliveryTerm}
            onChange={(event) => setForm({ ...form, deliveryTerm: event.target.value })}
            placeholder="Preferred Delivery Term"
          />
          <input
            type="text"
            aria-label="Target shipment date"
            value={form.shipmentDate}
            onChange={(event) => setForm({ ...form, shipmentDate: event.target.value })}
            placeholder="Target Shipment Date"
          />
        </div>
      </div>
    </section>
  );
}

function PartnerCards() {
  const rise = useRise<HTMLElement>(true);

  return (
    <section ref={rise.ref} className={`ag-trade-partner ${rise.className}`}>
      <div className="ag-container">
        <h2>Partner with AG Grain</h2>
        <div className="ag-trade-partner-grid">
          <article className="ag-trade-partner-card">
            <h3>Supplier enquiries</h3>
            <p>
              Share origin details, available volumes and quality notes if you want to discuss supply
              partnerships for export programmes.
            </p>
            <Link to="/contact" className="ag-product-block-link">
              Contact supply team
              <ArrowUpRight className="size-4" />
            </Link>
          </article>
          <article className="ag-trade-partner-card">
            <h3>Distribution & institutional enquiries</h3>
            <p>
              Tell us about destination markets, packing needs and expected volumes for distribution
              or institutional supply discussions.
            </p>
            <Link to="/contact" className="ag-product-block-link">
              Contact sales team
              <ArrowUpRight className="size-4" />
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}

function TradeDiscuss() {
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
              Share the commodity, destination and delivery terms you need, and our team will follow
              up with the next steps.
            </p>
            <div className="ag-story-actions">
              <StoryButton to="/request-a-quote" label="Request a Quote" />
              <StoryButton to="/contact" label="Contact Sales" variant="line" />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default function TradingExports() {
  usePageMeta({
    title: "Trade & Exports | AG Seven Industries",
    description:
      "Export product opportunities, buyer support and quotation requests from AG Grain Industries.",
  });

  return (
    <main className="ag-about-page ag-trade-page">
      <TradeHeroSection />
      <Opportunities />
      <BuyerSupport />
      <Incoterms />
      <ExportQuoteForm />
      <PartnerCards />
      <TradeDiscuss />
    </main>
  );
}
