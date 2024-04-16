import axios from 'axios';
import React, { useState } from "react";
import './Contact.css';



function Contact() {

  const[data,setData]=useState({ 
        name:"",
        phone:"",
        email:"",
        msg:"",
                                
        });

  const InputEvent =(event)=>{
     const {name,value } =event.target;

    setData((preVal)=>{
      return{
        ...preVal,
        [name]:value,
      };

    });
      
      
    
  };
 console.log(data)

const formSubmit=(event)=>{
 // event.preventDefault();
  const name =event.target.name.value;
  const phone =event.target.phone.value;
  const email =event.target.email.value;
  const msg =event.target.msg.value;
  const info ={name,phone,email,msg}

  axios.post("http://localhost:8081/data",info)
  .then((response)=>{
    console.log(response);
    event.target.reset();
  })
  .catch((error)=>{
    console.log(error);
  });
  
 
    
    alert(`my name is ${data.name}.my mobile number is ${data.phone}and email is ${data.email},here is what i want to say ${data.msg}`)

  };

    return(
      <>
      <div className='wrapper'>
        <div className="my-5">
          <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container contact_div">
          <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                  <input type="text" className="form-control"  name="name" value={data.name}  onChange={InputEvent} id="example" placeholder="Enter your name"/>

                </div>

                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">phone</label>
                  <input type="number" className="form-control"  name="phone" value={data.phone} onChange={InputEvent} id="exam" placeholder="Enter mobile number"/>
                </div>

                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Email address</label>
                  <input type="email" className="form-control" name="email" value={data.email} onChange={InputEvent} id="examp" placeholder="name@example.com"/>
                </div>

              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control"  name="msg" value={data.msg} onChange={InputEvent} id="exampl" rows="3"></textarea>
              </div>

              <div className="col-12">
                  <button class="btn btn-outline-primary" type="submit">Submit form</button>
              </div>
            </form>

          </div>
          </div>
        </div>
      </div> 
      </>
    );
   };
  
    
      
  export default Contact;