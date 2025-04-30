import React, { useEffect } from 'react'
import ProfileBox from './Components/ProfileBox'
import Header from './Components/Header'
import Home from './Pages/Home'
import Portfolio from './Pages/Portfolio'
import AboutMe from './Pages/AboutMe'
import Resume from './Pages/Resume'
import Contact from './Pages/Contact'
import Radio from "./Components/Radio";
import UseBounceScroll from './Components/UseBounceScroll';

const navOrder = ['home', 'portfolio', 'about', 'resume', 'contact'];

const App = () => {
  const [activeSection, setActiveSection] = React.useState('home');
  const bounceRef = UseBounceScroll();

  useEffect(() => {
    const sections = ['home', 'portfolio', 'about', 'resume', 'contact'];
    const sectionElements = sections.map(id => document.getElementById(id));
    const observer = new window.IntersectionObserver(
      entries => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length > 0) {
          // Pick the section closest to the top
          const topSection = visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
          setActiveSection(topSection.target.id);
        }
      },
      { threshold: 0.5 }
    );
    sectionElements.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={bounceRef} className="flex flex-col lg:flex-row min-h-screen bg-[#121212]">
      <div className="w-full lg:w-[380px] lg:flex-shrink-0 p-4 lg:p-6">
        <div className="flex justify-center mt-8 md:mt-0 pb-16">
          <ProfileBox />
        </div>
      </div>
      <div className="flex-grow flex flex-col min-h-screen">
        {/* Sticky Header on desktop, hidden on mobile */}
        <div className="hidden md:block sticky top-0 z-30">
          <Header activeSection={activeSection} />
        </div>
        <main className="flex-grow overflow-y-auto scroll-smooth">
          <section id="home" className="min-h-screen px-4 ">
            <Home />
          </section>
          <section id="portfolio" className="min-h-screen px-4 ">
            <Portfolio />
          </section>
          <section id="about" className="min-h-screen px-4 ">
            <AboutMe />
          </section>
          <section id="resume" className="min-h-screen px-4 ">
            <Resume />
          </section>
          <section id="contact" className="min-h-screen px-4">
            <Contact />
          </section>
        </main>
      </div>
      {/* Show Radio navigation only on mobile */}
      <div className="block md:hidden w-full max-w-full">
        <Radio activeIdx={navOrder.indexOf(activeSection)} />
      </div>
    </div>
  )
}

export default App