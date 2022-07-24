import { Box, Button, Flex, Grid, GridItem, Spacer, Stack } from '@chakra-ui/react'
import React from 'react'
import styles from "../Body/Body.module.css"
import { Img } from '../DivImage/Img'
const texts =[
  {title:"SKIN CARE"},
  {title:"SUNSCREEN"},
  {title:"MOISTURIZERS"},
  {title:"HAIR CAIR"},
  {title:"EYE CREAM"},
  {title:"CLENERSE"},
  {title:"MAKEUP"},
  {title:"FACE CREAM"},
 
  
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

export const QuickBuyBottom = () => {
  const i=5;
  return (
    <div>

        <Grid  templateColumns='repeat(4, 1fr)' gap={4} border="1p solid black" w="95%" m="auto" h="100px" mt="50px" bg="white" >
        {
          texts.map((elem)=>
          (
            <GridItem p="8px" border='p solid black' >
               {elem.title}
                
            </GridItem>

          ))
         
       }
        </Grid>
        <Img />

        <Box >
          <Flex w="95%" m="auto" border=" solid green" mt="30px">
             {/* <Spacer />
             <Button> Quick Buy</Button>
             <Spacer />


             <Button> Quick Buy</Button>
             <Spacer />

             <Button> Quick Buy</Button>
             <Spacer />

             <Button> Quick Buy</Button>
             <Spacer />

             <Button> Quick Buy</Button>
             <Spacer />

             <Button> Quick Buy</Button>
             <Spacer /> */}

             {
              new Array(i).fill("").map((elem, index)=>
              (
                <Button bg="black" color="white" ml="80px" borderRadius="1px" w="190px" >Quick Buy </Button>
                
              ))
             }
             <Spacer />
             

            </Flex>        
                           
        </Box>

        
    </div>
  )
}
