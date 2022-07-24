import { Box, Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading ,Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useContext } from 'react'
import { AppContex } from '../../Context/AppContext'
import { Icon } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon ,EmailIcon } from '@chakra-ui/icons'
import { Navbar } from '../Navbar/Navbar'
import { NavAllPages } from '../Navbar/NavAllPages'
import { NavBottom } from '../Navbar/NavBottom'
import { QuickBuy } from '../Body/QuickBuy'


export const Home = () => {
    const {count , handleClick} =useContext(AppContex)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef(null)
    const [state , setState] = useState({name:"", email:'', num:''})
    const Info =(e)=>
    {
        const { name , value} = e.target
        setState({...state , [name]:value})
      
    }
    const arr= JSON.parse(localStorage.getItem("formData"))||[];

     const save =()=>
     {
        
        console.log(state)
        arr.push(state)
        localStorage.setItem("formData",JSON.stringify(arr))
        alert("form is submitted")
        
     }
    return (
      <>
     
        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody >
                
               
              {/* <Lorem count={2} /> */}
            
<InputGroup>      

                  <Input    mb='2rem' type='text'  
                            name="name"  placeholder='Enter Name' 
                            onChange={Info}
                            value={state.name} />
 </InputGroup>


 <InputGroup>
        <InputLeftElement   pointerEvents='none' children={<EmailIcon color='gray.300' />}/>
                  <Input    mb='2rem' type='tel' name="email" 
                            placeholder='Enter email'  
                            onChange={Info} 
                            value={state.email}/>
  </InputGroup>


  <InputGroup>
          <InputLeftElement pointerEvents='none' children={<PhoneIcon color='gray.300' />}/>
               <Input       mb='2rem' type='tel' name="num" 
                            placeholder='Enter num'  
                            onChange={Info} 
                            value={state.num}/>
         {/* <InputLeftElement  pointerEvents='none' children={<PhoneIcon color='gray.300' />}/> */}
  </InputGroup>
              
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button onClick={save}   variant='ghost'>Submit</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Navbar />
       <NavAllPages />
       <NavBottom />
       <QuickBuy />
      </>
      
    )
  }
      