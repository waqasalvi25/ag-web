import { useEffect, useState } from "react";
import { Logo } from "@/components/site/Logo";

const PRELOADER_MS = 900;

export function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add("ag-preloading");
    const timer = window.setTimeout(() => {
      setVisible(false);
      document.documentElement.classList.remove("ag-preloading");
    }, PRELOADER_MS);
    return () => {
      window.clearTimeout(timer);
      document.documentElement.classList.remove("ag-preloading");
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="ag-preloader" aria-hidden="true">
      <Logo />
      <p>Nourishing today, enriching tomorrow.</p>
    </div>
  );
}
