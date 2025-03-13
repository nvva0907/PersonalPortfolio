import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "./lib/theme-provider";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

function App() {
  useEffect(() => {
    // Set up intersection observer for revealing sections on scroll
    const sections = document.querySelectorAll('.section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;