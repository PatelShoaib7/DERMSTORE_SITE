import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { QuicLastImg } from '../Body/QuicLastImg'

export const BigImage = () => {
  return (
    <div>
      
      <QuicLastImg />
        
        {/* <Box border="1px solid black" w="98%" m="auto" h="430px"> */}
         <Image m="auto" h="500px" w="95%" src="https://static.thcdn.com/images/large/webp/widgets/208-us/33/original-0629-STDCRE-38074-DS-CG-July-Priority-Batch-Shot02-Tablet_1200x675-050933.jpg"  />
        {/* </Box> */}
       
        
    </div>
  )
}
