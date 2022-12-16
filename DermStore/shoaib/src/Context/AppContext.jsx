import { useState } from "react";
import { createContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
export const  AppContex=createContext()
export const AppContexProvider =({children})=>
{ const [count , setCount]=useState(0);
 const [status , setStatus]= useState(false)
  const handleClick=()=>
  {   setCount(()=> count +1)
      alert("Item Added To Cart")
      Navigate("/home/supershop/cart")
  }
  const handleDec=()=>
  {
    setCount(()=> count -1) 
  }
   const handdlStatus =()=>{
      let upDtaed_Status = ! status ;
      setStatu(upDtaed_Status  )
     
   }
   return
  (<AppContex.Provider value={{count ,handleClick,handleDec }}>
    {children}
   </AppContex.Provider>
   )
}
