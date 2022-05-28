import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Services from './components/pages/Services';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/nav/Navbar';
import ContactForm from './components/contactform/ContactForm';
import ContactForm2 from './components/contactform/ContactForm2';


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<ContactForm/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
