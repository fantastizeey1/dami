import { useEffect } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <main className="min-w-full dark:bg-gray-900">
      <Header />
      <Hero />
    </main>
  );
}

export default App;
