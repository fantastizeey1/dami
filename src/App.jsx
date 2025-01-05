import { useTheme } from "./ThemeContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ScrollToTopAndThemeToggleWrapper from "./components/ScrollToTopAndThemeToggleWrapper";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import BlogRightSidebar from "./components/BlogRightSidebar";

function App() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <main className={`max-w-full ${isDarkMode ? "dark:bg-gray-900" : ""}`}>
      <Header />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/learn" element={<BlogRightSidebar />} /> */}
        <Route path="*" element={<NotFound />} /> {/* Fallback route */}
      </Routes>

      {/* Scroll-to-Top and Theme Toggle */}
      <ScrollToTopAndThemeToggleWrapper
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />
    </main>
  );
}

// NotFound Component
const NotFound = () => (
  <div className="text-center">
    <h2 className="text-2xl">404 - Page Not Found</h2>
  </div>
);

export default App;
