import { StarIcon } from '@chakra-ui/icons'
import { Box, Button, Grid, GridItem, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import styles from "../Body/Body.module.css"
import { Img } from '../DivImage/Img'
import Footer from '../Footer/Footer'
import { QuickBuyBottom } from './QuickBuyBottom'
import { textStyles } from './QuickBuyBottom'
import { QuicLastImg } from './QuicLastImg'


export const QuickBuy = () => {
    const [data , setData]= useState([])
  //  const [param ,setParam]= useParams()
 
  const navigate= useNavigate()
   const i=5;
    const getData =()=>
    {
        fetch(" http://localhost:8080/QuickBuyData")
        .then((res)=>res.json())
        .then((data)=>
        {
            setData(data)
            console.log(data)
        })
    }
    useEffect(()=>
    {
        getData()
    },[])
   
    const MoveToCart =(elem,index ,array)=>
    {
      navigate("/home/supershop")
    }
  return (

    
    <div style={{padding:'10px', gap:'15px'}}>
      
      <Box p="10px" m="10px" gap="15px">
      
         <Grid templateColumns='repeat(5, 1fr)' gap={4} border="1px solid blck" w="95%" m="auto" h="350px">
            {
                data.map((elem,index, array)=>
                (
                     <GridItem key={elem.id} className={styles.shadow} borderRadius={"12px"} p="15px" gap="15px">
                       <Image borderRadius={"12px"} w="92%" h="60%" src={elem.img} m="auto"/>
                         <Text>   {elem.title} </Text>
                     
                       {/* <br /> */}
                       <Box style={textStyles.h1} >  <>  ₹ {elem.price}</></Box>
                       
                     <Box >
                        {new Array(5).fill("").map((item, i) => (

                            <StarIcon key={index}
                              color={i > elem.rating ? "blue.200" : "blue.500"}
                              
                            />
                          ))}
                            {elem.rating}
                     </Box>
                        <Button bg="black" color="white" onClick={()=> MoveToCart(elem,index,array)}>Quick Buy</Button>
                        </GridItem>
                       
                ))
            }

         </Grid>
</Box>
{/* <Img /> */}
         <QuickBuyBottom />
        <Footer />
           
     
    </div>
   
  )
}
