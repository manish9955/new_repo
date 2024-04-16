
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
import {Switch,Route,Redirect} from "react-router-dom";




function App() {
  return( 
    <>
   <Navbar/>
   
   
   
   <Switch>

        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/service" component={Service}/>
        <Route exact path="/contact" component={Contact}/>
        <Redirect to="/"></Redirect>
      
        
    </Switch>
   
    
    </>
  );
 };

  
    
export default App;

