import './App.css';
import AboutMe from './components/about_me/AboutMe';
import Home from './components/home/Home';
import NavBar from './components/nav_bar_component/NavBar';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import ContactMe from './components/contact_me/ContactMe';
import Footer from './components/footer/Footer'
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

function App() {
  
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    window.addEventListener('scroll', () => {
      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navLinks.forEach((links) => {
            links.classList.remove('active');
            document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
          });
        }
      });
    });
  }, [])

  const ScrollRevealComponent = () => {
    useEffect(() => {
      const sr = ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200,
      });

      sr.reveal('.home-content, .heading', { origin: 'top' });
      sr.reveal('.home-img, .service-container, .portfolio-box, .contact form', { origin: 'bottom' });
      sr.reveal('.home-content h1, .about-img', { origin: 'left' });
      sr.reveal('.home-content p, .about-content', { origin: 'right' });
    }, []);

    return (
      <div className="App">
        <NavBar></NavBar>
        <Home></Home>
        <AboutMe></AboutMe>
        <Services></Services>
        <Portfolio></Portfolio>
        <ContactMe></ContactMe>
        <Footer></Footer>
      </div>
    );
  }
  return <ScrollRevealComponent></ScrollRevealComponent>
}

export default App;
