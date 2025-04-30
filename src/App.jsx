import React from 'react'
import ProfileBox from './Components/ProfileBox'
import Header from './Components/Header'
import Home from './Pages/Home'
import Portfolio from './Pages/Portfolio'
import AboutMe from './Pages/AboutMe'
import Resume from './Pages/Resume'
import Contact from './Pages/Contact'
import Radio from "./Components/Radio";

const App = () => {
  const [activeSection, setActiveSection] = React.useState('home');

  const handleScroll = (e) => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight - 100) {
        setActiveSection(section.id);
      }
    });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#121212]">
      <div className="w-full lg:w-[380px] lg:flex-shrink-0 p-4 lg:p-6">
        <ProfileBox />
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
          <section id="contact" className="min-h-screen px-4 ">
            <Contact />
          </section>
        </main>
      </div>
      {/* Show Radio navigation only on mobile */}
      <div className="block md:hidden w-full max-w-full">
        <Radio />
      </div>
    </div>
  )
}

export default App