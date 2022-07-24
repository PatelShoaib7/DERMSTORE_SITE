import { AddIcon, ArrowForwardIcon, AtSignIcon, ChatIcon, ChevronDownIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, PhoneIcon, RepeatIcon, SearchIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Avatar, AvatarBadge, AvatarGroup, Badge, Box, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Grid, GridItem, Heading, Icon, IconButton, Image, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Popover, PopoverArrow, PopoverContent, PopoverTrigger, Radio, RadioGroup, Spacer, useDisclosure  } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Profiler } from 'react'
import { Button, Stack } from 'react-bootstrap'
import { NavBottom } from './NavBottom'
import styles from "../Navbar/Navbar.module.css"
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { AppContex } from '../../Context/AppContext'

// import "react-responsive-carousel/lib/styles/carousel.min.css";


export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('left')
  const {count}= useContext(AppContex)
  const navigate = useNavigate()
  const imgTheme ={
   
  }
  return (
   <div style={{}}>
    {/* function PlacementExample() { */}
  <Flex border="1px  solid grey"  width="95%" m="auto"  gap="20px" h="80px" p="10px" position="sticky" mt="15px">
        

  <Button  mt="5px" ml="10px" as={IconButton}
               colorScheme='blue' 
               onClick={onOpen}
               aria-label='Options'
               icon={<HamburgerIcon />}
               variant='outline'
               bg="lightgrey"
               >Log in 
       </Button> 
           <RadioGroup defaultValue={placement} onChange={setPlacement}>
      </RadioGroup>
            <Avatar>
            <Avatar boxSize='3rem' onClick={onOpen}  aria-label='Options' bg='gery.500' />
            </Avatar>
      

       <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent  gap="20px">
          <DrawerHeader borderBottomWidth='1px'>Sing UP OR Log In</DrawerHeader>
          <DrawerBody gap="20px">
                    <InputGroup mb="20px">
                          <InputLeftElement pointerEvents='none' children={<ArrowForwardIcon color='gray.300' />}/>
                          <Input    placeholder='Enter name' />
                    </InputGroup>
                    
                    <InputGroup mb="20px">
                          <InputLeftElement pointerEvents='none' children={<AtSignIcon color='gray.300' />}/>
                          <Input  placeholder='Enter Email' />
                    </InputGroup>
                   
                    <InputGroup mb="20px">
                          <InputLeftElement pointerEvents='none' children={<PhoneIcon color='gray.300' />} />
                          <Input placeholder='Enter Mob' />
                    </InputGroup> 
                    
                    <InputGroup mb="20px">
                          <InputLeftElement   pointerEvents='none' children={<ViewOffIcon color='gray.300' />}/>
                          <Input placeholder='Enter PassWord' />
                    </InputGroup>
                      <Button border="1px  black">Submit</Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

        {/* <Menu>
              <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='outline'
              />
              <MenuList>px
                        <MenuItem icon={<AddIcon />}>
                          Add Another account
                        </MenuItem>
                        <MenuItem icon={<ExternalLinkIcon />} >
                         Cart
                        </MenuItem>
                        <MenuItem icon={<ChatIcon />} >
                        Chat With us
                        </MenuItem>
                      
                      </MenuList>
            </Menu> */}
          
           <Heading>DermaStore</Heading>
           <Spacer />
           {/* <Box> */}
            <InputGroup>
            <Input w="sm"  placeholder='Serch for Products' mt="8px"/>
           <InputLeftElement  mt="8px" pointerEvents='none' children={<SearchIcon color='gray.300' />}/>
       
          <Flex     w="450px" border="1px  black" fontSize="18px" gap="25px" pt="11px" pl="40px" >
            <Link  className={styles.Navbar_Flex} to="/">Home</Link>
            <Link  className={styles.Navbar_Flex1} to="/superShop"> <Badge marginBottom="20px" colorScheme='red'>New</Badge>Super Shop </Link>
            <Link  className={styles.Navbar_Flex2} to="cart">Cart  <Badge marginBottom="20px" colorScheme='blue'>{count}</Badge></Link>
            <Link  className={styles.Navbar_Flex3} to="/login">Log In</Link>
         
          </Flex>
        
          
          
            </InputGroup>
         
          
             <Menu p="6px"  >
          <MenuButton   fontSize="16px"  rightIcon={<ChevronDownIcon />} >
        
          <Avatar mt="px" onClick={onOpen}  aria-label='Options' size='sm' src='https://bit.ly/broken-link' ></Avatar>
          <Badge  mt="10px" colorScheme='red' >log in</Badge>
          </MenuButton>
         
          <MenuList w="md" h="md" >
           <Box  className={styles.Register} ><button onClick={()=> navigate("/login")}>LOGIN</button></Box>
          {/* <Box className={styles.Register} style={{background:'white', color:'black' ,}}> */}
       <MenuItem w="90%" m="auto" mt="20px" className={styles.Register} textAlign="center" style={{background:'white', color:'black'}} ><button> Register </button></MenuItem>
          {/* </Box>  */}
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
       </Menu>
           <Spacer />
          <Flex gap="0px">

        
           <Image border="1px  black" h="50px" ml="" src="https://cdn.icon-icons.com/icons2/2582/PNG/512/shopping_bag_icon_153998.png" ></Image>
           <Badge  w="80px"h="50px" colorScheme='blue' fontSize="30px">{count}</Badge>
         </Flex>
           <Spacer />

       </Flex>





{/* 
       {"img":"https://static.thcdn.com/images/large/webp/widgets/208-us/33/original-0629-STDCRE-38074-DS-CG-July-Priority-Batch-Shot02-Tablet_1200x675-050933.jpg"},
    { "img":"https://static.thcdn.com/images/large/webp/widgets/208-us/55/original-BoD_SCF_Kit_1200x675_%282%29-091055.png" },
    { "img":"https://static.thcdn.com/images/large/webp/widgets/208-us/34/original-0704-STDCRE-38075-DS-AM-July-2022-Photography-Remaining-Btching-1200x675-050034.jpg" },
    { "img":"https://static.thcdn.com/images/large/webp/widgets/208-us/55/original-BoD_SCF_Kit_1200x675_%282%29-091055.png" }



 */}


    </div>
  )
}
