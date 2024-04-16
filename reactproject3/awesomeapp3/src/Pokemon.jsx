
import './App.css';
import { useState,useEffect } from 'react';
import axios from "axios";





function Pokemon() {
 
  const[num,setNum]=useState();
  const[name,setName]=useState();




  useEffect(()=>{
   // alert(`hi,you have selected ${num}`);
        async function getData(){
        const res = fetch(`https://pokeapi.co/api/v2/type/${num}`);
        const data = await (await res).json()
        console.log(data.name);
        //const{name}=data;
        //console.log(name)
      
        setName(data.name)
      }
      getData();
  })
  return (
    <div className="pokemon">
    <h1>you have selected <span style={{color:"red"}}>{num}</span></h1>
    <h1>i am <span style={{color:"red"}}>{name}</span></h1>
    
    

      <select 
       onChange=
       {(event)=>{setNum(event.target.value);
       }} >
        <option value="1">1</option>
        <option value="2">2</option> 
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      
    </div>
  );
}

export default Pokemon;

