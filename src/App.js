import './App.css';
import AboutMe from './components/about_me/AboutMe';
import Home from './components/home/Home';


import NavBar from './components/nav_bar_component/NavBar';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio'
import ContactMe from './components/contact_me/ContactMe';
import Footer from './components/footer/Footer';

function App() {
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

export default App;
