import React, { useEffect, useState, useRef } from 'react'; // Combined imports
import ProfileBox from './Components/ProfileBox';
import Header from './Components/Header';
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import AboutMe from './Pages/AboutMe';
import Resume from './Pages/Resume';
import Contact from './Pages/Contact';
import Radio from "./Components/Radio";
import UseBounceScroll from './Components/UseBounceScroll'; // Keep if bounce effect is desired

const navOrder = ['home', 'portfolio', 'about', 'resume', 'contact'];

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  // const bounceRef = UseBounceScroll(); // Consider removing if bounce effect is not crucial
  const mainContentRef = useRef(null); // Ref for main content area if needed

  useEffect(() => {
    const sections = navOrder;
    const sectionElements = sections.map(id => document.getElementById(id));

    const observer = new IntersectionObserver(
      entries => {
        const visibleSections = entries.filter(e => e.isIntersecting);
        if (visibleSections.length > 0) {
          // Prioritize the section that is most visible (largest intersection ratio)
          // or closest to the top if ratios are similar.
          const topVisibleSection = visibleSections.sort((a, b) => {
            // Sort by intersection ratio descending (most visible first)
            if (b.intersectionRatio !== a.intersectionRatio) {
              return b.intersectionRatio - a.intersectionRatio;
            }
            // If ratios are equal, sort by position (topmost first)
            return a.boundingClientRect.top - b.boundingClientRect.top;
          })[0];
          setActiveSection(topVisibleSection.target.id);
        }
      },
      {
        // Adjust rootMargin to trigger slightly before/after the section is fully in view
        // Threshold 0.5 means when 50% of the section is visible
        threshold: 0.5,
        rootMargin: '-10% 0px -50% 0px' // Triggers when section is roughly in the middle vertical viewport
      }
    );

    sectionElements.forEach(el => el && observer.observe(el));

    return () => {
      sectionElements.forEach(el => el && observer.unobserve(el));
    };
  }, []);

  return (
    // Removed bounceRef for now, can be added back if needed
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#121212]">
      {/* Sidebar - using role="complementary" for semantics */}
      <div role="complementary" className="w-full lg:w-[380px] lg:flex-shrink-0 p-4 lg:p-6 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto">
        {/* Added padding-bottom for mobile to prevent overlap with Radio nav */}
        <div className="flex justify-center mt-8 md:mt-0 pb-24 lg:pb-6">
          <ProfileBox />
        </div>
      </div>

      {/* Main Content Area */}
      <div ref={mainContentRef} className="flex-grow flex flex-col min-h-screen">
        {/* Sticky Header for Desktop */}
        <header className="hidden md:block sticky top-0 z-40 bg-[#121212]/80 backdrop-blur-sm">
          <Header activeSection={activeSection} />
        </header>

        {/* Main scrollable content */}
        <main className="flex-grow overflow-y-auto">
          {/* Using aria-label for better accessibility */}
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
          <section id="contact" aria-label="Contact Section" className="min-h-screen px-4 lg:px-8 pt-8 lg:pt-6 pb-24 lg:pb-6"> {/* Added bottom padding */}
            <Contact />
          </section>
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="block md:hidden fixed bottom-0 left-0 right-0 z-50">
        {/* Pass activeIndex correctly */}
        <Radio activeIdx={navOrder.indexOf(activeSection)} />
      </div>
    </div>
  );
};

export default App