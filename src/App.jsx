import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import NotFound from "./components/NotFound";
import PostList from "./components/Blog/PostList";
import PostDetail from "./components/Blog/PostDetail";
import { FormProvider } from "./FormProvider";
import Community from "./components/Community";
import Comingsoon from "./components/Comingsoon/Comingsoon";
import ScrollToTop from "./components/ScrollToTop";

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

  return (
    <main className={`max-w-full font-sans `}>
      {/* Conditionally render Header */}
      {location.pathname !== "/" && <Header />}

      <Routes>
        <Route path="/" element={<Comingsoon />} />
        <Route path="/work" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/learn" element={<PostList />} />
        <Route path="/post/:slug" element={<PostDetail />} />
        <Route path="/community" element={<Community />} />
        <Route path="*" element={<NotFound />} /> {/* Fallback route */}
      </Routes>

      {/* Scroll-to-Top and Theme Toggle */}
      <ScrollToTop />
    </main>
  );
}

export default App;
