import React, { useState } from 'react'
import { Navbar } from '../Navbar/Navbar'
import {Footer} from "../Footer/Footer"
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
export const Cart = () => {

  const [Data , setData] = useState({})
  let {userId} = useParams()
  console.log(userId+"  paramas hain ")
  useEffect(()=>
  {
    fetch(`http://localhost:8080/Data/${userId}`)
    .then((res)=>res.json())
    .then((data)=>
    {
        setData(data)
     
    })
  },[])
  console.log(Data)
  return (
    <div>
     <Navbar />
      Cartb
      
      <Footer />
     
      </div>
  )
}
