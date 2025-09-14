import React from "react";
import { Routes, Route } from 'react-router-dom';
import {Navigate} from "react-router-dom";
import Home from './Home';
import Skills from './Skills';
import Navbar from './components/Navbar';
import About from "./About";
import Contact from './Contact';


function App() {
  return (
   <>
      <Navbar />
  
    <Routes>
     <Route path="/" element={<Navigate to="/home" />} />
      <Route path="home" element={<Home />} />
       <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        </Routes>
       
   </>
  );
}

export default App;
