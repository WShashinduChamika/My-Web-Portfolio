import './App.css';
import Home from './components/home/Home';
import MyServices from './components/my_services/MyServices';


import NavBar from './components/nav_bar_component/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Home></Home>
      <MyServices></MyServices>
    </div>
  );
}

export default App;
