import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AOS from "aos";
import "aos/dist/aos.css";
import BasicExample from "./components/Navbar/Navbar";
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { useEffect } from 'react';

function App() {
  useEffect(()=> {
    AOS.init({duration: 2000});
  }, [])
  return (
    <div className="App">
      <BasicExample />
      <Home />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
