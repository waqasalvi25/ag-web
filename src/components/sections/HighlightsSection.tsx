import { useRise } from "@/components/motion/Reveal";

const highlights = [
  {
    title: "Product range",
    text: "Grains, pulses, oilseeds, pink salt, spices and more.",
  },
  {
    title: "Trading & exports",
    text: "Commodity enquiries for local and international buyers.",
  },
  {
    title: "Customer focus",
    text: "Professional communication from enquiry to order coordination.",
  },
  {
    title: "Supply coordination",
    text: "Order requirements and delivery details aligned in advance.",
  },
];

export function HighlightsSection() {
  const rise = useRise<HTMLElement>({ self: true, stagger: true });

  return (
    <section ref={rise.ref} className={`ag-highlights ${rise.className}`}>
      <div className="ag-container ag-highlights-grid">
        {highlights.map((item) => (
          <article key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
