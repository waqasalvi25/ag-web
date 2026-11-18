import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ProductsHeroSection } from "@/components/sections/ProductsHeroSection";
import { useRise } from "@/components/motion/Reveal";
import { images } from "@/lib/images";
import { usePageMeta } from "@/hooks/usePageMeta";

type BrandBox = {
  title: string;
  text: string;
};

type ProductBlock = {
  title: string;
  href: string;
  image: string;
  alt: string;
  points: string[];
  brands?: BrandBox[];
  reverse?: boolean;
};

const products: ProductBlock[] = [
  {
    title: "Wheat & flour products",
    href: "/products/wheat",
    image: images.productWheat,
    alt: "Golden wheat ears in warm sunlight",
    points: [
      "Milling wheat and flour-linked supply for food and feed programmes",
      "Grade, moisture and packing confirmed against each enquiry",
      "Domestic and export coordination with clear documentation",
    ],
    brands: [
      {
        title: "Al Burr — flour stand",
        text: "Flour and wheat programmes aligned to buyer specifications and packing needs.",
      },
      {
        title: "Trade-ready lots",
        text: "Quantities, timing and quality notes are agreed before supply moves forward.",
      },
    ],
  },
  {
    title: "Rice & rice products",
    href: "/products/rice",
    image: images.productRice,
    alt: "Ripe rice panicles in a paddy field at golden hour",
    reverse: true,
    points: [
      "Basmati and non-basmati options for domestic and export buyers",
      "Specification-led sourcing with grade and packing clarity",
      "Shipment support from enquiry through dispatch",
    ],
    brands: [
      {
        title: "Export grades",
        text: "Rice lots prepared against destination requirements and agreed quality parameters.",
      },
    ],
  },
  {
    title: "Pulses",
    href: "/products/export-crops",
    image: images.productPulses,
    alt: "Yellow lentils in a burlap sack with a metal scoop",
    points: [
      "Pulses and related crops for food manufacturing and wholesale trade",
      "Clean, consistent lots with packing options by order",
      "Reliable follow-through from sourcing to shipment",
    ],
  },
  {
    title: "Maize & other grains",
    href: "/products/maize",
    image: images.productMaize,
    alt: "A ripe ear of maize on the stalk",
    reverse: true,
    points: [
      "Maize and supporting grains for feed and industrial use",
      "Availability, grade and packing confirmed before commitment",
      "Domestic trading and export coordination under one process",
    ],
    brands: [
      {
        title: "Feed & food supply",
        text: "Practical sourcing plans built around volume, timing and destination needs.",
      },
    ],
  },
  {
    title: "Himalayan pink salt",
    href: "/products/export-crops",
    image: images.grains,
    alt: "Mineral salt and grain commodities ready for trade",
    points: [
      "Himalayan pink salt for retail, food service and private-label programmes",
      "Packing and grade options agreed before production or dispatch",
      "Export-ready documentation support for destination markets",
    ],
    brands: [
      {
        title: "Private label ready",
        text: "Packaging and labeling details can be aligned to your brand and market.",
      },
    ],
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

function ProductSection({ item }: { item: ProductBlock }) {
  const rise = useRise<HTMLElement>(true);

  return (
    <section
      ref={rise.ref}
      className={`ag-product-block${item.reverse ? " is-reverse" : ""} ${rise.className}`}
    >
      <div className="ag-container ag-product-block-grid">
        <div className="ag-product-block-media">
          <img src={item.image} alt={item.alt} />
        </div>
        <div className="ag-product-block-copy">
          <h2>{item.title}</h2>
          <ul>
            {item.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <Link to={item.href} className="ag-product-block-link">
            View details
            <ArrowUpRight className="size-4" />
          </Link>
          {item.brands && item.brands.length > 0 && (
            <div className="ag-product-brands">
              {item.brands.map((brand) => (
                <article key={brand.title} className="ag-product-brand">
                  <h3>{brand.title}</h3>
                  <p>{brand.text}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ProductsDiscuss() {
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

export default function Products() {
  usePageMeta({
    title: "Our Products | AG Seven Industries",
    description:
      "Wheat, rice, pulses, maize and Himalayan pink salt from AG Grain Industries — sourced to specification for domestic and export markets.",
  });

  return (
    <main className="ag-about-page ag-products-page">
      <ProductsHeroSection />
      {products.map((item) => (
        <ProductSection key={item.title} item={item} />
      ))}
      <ProductsDiscuss />
    </main>
  );
}
