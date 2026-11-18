import { Link } from "react-router-dom";

type PageHeroProps = {
  crumb: string;
  title: string;
  text: string;
};

export function PageHero({ crumb, title, text }: PageHeroProps) {
  return (
    <header className="ag-page-hero">
      <div className="ag-container">
        <p className="ag-crumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>{crumb}</span>
        </p>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </header>
  );
}
