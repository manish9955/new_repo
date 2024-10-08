import React from "react";
import Card from "./Card";
import Sdata from "./data";
import { Link } from "react-router-dom";





function Service() {
    return(
      <>
     
       <div className="my-5">
          <h1 className="text-center">Our Services</h1>
       </div>
       <div className="container-fluid mb-5 ">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
            {
              Sdata.map((val,ind)=> {
                return <Card  key={ind} imgsrc={val.imgsrc} title={val.title} btn={val.btn}/>
              })
            }
          
            </div>
          </div>
        </div>
       </div>

        
      </>
    );
   };
  
    
      
  export default Service;