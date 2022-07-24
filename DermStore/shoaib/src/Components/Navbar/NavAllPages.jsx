import { ChevronDownIcon, Icon, PhoneIcon } from '@chakra-ui/icons'
import { Flex, Grid, GridItem, Menu, MenuButton, MenuItem, MenuList, Spacer, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react'
import { Button } from 'react-bootstrap'
import { BigImage } from '../DivImage/BigImage'
import { NavBottom } from './NavBottom'
import styles from "../Navbar/Navbar.module.css"


export const NavAllPages = () => {
  return (
    <div style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" , }}>
       
  <Flex border="1px  grey" w="95%" m="auto" gap="10px" h="70px" p="9px">
      <Menu p="6px">
          <MenuButton  className={styles.Navbar_Flex3} fontSize="16px"  rightIcon={<ChevronDownIcon />} borderBottom="1px  blue">
            Brands  <ChevronDownIcon w={6} h={5}  />
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
      </Menu>


    {/* <Spacer /> */}
    <Menu>
        <MenuButton   className={styles.Navbar_Flex3} fontSize="16px"  rightIcon={<ChevronDownIcon />} borderBottom="1px  blue">
          Summer Shop  <ChevronDownIcon w={6} h={5}  />
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
    </Menu>



    {/* <Spacer /> */}
    <Menu>
        <MenuButton  className={styles.Navbar_Flex3} fontSize="16px"  rightIcon={<ChevronDownIcon />} borderBottom="1px  blue">
          Browser By  <ChevronDownIcon w={6} h={5}  />
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
        </MenuList>
    </Menu>
  
  

    {/* <Spacer /> */}
    <Menu bordr="1px  black">
        <MenuButton  className={styles.Navbar_Flex3}  bordr="1px  black" fontSize="16px"  rightIcon={<ChevronDownIcon />} borderBottom="1px  blue">
          BsetSeller  <ChevronDownIcon w={6} h={5}  />
        </MenuButton>
          
        <MenuList  bordr="1px  black">
          
            <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
         
        </MenuList>
       
        
    </Menu>
  
  
  

    {/* <Spacer /> */}
    <Menu>
        <MenuButton  className={styles.Navbar_Flex3} fontSize="16px"  rightIcon={<ChevronDownIcon />} borderBottom="1px  blue">
          Skin Care  <ChevronDownIcon w={6} h={5}  />
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
        </MenuList>
    </Menu>
   
   
   

    {/* <Spacer /> */}
    <Menu>
        <MenuButton  className={styles.Navbar_Flex3} fontSize="16px"  rightIcon={<ChevronDownIcon />} borderBottom="1px  blue">
          Make Up  <ChevronDownIcon w={6} h={5}  />
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
        
        </MenuList>
    </Menu>
   
   
    <Menu>
        <MenuButton  className={styles.Navbar_Flex3} fontSize="16px"  rightIcon={<ChevronDownIcon />} borderBottom="1px  blue">
          Hiar Care  <ChevronDownIcon w={6} h={5}  />
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          
        </MenuList>
    </Menu>


    <Menu>
        <MenuButton  className={styles.Navbar_Flex3} fontSize="16px"  rightIcon={<ChevronDownIcon />} borderBottom="1px  blue">
          Bath Body  <ChevronDownIcon w={6} h={5}  />
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          
        </MenuList>
    </Menu>
    <Menu>
        <MenuButton  className={styles.Navbar_Flex3} fontSize="16px"  rightIcon={<ChevronDownIcon />} borderBottom="1px  blue">
          Tool {`&`} Device  <ChevronDownIcon w={6} h={5}  />
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          
        </MenuList>
    </Menu>
    <Menu>
        <MenuButton  className={styles.Navbar_Flex3} fontSize="16px"  rightIcon={<ChevronDownIcon />} borderBottom="1px  blue">
          Gifts {`&`}  Sets  <ChevronDownIcon w={6} h={5}  />
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          
        </MenuList>
    </Menu>
    <Menu>
        <MenuButton  className={styles.Navbar_Flex3} fontSize="16px"  rightIcon={<ChevronDownIcon />} borderBottom="1px  blue">
          Beauty {`&`}  Fix  <ChevronDownIcon w={6} h={5}  />
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          
        </MenuList>
    </Menu>

    <Menu>
        <MenuButton  className={styles.Navbar_Flex3} fontSize="16px"  rightIcon={<ChevronDownIcon />} borderBottom="1px  blue">
          Offers  <ChevronDownIcon w={6} h={5}  />
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          
        </MenuList>
    </Menu>

    <Menu>
        <MenuButton  className={styles.Navbar_Flex3} fontSize="16px"  rightIcon={<ChevronDownIcon />} borderBottom="1px  blue">
          New  <ChevronDownIcon w={6} h={5}  />
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          
        </MenuList>
    </Menu>

   
  </Flex>

  
     <BigImage />
 
    </div>
  )
}
