import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import BasicExample from "./components/Navbar/Navbar";
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
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
