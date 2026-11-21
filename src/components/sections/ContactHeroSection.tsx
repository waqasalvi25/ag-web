import { useEffect, useState } from "react";
import { ArrowUpRight, Moon, Sun } from "lucide-react";
import { images } from "@/lib/images";

type Theme = "light" | "dark";

function readTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function ContactHeroSection() {
  const [theme, setTheme] = useState<Theme>(readTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("ag-theme", theme);
  }, [theme]);

  const scrollToForm = () => {
    document.getElementById("contact-enquiry")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="ag-about-hero ag-contact-hero">
      <img
        src={theme === "dark" ? images.contactBannerDark : images.contactBanner}
        alt="Agricultural field at dusk with rows of crops"
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
          Let&apos;s start a
          <br />
          conversation.
        </h1>
        <p>
          Looking for dependable product supply, private-label opportunities or export support?
          Share your requirements and our team will follow up.
        </p>
        <button type="button" className="ag-about-hero-btn" onClick={scrollToForm}>
          Send an enquiry
          <span className="ag-btn-arrow" aria-hidden="true">
            <ArrowUpRight className="size-4" />
          </span>
        </button>
      </div>
    </section>
  );
}
