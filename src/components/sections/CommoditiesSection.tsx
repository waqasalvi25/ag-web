import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useRise } from "@/components/motion/Reveal";
import { images } from "@/lib/images";
import { commodities } from "@/components/site/navLinks";

export function CommoditiesSection() {
  const rise = useRise<HTMLDivElement>(true);
  const pinRef = useRef<HTMLElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const dragged = useRef(false);
  const dragging = useRef(false);
  const startLeft = useRef(0);
  const startX = useRef(0);

  useEffect(() => {
    const pin = pinRef.current;
    const node = scrollerRef.current;
    const sticky = rise.ref.current;
    if (!pin || !node || !sticky) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      pin.style.removeProperty("--ag-commodities-travel");
      return;
    }

    const syncFromPage = () => {
      if (dragging.current) return;
      const total = Math.max(pin.offsetHeight - sticky.offsetHeight, 0);
      if (total <= 0) {
        node.scrollLeft = 0;
        return;
      }
      const scrolled = Math.min(Math.max(-pin.getBoundingClientRect().top, 0), total);
      const max = Math.max(node.scrollWidth - node.clientWidth, 0);
      node.scrollLeft = (scrolled / total) * max;
    };

    const measure = () => {
      const max = Math.max(node.scrollWidth - node.clientWidth, 0);
      pin.style.setProperty(
        "--ag-commodities-travel",
        `${Math.round(sticky.offsetHeight + max)}px`,
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
      dragged.current = false;
      startX.current = event.clientX;
      startLeft.current = node.scrollLeft;
      node.classList.add("is-dragging");
      node.setPointerCapture(event.pointerId);
    };

    const onMove = (event: PointerEvent) => {
      if (!dragging.current) return;
      const delta = event.clientX - startX.current;
      if (Math.abs(delta) > 4) dragged.current = true;
      node.scrollLeft = startLeft.current - delta;
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
    <section ref={pinRef} className="ag-commodities-pin">
      <div ref={rise.ref} className={`ag-commodities ag-commodities-sticky ${rise.className}`}>
        <div className="ag-container">
          <div className="ag-commodities-head">
            <h2>
              Premium agricultural
              <br />
              commodities
            </h2>
            <p>
              Explore our commodity categories for domestic trading and international enquiries.
              Specifications, grades, packaging and availability are confirmed for each order.
            </p>
          </div>
        </div>
        <div
          ref={scrollerRef}
          className="ag-commodity-slider"
          aria-label="Commodity categories"
        >
          {commodities.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="ag-commodity-slide"
              draggable={false}
              onClick={(event) => {
                if (dragged.current) event.preventDefault();
              }}
              onDragStart={(event) => event.preventDefault()}
            >
              <img src={images[item.image]} alt={item.alt} draggable={false} />
              <span className="ag-commodity-meta">
                <span>{item.index}</span>
                <span>{item.title}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
