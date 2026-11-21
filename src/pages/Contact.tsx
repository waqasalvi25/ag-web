import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Mail } from "lucide-react";
import { ContactHeroSection } from "@/components/sections/ContactHeroSection";
import { useRise } from "@/components/motion/Reveal";
import { images } from "@/lib/images";
import { usePageMeta } from "@/hooks/usePageMeta";

const emptyForm = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  enquiryType: "",
  product: "",
  quantity: "",
  message: "",
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

function ContactDetailsForm() {
  const rise = useRise<HTMLElement>(true);
  const [form, setForm] = useState(emptyForm);
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="contact-enquiry"
      ref={rise.ref}
      className={`ag-contact-panel ${rise.className}`}
    >
      <div className="ag-container ag-contact-panel-grid">
        <div className="ag-contact-info">
          <p className="ag-about-label">Contact AG Grain</p>
          <h2>
            Let&apos;s talk
            <br />
            business.
          </h2>
          <p className="ag-contact-company">AG Grain Industries (Private) Limited</p>

          <div className="ag-contact-meta">
            <div>
              <span>Visit / Location</span>
              <p>Tando Adam, Sindh, Pakistan</p>
            </div>
            <div>
              <span>Email</span>
              <p>
                <a href="mailto:info@aggrainindustries.com">info@aggrainindustries.com</a>
              </p>
            </div>
            <div>
              <span>Telephone / WhatsApp</span>
              <p>
                <a href="tel:+923003003025">+92 300 300 3025</a>
              </p>
            </div>
            <div>
              <span>Website</span>
              <p>
                <a href="https://www.aggrainindustries.com" target="_blank" rel="noreferrer">
                  www.aggrainindustries.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <form className="ag-contact-form" onSubmit={onSubmit}>
          <div className="ag-contact-form-head">
            <h3>Tell us what you need</h3>
            <p>Share a few details and our team will respond with the next steps.</p>
          </div>

          <div className="ag-contact-fields">
            <label>
              <span>Full name</span>
              <input
                required
                value={form.fullName}
                onChange={(event) => setForm({ ...form, fullName: event.target.value })}
                placeholder="Your name"
              />
            </label>
            <label>
              <span>Company name</span>
              <input
                required
                value={form.company}
                onChange={(event) => setForm({ ...form, company: event.target.value })}
                placeholder="Company"
              />
            </label>
            <label>
              <span>Business email</span>
              <input
                required
                type="email"
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
                placeholder="name@company.com"
              />
            </label>
            <label>
              <span>Telephone / WhatsApp</span>
              <input
                required
                value={form.phone}
                onChange={(event) => setForm({ ...form, phone: event.target.value })}
                placeholder="+92 ..."
              />
            </label>
            <label>
              <span>Country</span>
              <input
                required
                value={form.country}
                onChange={(event) => setForm({ ...form, country: event.target.value })}
                placeholder="Country"
              />
            </label>
            <label>
              <span>Enquiry type</span>
              <select
                required
                value={form.enquiryType}
                onChange={(event) => setForm({ ...form, enquiryType: event.target.value })}
              >
                <option value="" disabled>
                  Select enquiry type
                </option>
                <option value="product-supply">Product supply</option>
                <option value="export">Export enquiry</option>
                <option value="private-label">Private label & packaging</option>
                <option value="quality">Quality & food safety</option>
                <option value="other">Other</option>
              </select>
            </label>
            <label>
              <span>Product or service required</span>
              <input
                required
                value={form.product}
                onChange={(event) => setForm({ ...form, product: event.target.value })}
                placeholder="Wheat, rice, salt..."
              />
            </label>
            <label>
              <span>Quantity / expected volume</span>
              <input
                required
                value={form.quantity}
                onChange={(event) => setForm({ ...form, quantity: event.target.value })}
                placeholder="MT / bags"
              />
            </label>
            <label className="is-full">
              <span>Message</span>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(event) => setForm({ ...form, message: event.target.value })}
                placeholder="Share specifications, packing and destination notes"
              />
            </label>
          </div>

          <div className="ag-contact-form-actions">
            <button type="submit" className="ag-about-hero-btn">
              Submit enquiry
              <span className="ag-btn-arrow" aria-hidden="true">
                <Mail className="size-4" />
              </span>
            </button>
            {sent && <p className="ag-contact-form-note">Thanks — your enquiry has been recorded.</p>}
          </div>
        </form>
      </div>
    </section>
  );
}

function ContactDiscuss() {
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
              <a href="#contact-enquiry" className="ag-story-btn ag-story-btn-line">
                Contact Team
                <span className="ag-btn-arrow" aria-hidden="true">
                  <ArrowUpRight className="size-4" />
                </span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default function Contact() {
  usePageMeta({
    title: "Contact Us | AG Seven Industries",
    description:
      "Contact AG Grain Industries about product supply, private label, quality or export enquiries.",
  });

  return (
    <main className="ag-about-page ag-contact-page">
      <ContactHeroSection />
      <ContactDetailsForm />
      <ContactDiscuss />
    </main>
  );
}
