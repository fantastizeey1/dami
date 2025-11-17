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

// Lazy load pages for performance
const Header = lazy(() => import("./components/Header/Header"));
const About = lazy(() => import("./components/About/About"));
const Home = lazy(() => import("./components/Home/Home"));
const Services = lazy(() => import("./components/Services/Services"));
const NotFound = lazy(() => import("./components/NotFound"));
const PostList = lazy(() => import("./components/Blog/PostList"));
const PostDetail = lazy(() => import("./components/Blog/PostDetail"));
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

  // Hide header on selected routes (e.g. full-screen landing pages)
  const hideHeaderOn = ["/learn"];
  const shouldShowHeader = !hideHeaderOn.includes(location.pathname);

  // Smooth scroll & dynamic page titles
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const pageTitles = {
      "/": "InkyRepertoire | Creative Space for Stories & Ideas",
      "/about-us": "About Us | InkyRepertoire",
      "/services": "Our Services | InkyRepertoire",
      "/community": "Community | InkyRepertoire",
      "/learn": "Learning Hub | InkyRepertoire",
    };
    document.title = pageTitles[location.pathname] || "InkyRepertoire";
  }, [location.pathname]);

  return (
    <main className="max-w-full font-sans overflow-x-hidden">
      <Suspense fallback={<LoadingSkeleton />}>
        <CalendlyPreloader />
        {/* Conditionally render Header */}
        {shouldShowHeader && <Header />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/learn" element={<Comingsoon />} />
          {/* <Route path="/learn" element={<PostList />} /> */}
          <Route path="/post/:slug" element={<PostDetail />} />
          <Route path="/community" element={<Community />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      {/* Smooth scroll-to-top */}
      <ScrollToTop />
    </main>
  );
}

export default App;
