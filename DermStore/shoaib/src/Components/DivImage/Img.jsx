import { Box, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { textStyles } from '../Body/QuickBuyBottom'
const QuickLast =[
                {img:"https://static.thcdn.com/images/small/webp/widgets/208-us/43/GHD_676x556-051143.png", title:"Pink Limited Edition Collection" , decp:"Highlitiong awreness year round the collection is delighted  to include a self-check remainder"},
                {img:"https://static.thcdn.com/images/small/webp/widgets/208-us/18/0629-STDCRE-38074-DS-CG-July-Priority-Batch-shot_34-HP_LPSQ_BANNER_676x556-032618.jpg", title:"New from Wander Beauty" ,decp:"Highlitiong awreness year round the collection is delighted  to include a self-check remainder"},
                {img:"https://static.thcdn.com/images/small/webp/widgets/208-us/20/Paula%27s_Choice_676x556_%281%29-052320.png", title:"New from Paula's Choice" , decp:"Highlitiong awreness year round the collection is delighted  to include a self-check remainder"}

]
export const Img = () => {
  return (
    <div>    
      <Grid templateColumns='repeat(3, 1fr)' gap={5} border="1px  black" w="95%" m="auto" h="470px" mt="15px" bg="white">
                {
                    QuickLast.map((elem)=>
                    (
                      <GridItem>
                                  <Image src={elem.img}/>
                                                    <Box style={textStyles.h1}>
                                                                              {elem.title}
                                                     </Box>
                                  <Text>{elem.decp}</Text>
                      </GridItem>
                    ))
                }
            </Grid>
    </div>
  )
}
