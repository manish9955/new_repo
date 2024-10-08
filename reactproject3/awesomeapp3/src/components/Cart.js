import React, { useState,createContext, useReducer, useEffect } from 'react'
//import './cart.css';
import ContextCart from '../ContextCart';
import { products } from './components/Products';
import { reducer } from './components/reducer';
import { Outlet } from 'react-router-dom';

export const  Cartcontext =createContext();

const initialState ={
  item:products,
  totalAmount:0,
  totalItem:0,
};
const Cart = () => {
    //const[items,setItems]=useState(products);
    const[state,dispatch]=useReducer(reducer,initialState);
    
    //to delete the indv.elements from an item cart
    const removeItem =(id)=>{
      return dispatch({
        type:"REMOVE_ITEM",
        payload:id,
      })
    };
    //clear cart
    const clearCart=()=>{
      return dispatch({  type:"CLEAR_CART"})
    };
    //increment the item
    const increment =(id)=>{
      return dispatch(
        {
          type:"INCREMENT",
          payload:id
        });
    
    };
    // decrement the item
    const decrement =(id)=>{
      return dispatch(
        {
        type:"DECREMENT",
        payload:id
        
       })
    }
    //we will use the useEffect to update the data
    useEffect(()=>{
      dispatch({type:"GET_TOTAL"})
     
    },[state.item])
   
    return(
        
           <Cartcontext.Provider 
            value={{...state,removeItem,clearCart,increment,decrement}}>
             <ContextCart/>
           </Cartcontext.Provider>
      
    );
};
export default Cart;