import React from "react";
import './Home.css';
import {NavLink} from "react-router-dom";
import logo512 from "../src/logo512.png";
import world from "../src/world.mp4";
   

function Home() {
    return(
      <>
        <section id="header" className="d-flex align-items-center  main">
         <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
            <div className="row">
             <div className="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column center brand" >
              <h1> Grow your business with <strong className="brand-name"><br/> Mk Advertisers</strong>
              </h1>
              <div className="header">
                <h4>
                We are the team of talented developers making your product reach to every one globally!
                </h4>
              </div>
              <div className="mt-3">
                <NavLink to="/service" className="btn-get-started  started">Get started</NavLink>
                
              </div>
             </div>

             <div className="col-lg-6 order-1 order-lg-2 header-img center">
              
                <video className="video" autoPlay loop muted plays-inline width="640" height="360">
                  <source src={world} type="video/mp4"/>
                </video>
             </div> 
            </div>
            </div>
          </div>
        </div>

        </section>
      </>
    );
   };
  
    
      
  export default Home;