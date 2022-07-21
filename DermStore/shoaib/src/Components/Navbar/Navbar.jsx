import { AddIcon, ArrowForwardIcon, AtSignIcon, ChatIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, PhoneIcon, RepeatIcon, SearchIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Avatar, AvatarBadge, AvatarGroup, Box, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Grid, GridItem, Heading, Icon, IconButton, Image, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Radio, RadioGroup, Spacer, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { Profiler } from 'react'
import { Button, Stack } from 'react-bootstrap'
import { NavBottom } from './NavBottom'
<script src="https://kit.fontawesome.com/b87143b647.js" crossorigin="anonymous"></script>




export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('left')
  return (
   <div>
    {/* function PlacementExample() { */}
  <Flex border="1px solid red"  width="95%" m="auto"  gap="20px" h="80px" p="10px" >
        

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
                    <Button ml="50px">Submit</Button>
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
            <Input w="md"  placeholder='Serch for Products'/>
           <InputLeftElement pointerEvents='none' children={<SearchIcon color='gray.300' />}/>
            </InputGroup>
           {/* </Box> */}

             <Avatar mt="5px" onClick={onOpen}  aria-label='Options' size='sm' src='https://bit.ly/broken-link' />
           
           
           <Icon alt="profile" />
           <Spacer />
           <Icon alt="profile" />
           <Spacer />

       </Flex>
       <NavBottom />

    </div>
  )
}
