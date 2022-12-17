import { Box, Button, Grid, GridItem, Image, Spinner, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { textStyles } from './QuickBuyBottom'
import styles from "../Body/Body.module.css"
import { StarIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
const QuickData2= [{title:"ReviLash Beautiful RLA Collection (Worth $208)", "img":"https://static.thcdn.com/images/small/webp//productimg/original/13882836-1584968958720605.jpg", "price":"158"},

{title:"ReviLash Beautiful RLA Collection (Worth $208)", img:"https://static.thcdn.com/images/small/webp//productimg/original/13813602-1784968003752682.jpg", price:"369"},

{title:"ReviLash Beautiful RLA Collection (Worth $208)", img:"https://static.thcdn.com/images/small/webp//productimg/original/13809379-5004957056034206.jpg", price:"269"},

{title:"ReviLash Beautiful RLA Collection (Worth $208)", img:"https://static.thcdn.com/images/small/webp//productimg/original/13462860-2144969531274424.jpg", price:"789"},

{title:"ReviLash Beautiful RLA Collection (Worth $208)", img:"https://static.thcdn.com/images/small/webp//productimg/original/13462860-2144969531274424.jpg", price:"369"},
]

const QuickData3= [{title:"ReviLash Beautiful RLA Collection (Worth $208)", img:"https://static.thcdn.com/images/small/webp//productimg/original/13882836-1584968958720605.jpg", price:"158"},

{title:"ReviLash Beautiful RLA Collection (Worth $208)", img:"https://static.thcdn.com/images/small/webp/widgets/208-us/53/SITE_Mobile_600%E2%80%8A%C3%97%E2%80%8A750-080553.jpg", price:"369"},

{title:"ReviLash Beautiful RLA Collection (Worth $208)", img:"https://static.thcdn.com/images/small/webp//productimg/original/13874745-9524973683180959.jpg", price:"269"},

{title:"ReviLash Beautiful RLA Collection (Worth $208)", img:"https://static.thcdn.com/images/small/webp//productimg/original/11174178-1564909106414676.jpg", price:"789"},

{title:"ReviLash Beautiful RLA Collection (Worth $208)", img:"https://static.thcdn.com/images/small/webp//productimg/original/12915557-2084944407959371.jpg", price:"369"},


]

export const QuicLastImg = () => {
    const [data , setData]= useState([])
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
  return (
    <div>

                        <Tabs w="95%" m="auto" textAlign="center" justifyContent="center" mb="10px">
                                <TabList  textAlign="center" justifyContent="center">
                                    <Tab fontSize="25px">New Arrivals {"   "} </Tab>
                                    <Tab fontSize="25px">Value Spots</Tab>
                                    <Tab fontSize="25px">SPF</Tab>
                                    
                                </TabList>
                                
                                <TabPanels>
                                    <TabPanel>
                                    <Grid templateColumns='repeat(5, 1fr)' gap={4} border="1px sod black" w="95%" m="auto" h="350px">
                                        {
                                                QuickData2.map((elem)=>
                                                (
                                                    <GridItem className={styles.shadow} borderRadius={"12px"} p="15px" gap="15px">
                                                    <Image borderRadius={"12px"} w="92%" h="60%" src={elem.img} m="auto"/>
                                                        <Text>   {elem.title} </Text>
                                                    
                                                    {/* <br /> */}
                                                    <Box style={textStyles.h1} >  <>  ₹ {elem.price}</></Box>
                                                    
                                                   
                                                            {elem.rating}
                                                    
                                                        <Button bg="black" color="white">Quick Buy</Button>
                                                        </GridItem>
                                                    
                                                ))
                                            }

                                        </Grid>
                                    </TabPanel>



                    {/*    below is panel 2 2 2 2  2 2 2 2 2 2                          */}
                                    <TabPanel>
                                    <Grid templateColumns='repeat(5, 1fr)' gap={4} border="1px  black" w="95%" m="auto" h="350px">
                                        {
                                                data.map((elem)=>
                                                (
                                                    <GridItem className={styles.shadow} borderRadius={"12px"} p="15px" gap="15px">
                                                    <Image borderRadius={"12px"} w="92%" h="60%" src={elem.img} m="auto"/>
                                                        <Text>   {elem.title} </Text>
                                                    
                                                    {/* <br /> */}
                                                    <Box style={textStyles.h1} >  <>  ₹ {elem.price}</></Box>
                                                    
                                                    <Box >
                                                        {new Array(5).fill("").map((item, i) => (

                                                            <StarIcon  key={i}
                                                            color={i > elem.rating ? "blue.200" : "blue.500"}
                                                            
                                                            />
                                                        ))}
                                                            {elem.rating}
                                                    </Box>
                                                        <Button bg="black" color="white">Quick Buy</Button>
                                                        </GridItem>
                                                    
                                                ))
                                            }

                                        </Grid>
                                        shoaib
                                       
                                    </TabPanel>
     {/*            beloe pane 3 33 3 3 33 3 3 33 3 3 33 3 3               */}
                                    <TabPanel>
                                    <Grid templateColumns='repeat(5, 1fr)' gap={4} border="1px  black" w="95%" m="auto" h="350px">
                                        {
                                                QuickData3.map((elem)=>
                                                (
                                                    <GridItem className={styles.shadow} borderRadius={"12px"} p="15px" gap="15px">
                                                    <Image borderRadius={"12px"} w="92%" h="60%" src={elem.img} m="auto"/>
                                                        <Text>   {elem.title} </Text>
                                                    
                                                    {/* <br /> */}
                                                    <Box style={textStyles.h1} >  <>  ₹ {elem.price}</></Box>
                                                    
                                                   
                                                            {elem.rating}
                                                    
                                                        <Button bg="black" color="white">Quick Buy</Button>
                                                        </GridItem>
                                                    
                                                ))
                                            }

                                        </Grid>
                                    </TabPanel>
                                </TabPanels>
                       </Tabs>


   //DIV FOR APPENDING THE ALL QUIVK BUY ITEMS 
    </div>
  )
}
