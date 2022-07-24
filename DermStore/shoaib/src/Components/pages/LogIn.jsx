import { CheckIcon, PhoneIcon } from '@chakra-ui/icons'
import { Box, Flex, FormControl, FormLabel, Grid, GridItem, Heading, Image, Input, InputLeftAddon, InputLeftElement, InputRightAddon, InputRightElement, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { Button, InputGroup, Stack } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../Navbar/Navbar'
import styles from "../pages/Login.module.css"
export const LogIn = () => {
  const navigate =useNavigate()
  
  return (
    <div>
      <Flex border="1px  black" h="60px" w="95%"m="auto" mb="15px">
          <Heading pl="50px">Derma store</Heading>
          
      </Flex>
   <div style={{background:"rgb(242,242,242)" , 
                border:'1px  yellow', 
                padding:"30px" , 
                marginBottom:'40px' ,
                height:'750px'
                }}>

   
      <div style={{display:'grid',
                  gridTemplateColumns:"repeat(2,1fr)" ,
                  width:"70%" , margin:'auto', 
                  height:'600px', gap:"50px" , 
                  padding:'40px'
                }} gap="50px"
                  >
        <div style={{border:'1px  blue' , 
                     width:"95/%" , gap:"20px" , 
                     boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px", 
                     marginBottom:'30px' , 
                     background:"white" , 
                     height:'600px', 
                     padding:'15px' , 
                     marginBottom:'50px'}} >
           
            <Text mt="30px" fontSize="25px">Existing Costmour </Text>
              <FormControl isRequired>
                  <FormLabel pl="70px"
                             fontSize="20px" 
                             mb="5px" 
                             mt="40px">Email Address</FormLabel>
                 
                  <Input  w="70%" m="auto"
                          placeholder='Enter Email Address' 
                          h="55px" mb="10px"/>

                  <FormLabel pl="70px"  
                             fontSize="20px"
                             mb="5px">Password</FormLabel>

                  <Input  w="70%" m="auto"
                          placeholder='Enter Password' 
                          h="55px" mb="10px"
                          />
                  <FormLabel className={styles.aa} 
                             pl="70px" mb="15px"  
                             fontSize="20px">Forgotten your password</FormLabel>
                  
                  <Box  className={styles.Register}
                         mb="15px"><button onClick={()=> navigate("/")} >LOGIN</button></Box>
                
                <Text   mb="15px"
                       fontSize="20px"> Or Continue With</Text>

              </FormControl>
              {/* <Box border="1px  green" h="50px" > */}
            <Grid templateColumns='repeat(2, 1fr)' 
                   gap={6} w="85%" m="auto"  
                    p="3px" mb="10px">
                 
                  <GridItem w='100%' h='10' mb="10px" >
                   
                      <Box border="1px  black"
                           h="50px" display="flex">
                        
                        <Image src="https://cdn.icon-icons.com/icons2/2037/PNG/512/facebook_fb_media_social_icon_124262.png" 
                               h="40px" pl="10px" mt="3px"/>
                            <Text fontWeight="bold" fontSize="20px" pt="5px" pl="5px">facebook</Text>
                        
                        </Box>
                  </GridItem>
                  <GridItem w='100%' h='10'mb="10px">
                  <Box border="1px  black" h="50px" display="flex">
                        
                        <Image src="https://cdn.icon-icons.com/icons2/729/PNG/512/google_icon-icons.com_62736.png" h="40px" pl="25px" mt="3px"/>
                            <Text fontWeight="bold" fontSize="20px" pt="5px" pl="5px">Google</Text>
                        
                        </Box>
                  </GridItem>
                  
              </Grid>
                    
          
        </div>
   
       
        <div  style={{border:'1px  red', height:'150px' , background:"white" , padding:'15px' }}>
        <Text  fontSize="25px" mb="5px">New Costmour</Text>
        <Box  className={styles.Register} mb="15px"><button >Continue</button></Box>
                     
        </div>
      </div>
     
       
       
       


      </div>
      </div>
  )
}
{/* <Stack spacing={4}>
  <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<PhoneIcon color='gray.300' />}
    />
    <Input type='tel' placeholder='Phone number' />
  </InputGroup>

  <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      color='gray.300'
      fontSize='1.2em'
      children='$'
    />
    <Input placeholder='Enter amount' />
    <InputRightElement children={<CheckIcon color='green.500' />} />
  </InputGroup>
</Stack> */}