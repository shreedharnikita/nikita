import React from "react";
import {  Route, Routes, } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/Routing/Navbar"

import Home from "./components/Routing/Home"
import Nonveg from "./components/Routing/Nonveg"
import Veg from "./components/Routing/Veg" 

function App() {
  return (
    <>
     
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Nonveg" element={<Nonveg />} />
          <Route path="/Veg" element={<Veg />} />
         
        </Routes>

     

    </>

  );
}
export default App; 
