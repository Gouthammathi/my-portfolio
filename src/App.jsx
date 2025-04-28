import React from 'react'
import ProfileBox from './Components/ProfileBox'
import Header from './Components/Header'
import Home from './Pages/Home'
import Portfolio from './Pages/Portfolio'
import AboutMe from './Pages/AboutMe'
import Resume from './Pages/Resume'
import Contact from './Pages/Contact'

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
        <Header activeSection={activeSection} />
        <main className="flex-grow overflow-y-auto scroll-smooth">
          <section id="home" className="min-h-screen px-4 lg:px-8 pt-24">
            <Home />
          </section>
          <section id="portfolio" className="min-h-screen px-4 lg:px-8 pt-24">
            <Portfolio />
          </section>
          <section id="about" className="min-h-screen px-4 lg:px-8 pt-24">
            <AboutMe />
          </section>
          <section id="resume" className="min-h-screen px-4 lg:px-8 pt-24">
            <Resume />
          </section>
          <section id="contact" className="min-h-screen px-4 lg:px-8 pt-24">
            <Contact />
          </section>
        </main>
      </div>
    </div>
  )
}

export default App