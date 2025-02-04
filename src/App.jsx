import { useTheme } from "./ThemeContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ScrollToTopAndThemeToggleWrapper from "./components/ScrollToTopAndThemeToggleWrapper";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";

import NotFound from "./components/NotFound";
import PostList from "./components/Blog/PostList";
import PostDetail from "./components/Blog/PostDetail";
import { FormProvider } from "./FormProvider";
import Community from "./components/Community";

function App({ children }) {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <FormProvider>
      <main
        className={`max-w-full font-playfair ${
          isDarkMode ? "dark:bg-gray-900" : ""
        }`}
      >
        <Router>
          <Header />

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/learn" element={<PostList />} />
            <Route path="/post/:slug" element={<PostDetail />} />
            <Route path="/community" element={<Community />} />
            <Route path="*" element={<NotFound />} /> {/* Fallback route */}
          </Routes>

          {/* Scroll-to-Top and Theme Toggle */}
          <ScrollToTopAndThemeToggleWrapper
            isDarkMode={isDarkMode}
            toggleTheme={toggleTheme}
          />
        </Router>
      </main>
    </FormProvider>
  );
}

export default App;
