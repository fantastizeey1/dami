import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { FormProvider } from "./FormProvider";
import ScrollToTop from "./components/ScrollToTop";
import LoadingSkeleton from "./components/ui/LoadingSkeleton";
import CalendlyPreloader from "./components/CalendlyPreloader";
import Footer from "./components/Home/Footer/Footer";

// Consistent imports (I removed .tsx extensions for consistency, let Vite resolve them)
const Header = lazy(() => import("./components/Header/Header"));
const About = lazy(() => import("./components/About/About"));
const Home = lazy(() => import("./components/Home/Home"));
const Services = lazy(() => import("./components/Services/Services"));
const NotFound = lazy(() => import("./components/NotFound"));
const Community = lazy(() => import("./components/Community"));
const Comingsoon = lazy(() => import("./components/Comingsoon/Comingsoon"));

function App() {
  return (
    <FormProvider>
      <Router>
        <AppContent />
      </Router>
    </FormProvider>
  );
}

function AppContent() {
  const location = useLocation();

  // Configuration: Routes where header is hidden
  const hideHeaderOn = ["/learn"];
  const shouldShowHeader = !hideHeaderOn.includes(location.pathname);

  // Logic: Reset scroll on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <main className="max-w-full font-sans overflow-x-hidden min-h-screen flex flex-col">
      <Suspense fallback={<LoadingSkeleton />}>
        <CalendlyPreloader />

        {shouldShowHeader && <Header />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Services />} />
          {/* Renaming distinct paths makes debugging easier */}
          <Route path="/learn" element={<Comingsoon />} />
          <Route path="/community" element={<Community />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
      <ScrollToTop />
    </main>
  );
}

export default App;
