import './App.css';
import AboutMe from './components/about_me/AboutMe';
import Home from './components/home/Home';


import NavBar from './components/nav_bar_component/NavBar';
import Services from './components/services/Services';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Home></Home>
      <AboutMe></AboutMe>
      <Services></Services>
    </div>
  );
}

export default App;
