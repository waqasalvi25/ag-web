import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Home, Mail, Menu, X } from "lucide-react";
import { Logo } from "@/components/site/Logo";
import { images } from "@/lib/images";
import { navLinks, type NavLink as NavItem } from "@/components/site/navLinks";

function DesktopItem({ item }: { item: NavItem }) {
  if (!item.children) {
    return (
      <li>
        <NavLink to={item.href} end={item.href === "/"} className={({ isActive }) => (isActive ? "is-active" : undefined)}>
          {item.href === "/" && <Home className="size-3.5" />}
          {item.label}
        </NavLink>
      </li>
    );
  }

  return (
    <li className="ag-nav-dropdown">
      <NavLink to={item.href} className={({ isActive }) => (isActive ? "is-active" : undefined)}>
        {item.label}
      </NavLink>
      <ul className="ag-nav-submenu">
        {item.children.map((child) => (
          <li key={child.href}>
            <Link to={child.href}>{child.label}</Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const home =
    location.pathname === "/" ||
    location.pathname === "/about" ||
    location.pathname === "/products" ||
    location.pathname === "/quality-food-safety";

  useEffect(() => {
    setOpen(false);
    setOpenGroup(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`ag-header${home ? " is-home" : ""}${scrolled ? " is-scrolled" : ""}`}>
      <Link to="/" className="ag-logo-blob" aria-label="AG home">
        <img src={images.logo} alt="" />
      </Link>

      <nav className="ag-desktop-nav" aria-label="Main">
        <ul className="ag-nav-pill">
          {navLinks.map((item) => (
            <DesktopItem key={item.href} item={item} />
          ))}
        </ul>
      </nav>

      <Link to="/contact" className="ag-enquire">
        Enquire Now
        <Mail className="size-4" />
      </Link>

      <button
        type="button"
        className="ag-burger"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      <button
        type="button"
        className={`ag-offcanvas-backdrop ${open ? "is-open" : ""}`}
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
        onClick={() => setOpen(false)}
      />

      <aside className={`ag-offcanvas ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="ag-offcanvas-head">
          <Logo />
          <button type="button" className="ag-offcanvas-close" aria-label="Close menu" onClick={() => setOpen(false)}>
            <X className="size-5" />
          </button>
        </div>
        <ul className="ag-mobile-list">
          {navLinks.map((item) => (
            <li key={item.href}>
              {item.children ? (
                <>
                  <button
                    type="button"
                    className="ag-mobile-parent"
                    onClick={() => setOpenGroup((value) => (value === item.href ? null : item.href))}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`size-4 ${openGroup === item.href ? "is-open" : ""}`} />
                  </button>
                  <ul className={`ag-mobile-sub ${openGroup === item.href ? "is-open" : ""}`}>
                    <li>
                      <Link to={item.href}>Overview</Link>
                    </li>
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link to={child.href}>{child.label}</Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <NavLink to={item.href} end={item.href === "/"}>
                  {item.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
        <div className="ag-mobile-actions">
          <Link to="/contact" className="ag-enquire">
            Enquire Now
            <Mail className="size-4" />
          </Link>
        </div>
      </aside>
    </header>
  );
}
