export type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Our Products",
    href: "/products",
    children: [
      { label: "Wheat", href: "/products/wheat" },
      { label: "Rice", href: "/products/rice" },
      { label: "Maize", href: "/products/maize" },
      { label: "Export Crops", href: "/products/export-crops" },
    ],
  },
  { label: "Quality & Food Safety", href: "/quality-food-safety" },
  { label: "Private Label & Packaging", href: "/private-label-packaging" },
  { label: "Trade & Exports", href: "/trading-exports" },
  { label: "Contact Us", href: "/contact" },
];

export const footerQuickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Business", href: "/trading-exports" },
  { label: "Products", href: "/products" },
  { label: "Quality Approach", href: "/quality-food-safety" },
  { label: "Global Reach", href: "/trading-exports" },
];

export const footerProducts = [
  { label: "Wheat", href: "/products/wheat" },
  { label: "Rice", href: "/products/rice" },
  { label: "Maize", href: "/products/maize" },
  { label: "Pulses & Oilseeds", href: "/products/export-crops" },
  { label: "Pink Salt", href: "/products/export-crops" },
  { label: "Spices", href: "/products/export-crops" },
];

export const commodities = [
  {
    index: "01",
    title: "Wheat",
    href: "/products/wheat",
    image: "wheat" as const,
    alt: "Golden wheat ears in warm sunlight",
  },
  {
    index: "02",
    title: "Rice",
    href: "/products/rice",
    image: "rice" as const,
    alt: "Green rice terraces in morning light",
  },
  {
    index: "03",
    title: "Maize",
    href: "/products/maize",
    image: "maize" as const,
    alt: "A ripe ear of maize",
  },
  {
    index: "04",
    title: "Grains",
    href: "/products/export-crops",
    image: "grains" as const,
    alt: "Hands holding harvested grain",
  },
  {
    index: "05",
    title: "Pulses",
    href: "/products/export-crops",
    image: "pulses" as const,
    alt: "Dried pulses ready for trade",
  },
  {
    index: "06",
    title: "Pink Salt",
    href: "/products/export-crops",
    image: "salt" as const,
    alt: "Himalayan pink salt crystals",
  },
  {
    index: "07",
    title: "Spices",
    href: "/products/export-crops",
    image: "spices" as const,
    alt: "Assorted spices for export programmes",
  },
  {
    index: "08",
    title: "Oilseeds",
    href: "/products/export-crops",
    image: "oilseeds" as const,
    alt: "Oilseeds prepared for wholesale supply",
  },
];
