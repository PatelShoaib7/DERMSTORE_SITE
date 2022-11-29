import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { QuicLastImg } from '../Body/QuicLastImg'
import { SuperShop } from '../pages/SuperShop'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// import Footer from './Components/Footer/Footer';
export const BigImage = () => {
  return (
    <div>
      <QuicLastImg />
   <div>
        <Carousel autoPlay >
                    <div>
                      < img  style={{width:"900px"  }}
                             src="https://static.thcdn.com/images/large/webp/widgets/208-us/33/original-0629-STDCRE-38074-DS-CG-July-Priority-Batch-Shot02-Tablet_1200x675-050933.jpg" />
                    </div>
                    <div>
                      <img style={{width:"800px" }} 
                           src="https://static.thcdn.com/images/large/webp/widgets/208-us/55/original-BoD_SCF_Kit_1200x675_%282%29-091055.png" />
                    </div>
                    <div>
                      <img style={{width:"800px" }} 
                           src="https://static.thcdn.com/images/large/webp/widgets/208-us/34/original-0704-STDCRE-38075-DS-AM-July-2022-Photography-Remaining-Btching-1200x675-050034.jpg" />
                    </div>
                    <div>
                      <img  style={{width:"800px" }}
                            src="https://static.thcdn.com/images/large/webp/widgets/208-us/55/original-BoD_SCF_Kit_1200x675_%282%29-091055.png" />
                    </div>
                    <div>
                      <img  style={{width:"500px"  }}
                            src="https://static.thcdn.com/images/large/webp/widgets/208-us/33/original-0629-STDCRE-38074-DS-CG-July-Priority-Batch-Shot02-Tablet_1200x675-050933.jpg" />
                    </div>
                    <div>
                      <img style={{width:"300px" }}
                           src="https://static.thcdn.com/images/medium/webp/widgets/208-us/10/BoD_SCF_Kit_600x600_%283%29-092310.png" />
                    </div>
          
        </Carousel>
     </div> 
    </div>
  )
}
