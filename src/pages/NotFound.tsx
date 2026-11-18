import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function NotFound() {
  usePageMeta({
    title: "Page not found | AG Seven Industries",
    description: "This page is not available.",
  });

  return (
    <main className="ag-page">
      <header className="ag-page-hero">
        <div className="ag-container">
          <h1>Page not found</h1>
          <p>The page you requested is not part of this site.</p>
          <Link to="/" className="ag-btn">
            Back to home
          </Link>
        </div>
      </header>
    </main>
  );
}
