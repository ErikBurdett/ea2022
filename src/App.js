import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet, Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Navbar from './components/nav/Navbar';
// import ContactForm from './components/contactform/ContactForm';
import Contact from './components/pages/Contact';



function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
