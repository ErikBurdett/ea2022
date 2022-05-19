import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Services from './components/pages/Services';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/nav/Navbar';


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/services' element={Services}/>
        <Route path='/about' element={About}/>
        <Route path='/contact' element={Contact}/>
        <Route path='/projects' element={Projects}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
