import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Moon, Sun } from "lucide-react";
import { images } from "@/lib/images";

type Theme = "light" | "dark";

function readTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function ProductsHeroSection() {
  const [theme, setTheme] = useState<Theme>(readTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("ag-theme", theme);
  }, [theme]);

  return (
    <section className="ag-about-hero ag-products-hero">
      <img
        src={theme === "dark" ? images.productsBannerDark : images.productsBanner}
        alt="Tractor working across agricultural fields"
      />
      <div className="ag-about-hero-shade" />
      <div className="ag-about-hero-copy ag-hero-enter">
        <div className="ag-theme" role="group" aria-label="Color theme">
          <button
            type="button"
            className={theme === "dark" ? "is-active" : ""}
            aria-pressed={theme === "dark"}
            onClick={() => setTheme("dark")}
          >
            <Moon className="size-3.5" />
            Dark
          </button>
          <button
            type="button"
            className={theme === "light" ? "is-active" : ""}
            aria-pressed={theme === "light"}
            onClick={() => setTheme("light")}
          >
            <Sun className="size-3.5" />
            Light
          </button>
        </div>
        <h1>
          From the source.
          <br />
          For your market.
        </h1>
        <p>
          Explore our commodity categories for domestic trading and international enquiries.
          Specifications, grades, packaging and availability are confirmed for each order.
        </p>
        <Link to="/contact" className="ag-about-hero-btn">
          Discuss your requirements
          <span className="ag-btn-arrow" aria-hidden="true">
            <ArrowUpRight className="size-4" />
          </span>
        </Link>
      </div>
    </section>
  );
}
