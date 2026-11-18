import { images } from "@/lib/images";

export function Logo() {
  return (
    <span className="ag-logo">
      <img src={images.logo} alt="" />
      <span>
        <strong>AG</strong>
        <small>Seven Industries</small>
      </span>
    </span>
  );
}
