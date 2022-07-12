import './App.css';
import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Navbar from './components/nav/Navbar';
import Blog from './components/pages/Blog';
import Projects from './components/pages/Projects';
// import ContactForm from './components/contactform/ContactForm';
import Contact from './components/pages/Contact';
// import { json } from 'express';
// import API from './API';


const smugmugAPI="https://api.smugmug.com/api/v2/user/erikburdett?_accept=application%2Fjson";

const config = {
  headers:{
    "expand_method": "ref",
    "shorturis": false,
    "content-type":"application/json"
  }
}

function App() {

  const [photoData, setPhotoData] = useState({});
  useEffect(()=> {
    getPhotoData();
  },[]);
  
  const getPhotoData = async () => {
    const res = await axios.get(smugmugAPI)
    .then(res => console.log(res))
    .catch(err => console.log(err))

    setPhotoData(res);
  };
  console.log(photoData)
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/Projects' element={<Projects/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
