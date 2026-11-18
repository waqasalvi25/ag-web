import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Moon, Sun } from "lucide-react";
import { images } from "@/lib/images";

type Theme = "light" | "dark";

function readTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function HeroSection() {
  const [theme, setTheme] = useState<Theme>(readTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("ag-theme", theme);
  }, [theme]);

  return (
    <section className="ag-hero">
      <img
        src={theme === "dark" ? images.darkBanner : images.banner}
        alt="Combine harvester cutting a golden wheat field"
      />
      <div className="ag-hero-shade" />
      <div className="ag-hero-copy">
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
          Nourishing today,
          <br />
          enriching tomorrow.
        </h1>
        <p>
          AG Grain Industries brings together agricultural sourcing, grain processing, product development
          and trading to deliver dependable food and grain products. With a commitment to quality,
          consistency and long-term partnerships, we connect Pakistan&apos;s agricultural potential with the
          needs of customers at home and around the world.
        </p>
        <div className="ag-hero-actions">
          <Link to="/products" className="ag-hero-btn ag-hero-btn-dark">
            Explore Our Products
            <span className="ag-btn-arrow" aria-hidden="true">
              <ArrowUpRight className="size-4" />
            </span>
          </Link>
          <Link to="/contact" className="ag-hero-btn ag-hero-btn-line">
            Partner With Us
            <span className="ag-btn-arrow" aria-hidden="true">
              <ArrowUpRight className="size-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
