import React, { useEffect, useState, useRef } from 'react'; // Combined imports
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import ProfileBox from './Components/ProfileBox';
import Header from './Components/Header';
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import AboutMe from './Pages/AboutMe';
import Resume from './Pages/Resume';
import Contact from './Pages/Contact';
import Radio from "./Components/Radio";
// import UseBounceScroll from './Components/UseBounceScroll'; // Keep commented out unless needed
import { Background } from './Components/Background'; // Import Background

const navOrder = ['home', 'portfolio', 'about', 'resume', 'contact'];

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const mainContentRef = useRef(null);

  useEffect(() => {
    const sections = navOrder;
    const sectionElements = sections.map(id => document.getElementById(id));

    const observer = new IntersectionObserver(
      entries => {
        const visibleSections = entries.filter(e => e.isIntersecting);
        if (visibleSections.length > 0) {
          const topVisibleSection = visibleSections.sort((a, b) => {
            if (b.intersectionRatio !== a.intersectionRatio) {
              return b.intersectionRatio - a.intersectionRatio;
            }
            return a.boundingClientRect.top - b.boundingClientRect.top;
          })[0];
          setActiveSection(topVisibleSection.target.id);
        }
      },
      {
        threshold: 0.5,
        rootMargin: '-10% 0px -50% 0px'
      }
    );

    sectionElements.forEach(el => el && observer.observe(el));

    return () => {
      sectionElements.forEach(el => el && observer.unobserve(el));
    };
  }, []);

  return (
    
    // Main container - Added relative positioning for background
    <div className="relative flex flex-col lg:flex-row min-h-screen bg-[#121212]">
      {/* Background Component - Placed here, fixed, behind content */}
      {/* --- Adjusted opacity for better visual appeal --- */}
      <Background className="fixed inset-0 z-0 opacity-90" /> {/* Lowered opacity (e.g., to 20%) */}

      {/* Sidebar - Added relative positioning and z-index */}
      <div role="complementary" className="relative z-10 w-full lg:w-[380px] lg:flex-shrink-0 p-4 lg:p-6 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto">
        <div className="flex justify-center mt-8 md:mt-0 pb-24 lg:pb-6">
          <ProfileBox />
        </div>
      </div>

      {/* Main Content Area - Added relative positioning and z-index */}
      <div ref={mainContentRef} className="relative z-10 flex-grow flex flex-col min-h-screen">
        {/* Sticky Header for Desktop */}
        <header className="hidden md:block sticky top-0 z-40 bg-[#121212]/80 backdrop-blur-sm">
          <Header activeSection={activeSection} />
        </header>

        {/* Main scrollable content */}
        <main className="flex-grow overflow-y-auto">
          <section id="home" aria-label="Home Section" className="min-h-screen px-2 lg:px-8 pt-8 lg:pt-2">
            <Home />
          </section>
          <section id="portfolio" aria-label="Portfolio Section" className="min-h-screen px-4 lg:px-8 pt-8 lg:pt-6">
            <Portfolio />
          </section>
          <section id="about" aria-label="About Me Section" className="min-h-screen px-4 lg:px-8 pt-8 lg:pt-6">
            <AboutMe />
          </section>
          <section id="resume" aria-label="Resume Section" className="min-h-screen px-4 lg:px-8 pt-8 lg:pt-6">
            <Resume />
          </section>
          <section id="contact" aria-label="Contact Section" className="min-h-screen px-4 lg:px-8 pt-8 lg:pt-6 pb-24 lg:pb-6">
            <Contact />
          </section>
          <SpeedInsights/>
          <Analytics/> 
        </main>

        {/* Footer */}
        <footer className="relative z-10 w-full py-6 text-center bg-[#121212]/90 backdrop-blur-md border-t border-gray-800/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col items-center space-y-2">
              <p className="text-gray-400 text-sm font-light tracking-wide">
                © {new Date().getFullYear()} Goutham Mathi
              </p>
              <p className="text-gray-500 text-xs font-light">
                Crafted with passion and precision
              </p>
            </div>
          </div>
        </footer>
      </div>

      {/* Mobile Bottom Navigation - Added relative positioning and z-index */}
      <div className="relative z-50 block md:hidden fixed bottom-0 left-0 right-0">
        <Radio activeIdx={navOrder.indexOf(activeSection)} />
      </div>
    </div>
  );
};
// Removed the duplicate function App() { ... }

export default App