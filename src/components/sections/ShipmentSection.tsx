import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { useRise } from "@/components/motion/Reveal";

const steps = [
  {
    index: "01",
    title: ["Share", "requirements"],
    text: "Commodity, quantity, destination and timing.",
  },
  {
    index: "02",
    title: ["Confirm", "specifications"],
    text: "Agree grade, quality parameters and packaging.",
  },
  {
    index: "03",
    title: ["Review", "offer"],
    text: "Confirm pricing, payment and delivery terms.",
  },
  {
    index: "04",
    title: ["Approve", "sample"],
    text: "Review sample or reference lot where required.",
  },
  {
    index: "05",
    title: ["Confirm", "order"],
    text: "Lock quantity, schedule and commercial terms.",
  },
  {
    index: "06",
    title: ["Prepare", "packing"],
    text: "Pack to agreed format, marking and lot control.",
  },
  {
    index: "07",
    title: ["Arrange", "dispatch"],
    text: "Align documents, logistics and shipment timing.",
  },
  {
    index: "08",
    title: ["Track", "delivery"],
    text: "Share updates through transit to arrival.",
  },
];

export function ShipmentSection() {
  const rise = useRise<HTMLDivElement>(true);
  const pinRef = useRef<HTMLElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const startY = useRef(0);
  const startTop = useRef(0);

  useEffect(() => {
    const pin = pinRef.current;
    const node = scrollerRef.current;
    const sticky = rise.ref.current;
    if (!pin || !node || !sticky) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      pin.style.removeProperty("--ag-shipment-travel");
      return;
    }

    const syncFromPage = () => {
      if (dragging.current) return;
      const total = Math.max(pin.offsetHeight - sticky.offsetHeight, 0);
      if (total <= 0) {
        node.scrollTop = 0;
        return;
      }
      const scrolled = Math.min(Math.max(-pin.getBoundingClientRect().top, 0), total);
      const max = Math.max(node.scrollHeight - node.clientHeight, 0);
      node.scrollTop = (scrolled / total) * max;
    };

    const measure = () => {
      const card = node.querySelector<HTMLElement>(".ag-step-card");
      const styles = window.getComputedStyle(node);
      const gap = Number.parseFloat(styles.rowGap || styles.gap) || 0;
      const step = (card?.offsetHeight || 160) + gap;
      const overflow = Math.max(node.scrollHeight - node.clientHeight, 0);
      const travel = Math.max(overflow, Math.max(steps.length - 1, 1) * step);
      pin.style.setProperty(
        "--ag-shipment-travel",
        `${Math.round(sticky.offsetHeight + travel)}px`,
      );
      syncFromPage();
    };

    measure();
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(measure) : null;
    ro?.observe(node);
    ro?.observe(sticky);
    window.addEventListener("scroll", syncFromPage, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      ro?.disconnect();
      window.removeEventListener("scroll", syncFromPage);
      window.removeEventListener("resize", measure);
    };
  }, [rise.ref]);

  useEffect(() => {
    const node = scrollerRef.current;
    if (!node) return;

    const onDown = (event: PointerEvent) => {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      dragging.current = true;
      startY.current = event.clientY;
      startTop.current = node.scrollTop;
      node.classList.add("is-dragging");
      node.setPointerCapture(event.pointerId);
    };

    const onMove = (event: PointerEvent) => {
      if (!dragging.current) return;
      const delta = event.clientY - startY.current;
      if (Math.abs(delta) < 4) return;
      node.scrollTop = startTop.current - delta;
      event.preventDefault();
    };

    const onUp = (event: PointerEvent) => {
      if (!dragging.current) return;
      dragging.current = false;
      node.classList.remove("is-dragging");
      if (node.hasPointerCapture(event.pointerId)) {
        node.releasePointerCapture(event.pointerId);
      }
    };

    node.addEventListener("pointerdown", onDown);
    node.addEventListener("pointermove", onMove, { passive: false });
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
    <section ref={pinRef} className="ag-shipment-pin">
      <div ref={rise.ref} className={`ag-shipment ag-shipment-sticky ${rise.className}`}>
        <div className="ag-container ag-shipment-grid">
          <div className="ag-shipment-copy">
            <h2>
              From enquiry
              to<br /> shipment
            </h2>
            <p>
              A clear process helps both parties align on product details, commercial terms and
              dispatch requirements.
            </p>
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
          >
            {steps.map((step) => (
              <article key={step.index} className="ag-step-card">
                <div>
                  <h3>
                    {step.title[0]}
                    <br />
                    {step.title[1]}
                  </h3>
                  <p>{step.text}</p>
                </div>
                <span>{step.index}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
