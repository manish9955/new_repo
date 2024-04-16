
import React,{useEffect, useState} from 'react'
import './About.css';
import './Contact.jsx';
import app from "../src/manish.jpeg";



function About() {
  const[data,setData] = useState([])
  useEffect(()=>{
   getUser()


  },[])
  
  function getUser(){
   fetch('http://localhost:8081/users')
  .then(res=> res.json())
  .then(data => setData(data))
  .catch(err => console.log(err))
 }
 
  function deleteUser(id){
   fetch(`http://localhost:8081/delete/'${id}'`,{
      method:'DELETE'
   })
   .then(res=>{
      getUser()
   })

   .catch(err => console.log(err))
   
   
  }

  function updateUser(id){
   alert(id)
   
  }
  
return(
<>
<div className='container1'>
    <div className='about_profile'><h5>
สวัสดี ! นี่มันแย่มาก ผู้ก่อตั้ง <span className='span'>mk Advertiser</span> ฉันยินดีต้อนรับทุกท่านสำหรับบริการของฉัน</h5></div>
    <div className='profile'>
        <img src={app} alt='profile_pic'/>
    </div>

</div>

  
<div className='about_class'>
<h3>Our Customers</h3>
   <table>
     <thead>
       
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
        
     </thead>
     <tbody>
      {data.map((d,i)=>(
         <tr key={i}>
         
          <td>{d.name}</td>
          <td>{d.phone}</td>
          <td>{d.email}</td>
          <td><button type="button" onClick={()=>deleteUser(d.name)}>Delete</button></td>
          <td><button type="button" onClick={()=>updateUser(d.name)}>Update</button></td>
         </tr>
      ))}
     </tbody>
   </table>

</div>
</>

)
/*function deleteUser(){
   fetch(`http://localhost/:name`,{
      method:'DELETE'
}).then((result)=>((res)=>{
   result.json().then((res)=>{
      console.warn(res)
   })
}))


   }
 
}*/

}
export default About;