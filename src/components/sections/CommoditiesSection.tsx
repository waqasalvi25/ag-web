import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useRise } from "@/components/motion/Reveal";
import { images } from "@/lib/images";
import { commodities } from "@/components/site/navLinks";

const LOOP_COPIES = 3;

export function CommoditiesSection() {
  const rise = useRise<HTMLElement>(true);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const dragged = useRef(false);
  const dragging = useRef(false);
  const startLeft = useRef(0);
  const startX = useRef(0);
  const [paused, setPaused] = useState(false);

  const slides = useMemo(
    () =>
      Array.from({ length: LOOP_COPIES }, (_, copy) =>
        commodities.map((item) => ({ ...item, key: `${item.href}-${copy}` })),
      ).flat(),
    [],
  );

  useEffect(() => {
    const node = scrollerRef.current;
    if (!node) return;

    const getSetWidth = () => {
      const cards = node.querySelectorAll<HTMLElement>(".ag-commodity-slide");
      if (cards.length < commodities.length * 2) return 0;
      return cards[commodities.length].offsetLeft - cards[0].offsetLeft;
    };

    const normalize = () => {
      const width = getSetWidth();
      if (!width) return;

      if (node.scrollLeft >= width * 2) {
        node.scrollLeft -= width;
        startLeft.current -= width;
      } else if (node.scrollLeft < width) {
        node.scrollLeft += width;
        startLeft.current += width;
      }
    };

    requestAnimationFrame(() => {
      const width = getSetWidth();
      if (width) node.scrollLeft = width;
    });

    node.addEventListener("scroll", normalize, { passive: true });
    return () => node.removeEventListener("scroll", normalize);
  }, []);

  useEffect(() => {
    const node = scrollerRef.current;
    if (!node || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      if (dragging.current) return;
      const card = node.querySelector<HTMLElement>(".ag-commodity-slide");
      if (!card) return;
      const styles = window.getComputedStyle(node);
      const gap = Number.parseFloat(styles.columnGap || styles.gap) || 0;
      const step = card.offsetWidth + gap;
      node.scrollBy({ left: step, behavior: "smooth" });
    }, 3200);

    return () => window.clearInterval(timer);
  }, [paused]);

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
      setPaused(true);
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
      if (!node.matches(":hover")) setPaused(false);
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
    <section ref={rise.ref} className={`ag-commodities ${rise.className}`}>
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
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => {
          if (!dragging.current) setPaused(false);
        }}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        {slides.map((item) => (
          <Link
            key={item.key}
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
    </section>
  );
}
