import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { useRise } from "@/components/motion/Reveal";

const steps = [
  {
    index: "01",
    title: "Share requirements",
    text: "Commodity, quantity, destination and timing.",
  },
  {
    index: "02",
    title: "Confirm specifications",
    text: "Agree grade, quality parameters and packaging.",
  },
  {
    index: "03",
    title: "Review offer",
    text: "Confirm pricing, payment and delivery terms.",
  },
  {
    index: "04",
    title: "Arrange dispatch",
    text: "Align packing, documents and shipment timing.",
  },
];

export function ShipmentSection() {
  const rise = useRise<HTMLElement>(true);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const node = scrollerRef.current;
    if (!node || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      const card = node.querySelector<HTMLElement>(".ag-step-card");
      if (!card) return;
      const styles = window.getComputedStyle(node);
      const gap = Number.parseFloat(styles.rowGap || styles.gap) || 0;
      const step = card.offsetHeight + gap;
      const max = node.scrollHeight - node.clientHeight;
      const next = node.scrollTop + step;
      node.scrollTo({ top: next >= max - 8 ? 0 : next, behavior: "smooth" });
    }, 3200);

    return () => window.clearInterval(timer);
  }, [paused]);

  useEffect(() => {
    const node = scrollerRef.current;
    if (!node) return;

    let startY = 0;
    let startTop = 0;
    let active = false;

    const onDown = (event: PointerEvent) => {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      active = true;
      startY = event.clientY;
      startTop = node.scrollTop;
      node.setPointerCapture(event.pointerId);
    };

    const onMove = (event: PointerEvent) => {
      if (!active) return;
      const delta = event.clientY - startY;
      if (Math.abs(delta) < 4) return;
      node.scrollTop = startTop - delta;
    };

    const onUp = () => {
      active = false;
    };

    node.addEventListener("pointerdown", onDown);
    node.addEventListener("pointermove", onMove);
    node.addEventListener("pointerup", onUp);
    node.addEventListener("pointercancel", onUp);
    return () => {
      node.removeEventListener("pointerdown", onDown);
      node.removeEventListener("pointermove", onMove);
      node.removeEventListener("pointerup", onUp);
      node.removeEventListener("pointercancel", onUp);
    };
  }, []);

  return (
    <section ref={rise.ref} className={`ag-shipment ${rise.className}`}>
      <div className="ag-container ag-shipment-grid">
        <div className="ag-shipment-copy">
          <h2>
            From enquiry
            <br />
            to shipment
          </h2>
          <p>A clear process helps both parties align on product details, commercial terms and dispatch requirements.</p>
          <Link to="/contact" className="ag-enquire ag-shipment-enquire">
            Enquire Now
            <span aria-hidden="true">
              <Mail className="size-4" />
            </span>
          </Link>
        </div>

        <div
          ref={scrollerRef}
          className="ag-step-slider"
          aria-label="Shipment process steps"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          {steps.map((step) => (
            <article key={step.index} className="ag-step-card">
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
              <span>{step.index}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
