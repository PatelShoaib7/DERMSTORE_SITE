import { useState } from "react";
import { createContext } from "react";


export const  AppContex=createContext()

export const AppContexProvider =({children})=>
{
  const [count , setCount]=useState(0)


  const handleClick=()=>
  {
    setCount(count +1)
  }
   return (
    <AppContex.Provider value={{count ,handleClick}}>
    {children}
   </AppContex.Provider>
   )
}