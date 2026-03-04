/**
 * App Component - Main Application Root
 * 
 * Design Philosophy: Tech-Forward Glassmorphism
 * - Integrates all sections with smooth scrolling
 * - Responsive layout with dark theme
 * - Lazy loading ready for future optimization
 */

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./contexts/ThemeContext";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";
import LanguagesSection from "./components/LanguagesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <div className="min-h-screen bg-gradient-to-b from-[#0a0e27] to-[#1a1a3e]">
            <Header />
            <main>
              <HeroSection />
              <ExperienceSection />
              <SkillsSection />
              <EducationSection />
              <LanguagesSection />
              <ContactSection />
            </main>
            <Footer />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
