
import { Box, Button, Flex, Grid, GridItem, Image, Select, Spinner, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { Super } from '../pages/Super.module.css'
import styles from "../Body/Body.module.css"
import { StarIcon } from '@chakra-ui/icons'
import { Navbar } from '../Navbar/Navbar'
import { BigImage } from '../DivImage/BigImage'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { AppContex } from '../../Context/AppContext'


const QuickData2= [{title:"ReviLash Beautiful RLA Collection (Worth $208)", img:"https://static.thcdn.com/images/small/webp//productimg/original/13882836-1584968958720605.jpg", price:"158"},

{title:"ReviLash Beautiful RLA Collection (Worth $208)", img:"https://static.thcdn.com/images/small/webp//productimg/original/13813602-1784968003752682.jpg", price:"369"},

{title:"ReviLash Beautiful RLA Collection (Worth $208)", img:"https://static.thcdn.com/images/small/webp//productimg/original/13809379-5004957056034206.jpg", price:"269"},

{title:"ReviLash Beautiful RLA Collection (Worth $208)", img:"https://static.thcdn.com/images/small/webp//productimg/original/13462860-2144969531274424.jpg", price:"789"},

{title:"ReviLash Beautiful RLA Collection (Worth $208)", img:"https://static.thcdn.com/images/small/webp//productimg/original/13462860-2144969531274424.jpg", price:"369"},


]
 const QuickData3= [
  
{title:"ReviLash Beautiful RLA Collection (Worth $208)", img:"https://static.thcdn.com/images/small/webp/widgets/208-us/53/SITE_Mobile_600%E2%80%8A%C3%97%E2%80%8A750-080553.jpg", price:"369"},

  {title:"ReviLash Beautiful RLA Collection (Worth $208)", img:"https://static.thcdn.com/images/small/webp//productimg/original/13882836-1584968958720605.jpg", price:"158"},

{title:"ReviLash Beautiful RLA Collection (Worth $208)", img:"https://static.thcdn.com/images/small/webp//productimg/original/11174178-1564909106414676.jpg", price:"789"},

{title:"ReviLash Beautiful RLA Collection (Worth $208)", img:"https://static.thcdn.com/images/small/webp//productimg/original/13874745-9524973683180959.jpg", price:"269"},

{title:"ReviLash Beautiful RLA Collection (Worth $208)", img:"https://static.thcdn.com/images/small/webp//productimg/original/12915557-2084944407959371.jpg", price:"369"},

]

const QuickData1= [
  
  {title:"ReviLash Beautiful RLA Collection (Worth $208)", img:"https://static.thcdn.com/images/small/webp//productimg/original/11290635-1804892767902966.jpg", price:"369"},
  
    {title:"ReviLash Beautiful RLA Collection (Worth $208)", img:"https://static.thcdn.com/images/small/webp//productimg/original/12902911-3414871572863804.jpg", price:"158"},
  
  {title:"ReviLash Beautiful RLA Collection (Worth $208)", img:"https://static.thcdn.com/images/small/webp//productimg/original/11174178-1564909106414676.jpg", price:"789"},
  
  {title:"ReviLash Beautiful RLA Collection (Worth $208)", img:"https://static.thcdn.com/images/small/webp//productimg/original/13126436-1514871308379652.jpg", price:"269"},
  
  {title:"ReviLash Beautiful RLA Collection (Worth $208)", img:"https://static.thcdn.com/images/small/webp//productimg/original/12915557-2084944407959371.jpg", price:"369"},
  
  
  ]
const texts =[
  {title:" ₹ LOW-To-HIGH"},
  {title:"₹ HIGH-To-LOW"},
  {title:"NEW Collection-First"},
 
 
  
]

 export const textStyles= {
  h1: {
    // you can also use responsive styles
    fontSize: ['48px', '72px'],
    fontWeight: 'bold',
    lineHeight: '110%',
   
  },
  h2: {
    fontSize: ['36px', '48px'],
    fontWeight: 'semibold',
    lineHeight: '110%',
    letterSpacing: '-1%',
  },
}
export const SuperShop = () => {

  // const Data =[
  //   {title:"ReviLash Beautiful RLA Collection (Worth $208)", img:"https://static.thcdn.com/images/small/webp//productimg/original/13811675-9994964348315184.jpg", price:"895"},
    
  //   {title:"ReviLash Beautiful RLA Collection (Worth $208)", img:"https://static.thcdn.com/images/small/webp//productimg/original/11289609-1174892770940184.jpg", price:"156"},
    
  //   {title:"ReviLash Beautiful RLA Collection (Worth $208)", img:"https://static.thcdn.com/images/small/webp//productimg/original/11370303-1074944341868735.jpg", price:"586"},
    
  //   {title:"ReviLash Beautiful RLA Collection (Worth $208)", img:"https://static.thcdn.com/images/small/webp//productimg/original/13278644-1174951890758541.jpg", price:"759"},
    
  //   {title:"ReviLash Beautiful RLA Collection (Worth $208)", img:"https://static.thcdn.com/images/small/webp//productimg/original/13278644-1174951890758541.jpg", price:"782"},
    
  //   {title:"ReviLash Beautiful RLA Collection (Worth $208)", img:"https://static.thcdn.com/images/small/webp//productimg/original/12596429-3594871019700125.jpg", price:"235"},
    
  //   {title:"ReviLash Beautiful RLA Collection (Worth $208)", img:"https://static.thcdn.com/images/small/webp//productimg/original/11291541-5024871574576726.jpg", price:"749"},
    
  //   {title:"ReviLash Beautiful RLA Collection (Worth $208)", img:"https://static.thcdn.com/images/small/webp//productimg/original/11588281-8764882139037003.jpg", price:"429"},
    
  //   {title:"ReviLash Beautiful RLA Collection (Worth $208)", img:"https://static.thcdn.com/images/small/webp//productimg/original/11174178-1044909106371632.jpg", price:"632"}]
  
  const {count ,handleClick,handleDec }=useContext(AppContex)
  const [state, setSortState] = useState("none")
  const [Data , setData]= useState([]);
  const [serachParam, setSerchParam]= useSearchParams()
  const navigate =useNavigate()
  const [page , setPage]= useState(Number(serachParam.get("page"))||[])
  const [limit , setLimit]= useState(8)

  const btnTheme={
    Dark:{
      background:'black',
      color:"white",
      fontSize:'25px',
      width:'95%',
      height:'50px',
      borderRadius:'12px'
      
      
    },
    light:{
      background:'white',
      color:"black",
      fontSize:'25px',
      
    }
  }
  
   const getData =({page , limit})=>
   {
    setSerchParam({page})
       fetch(`http://localhost:8080/Data?_page=${page}&_limit=${limit}`)
       .then((res)=>res.json())
       .then((data)=>
       {
           setData(data)
           console.log(data+"  shoaib ")
           console.log(page)
       })
   }
   useEffect(()=>
   {
       getData({page ,limit})
   },[page , limit])

  const sortMethods = 
  {
    none: { method: (a, b) => null },
    ascending: { method: (a, b) => (b.price - a.price )  },
    descending: { method: (a, b) => (a.price - b.price ) },
  };
  
  const i=5;
  const j=3;
 
  const movePage =()=>
  {
    setPage(()=> page +1 )
  }
  const BackPage =()=>
  {
    if(page>1)
    {
    setPage(()=> page -1 )
    }
    // : disabled
    
  }

  const Add_To_Cart =()=>
  {

  }
  //  const ComingData = JSON.parse(localStorage.getItem("saveData"))
  
 
  //  const low =()=>
  //  {
  //     let low = ComingData.sort((a, b) => (   Number(a.price) - Number(b.price)    ))
  //    SuperShop(low)
  //  }

  //  const High =()=>
  //  {
  //    ComingData.sort((a, b) => (b.price - a.price ))
     
     
  //  }
   
   useEffect(()=>
   {
    setSerchParam({page})
   },[page ])

  
 
return (
  <div>
  
       {/* //for appluyin the tabs */}

                  <Navbar />
                  <Image m="auto" h="500px" w="95%" src="https://static.thcdn.com/images/large/webp/widgets/208-us/34/original-0704-STDCRE-38075-DS-AM-July-2022-Photography-Remaining-Btching-1200x675-050034.jpg" mt="20px"  />
       
                      
      
                      <Tabs w="95%" m="auto" textAlign="center" justifyContent="center" mb="30px" >
                              <TabList  textAlign="center" justifyContent="center">
                                  <Tab fontSize="25px">New Arrivals {"   "} </Tab>
                                  <Tab fontSize="25px">Value Spots</Tab>
                                  <Tab fontSize="25px">SPF</Tab>
                                  
                              </TabList>
                              
                              <TabPanels>
                                  <TabPanel>
                                  <Grid templateColumns='repeat(5, 1fr)' gap={4} border="1px  black" w="95%" m="auto" h="350px">
                                      {
                                              QuickData1.map((elem)=>
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
                                              QuickData3.map((elem)=>
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
                              </TabPanels>
                     </Tabs>
                





                 <div style={{border:'1px  black', width:'90%' , marginBottom:'10px', display:'grid', gridTemplateColumns:'repeat(3,1fr)' ,fontSize:'23px',borderRadius:'12px', padding:'10px'}} >
                   <div style={{margin:'5px',marginBottom:'25px',}}>
                    <select style={{border:"1px  black" , width:'400px' , background:'black', color:'white' ,height:"50px", marginLeft:'10px',fontSize:'23px',borderRadius:'12px',paddingLeft:"10px"}}  onChange={(e) => setSortState(e.target.value)}>
                       <option value="ascending"> Ascending </option>
                      <option value="descending"> Descending </option>
                      <option value="DEFAULT" disabled> None </option>
                     
                    </select>
                    </div>
                    <div style={{border:"1px  black" }}>  <Button width="100%" mt="3px" style={btnTheme.Dark} onClick={BackPage} mr="30px">Prev Page</Button></div>
                    <div style={{border:"1px  black"}}>  <Button mt="3px"  style={btnTheme.Dark} onClick={movePage}>Next Page</Button></div>
                   <div>
                   {/* <select   border="1px  black" fontSize="23px" 
                             h="50px" w="200px"
                             onChange={(e) => setLimit(e.target.value)}
                             
                             >
                 
                             
                  </select> */}
                      {/* <Grid  templateColumns='repeat(2, 1fr)' gap={1} border="1px  black"
                                w="auto" m="auto" h="auto"
                                 bg="rgb(242,242,242)" p="20px" >
                                  <GridItem>   <Button  onClick={BackPage} mr="30px">Prev Page</Button></GridItem>
                                  <GridItem>   <Button  onClick={movePage}>Next Page</Button></GridItem>
                 
                 
                 </Grid> */}
                    
                   </div>
                </div>     

                     <Grid templateColumns='repeat(4, 1fr)' gap={4} border="1px  black" w="90%" m="auto" h="auto" bg="rgb(242,242,242)" p="20px" >
                     {
                       Data.sort(sortMethods[state].method).map((elem,index)=>
                       (
                        <div>

                           <GridItem key={index} className={styles.shadow} borderRadius={"12px"} p="15px" gap="15px" bg="white" >
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
                                  <br />
                                   {/* <Link  style={btnTheme.Dark}   to={`/:userId`}>Add To Cart</Link> */}
                                   <Button style={btnTheme.Dark} onClick={handleClick}>Add To Cart</Button>
                           </Box>
                               {/* <Button bg="black" color="white" onClick={MoveToCart}>Quick Buy</Button> */}
                              
                               
                               </GridItem>
                               </div>
                           
                       ))
                     }
                    
                     </Grid>
                     <Grid Grid templateColumns='repeat(2, 1fr)' gap={4} border="1px  black"
                                w="90%" m="auto" h="auto"
                                 bg="rgb(242,242,242)" p="20px" >
                                  <GridItem>
                                        <Button style={btnTheme.Dark} onClick={BackPage} mr="30px">Prev Page</Button>
                                    </GridItem>
                                  <GridItem mb="50px">
                                      <Button style={btnTheme.Dark} onClick={movePage}>Next Page</Button>
                                  </GridItem>

                     
                     
                     </Grid>

      



 
  </div>
)
}
