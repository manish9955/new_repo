
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Navbar from "./Navbar";
import Card from "./Card";
import Contact from "./Contact";
import Pokemon from "./Pokemon";
import {Switch,Route,Redirect, Routes} from "react-router-dom";




function App() {
  return( 
    <>
   <Navbar/>
   
   <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/home" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/service" element={<Service/>}/>
        <Route exact path="/contact" element={<Contact/>}/>          
   </Routes>
   
    
    </>
  );
 };

  
    
export default App;

