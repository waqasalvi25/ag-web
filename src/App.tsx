import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { Preloader } from "./components/site/Preloader";
import { SiteLayout } from "./components/site/SiteLayout";
import { getBasename } from "./utils/Functions";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Products from "./pages/Products.tsx";
import QualityFoodSafety from "./pages/QualityFoodSafety.tsx";
import PrivateLabelPackaging from "./pages/PrivateLabelPackaging.tsx";
import Wheat from "./pages/Wheat.tsx";
import Rice from "./pages/Rice.tsx";
import Maize from "./pages/Maize.tsx";
import ExportCrops from "./pages/ExportCrops.tsx";
import TradingExports from "./pages/TradingExports.tsx";
import Gallery from "./pages/Gallery.tsx";
import Contact from "./pages/Contact.tsx";
import RequestQuote from "./pages/RequestQuote.tsx";
import DownloadCatalog from "./pages/DownloadCatalog.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import TermsConditions from "./pages/TermsConditions.tsx";
import NotFound from "./pages/NotFound.tsx";

const App = () => (
  <BrowserRouter basename={getBasename() || undefined}>
    <Preloader />
    <ScrollToTop />
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/wheat" element={<Wheat />} />
        <Route path="/products/rice" element={<Rice />} />
        <Route path="/products/maize" element={<Maize />} />
        <Route path="/products/export-crops" element={<ExportCrops />} />
        <Route path="/trading-exports" element={<TradingExports />} />
        <Route path="/quality-food-safety" element={<QualityFoodSafety />} />
        <Route path="/private-label-packaging" element={<PrivateLabelPackaging />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/request-a-quote" element={<RequestQuote />} />
        <Route path="/download-catalog" element={<DownloadCatalog />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
