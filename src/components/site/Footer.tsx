import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { useRise } from "@/components/motion/Reveal";
import { footerProducts, footerQuickLinks } from "@/components/site/navLinks";
import { images } from "@/lib/images";

const social = [
  { label: "Facebook", icon: Facebook, href: "https://facebook.com", className: "is-facebook" },
  { label: "Twitter", icon: Twitter, href: "https://twitter.com", className: "is-twitter" },
  { label: "LinkedIn", icon: Linkedin, href: "https://linkedin.com", className: "is-linkedin" },
  { label: "YouTube", icon: Youtube, href: "https://youtube.com", className: "is-youtube" },
  { label: "Instagram", icon: Instagram, href: "https://instagram.com", className: "is-instagram" },
];

export function Footer() {
  const rise = useRise<HTMLElement>({ stagger: true });

  return (
    <footer ref={rise.ref} className={`ag-footer ${rise.className}`}>
      <div className="ag-container ag-footer-grid">
        <div className="ag-footer-brand">
          <Link to="/" className="ag-footer-logo" aria-label="AG Grain Industries home">
            <img src={images.footerLogo} alt="AG Grain Industries Private Limited" />
          </Link>
          <p className="ag-footer-tagline">Nourishing Today, Enriching Tomorrow.</p>
          <p className="!mt-0">Trading and exporter of Agricultural Commodities.</p>
          <div className="ag-social">
            {social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={item.className}
                aria-label={item.label}
                target="_blank"
                rel="noreferrer"
              >
                <item.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2>Quick Links</h2>
          <ul>
            {footerQuickLinks.map((item) => (
              <li key={item.label}>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Our Products</h2>
          <ul>
            {footerProducts.map((item) => (
              <li key={item.label}>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Contact Information</h2>
          <ul className="ag-footer-contact">
            <li>Tando Adam, Sindh, Pakistan</li>
            <li>
              <Link to="/contact" className="ag-footer-enquiry">
                Request an enquiry
              </Link>
            </li>
            <li>
              <a href="mailto:info@aggrainindustries.com">Email: info@aggrainindustries.com</a>
            </li>
            <li>
              <a href="tel:+923003003025">Telephone / WhatsApp: +92 300 300 3025</a>
            </li>
            <li>
              <a href="https://www.aggrainindustries.com" target="_blank" rel="noreferrer">
                www.aggrainindustries.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="ag-container ag-footer-base">
        <p>© {new Date().getFullYear()} AG Grain Industries Private Limited. All rights reserved.</p>
        <p>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <span aria-hidden="true">|</span>
          <Link to="/terms-conditions">Terms of Use</Link>
        </p>
      </div>
    </footer>
  );
}
