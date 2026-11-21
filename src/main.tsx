import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

document.documentElement.classList.add("ag-preloading");

createRoot(document.getElementById("root")!).render(<App />);
