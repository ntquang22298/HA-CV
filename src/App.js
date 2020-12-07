import React from 'react';
import './App.scss';
import Footer from './components/Footer';
import MobileSidebar from './components/MobileSidebar';
import Sidebar from './components/Sidebar';
import AboutMe from './pages/AboutMe';
import Awards from './pages/Awards';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Home from './pages/Home';
import Skills from './pages/Skills';
function App() {
  return (
    <div>
      <header>
        <MobileSidebar />
        <Sidebar />
      </header>
      <main className='main-content' data-spy='scroll' data-target='#side-bar'>
        <section id='home' className='home'>
          <Home />
        </section>
        <div style={{ background: '#F9F9FF' }}>
          <section id='about-me' className='about-me'>
            <AboutMe />
          </section>
          <section id='education' className='education'>
            <Education />
          </section>
          <section id='experience' className='experience'>
            <Experience />
          </section>
          <section id='works' className='skills'>
            <Skills />
          </section>
          <section id='awards' className='awards'>
            <Awards />
          </section>
        </div>
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
