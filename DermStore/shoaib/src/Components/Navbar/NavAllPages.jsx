import { ChevronDownIcon } from '@chakra-ui/icons'
import { Flex, Grid, GridItem, Menu, MenuButton, MenuItem, MenuList, Spacer, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react'
import { Button } from 'react-bootstrap'
import { BigImage } from '../DivImage/BigImage'
import { NavBottom } from './NavBottom'

export const NavAllPages = () => {
  return (
    <div>
       
  <Flex border="1px solid grey" w="95%" m="auto" gap="35px" h="50px" p="9px">
      <Menu p="6px">
          <MenuButton fontSize="16px"  rightIcon={<ChevronDownIcon />} borderBottom="1px solid blue">
            Brands
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
        <MenuButton fontSize="16px"  rightIcon={<ChevronDownIcon />} borderBottom="1px solid blue">
          Summer Shop
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
        <MenuButton fontSize="16px"  rightIcon={<ChevronDownIcon />} borderBottom="1px solid blue">
          Browser By
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
        </MenuList>
    </Menu>
  
  

    {/* <Spacer /> */}
    <Menu bordr="1px solid black">
        <MenuButton  bordr="1px solid black" fontSize="16px"  rightIcon={<ChevronDownIcon />} borderBottom="1px solid blue">
          BsetSeller
        </MenuButton>
        <Grid
                  h='200px'
                  templateRows='repeat(6, 1fr)'
                  templateColumns='repeat(1, 1fr)'
                  gap={4}
                >
        <MenuList  bordr="1px solid black">
          
            <GridItem  > <MenuItem>Download</MenuItem></GridItem>
            <GridItem  > <MenuItem>Create a Copy</MenuItem></GridItem>
            <GridItem  >  <MenuItem>Attend a Workshop</MenuItem></GridItem>
          </Grid>
        </MenuList>
       
        
    </Menu>
  
  
  

    {/* <Spacer /> */}
    <Menu>
        <MenuButton fontSize="16px"  rightIcon={<ChevronDownIcon />} borderBottom="1px solid blue">
          Skin Care
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
        </MenuList>
    </Menu>
   
   
   

    {/* <Spacer /> */}
    <Menu>
        <MenuButton fontSize="16px"  rightIcon={<ChevronDownIcon />} borderBottom="1px solid blue">
          Make Up
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
        
        </MenuList>
    </Menu>
   
   
    <Menu>
        <MenuButton fontSize="16px"  rightIcon={<ChevronDownIcon />} borderBottom="1px solid blue">
          Hiar Care
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          
        </MenuList>
    </Menu>


    <Menu>
        <MenuButton fontSize="16px"  rightIcon={<ChevronDownIcon />} borderBottom="1px solid blue">
          Bath Body
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          
        </MenuList>
    </Menu>
    <Menu>
        <MenuButton fontSize="16px"  rightIcon={<ChevronDownIcon />} borderBottom="1px solid blue">
          Tool {`&`} Device
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          
        </MenuList>
    </Menu>
    <Menu>
        <MenuButton fontSize="16px"  rightIcon={<ChevronDownIcon />} borderBottom="1px solid blue">
          Gifts {`&`}  Sets
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          
        </MenuList>
    </Menu>
    <Menu>
        <MenuButton fontSize="16px"  rightIcon={<ChevronDownIcon />} borderBottom="1px solid blue">
          Beauty {`&`}  Fix
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          
        </MenuList>
    </Menu>

    <Menu>
        <MenuButton fontSize="16px"  rightIcon={<ChevronDownIcon />} borderBottom="1px solid blue">
          Offers
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          
        </MenuList>
    </Menu>

    <Menu>
        <MenuButton fontSize="16px"  rightIcon={<ChevronDownIcon />} borderBottom="1px solid blue">
          New
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          
        </MenuList>
    </Menu>

    <Menu>
        <MenuButton fontSize="16px"  rightIcon={<ChevronDownIcon />} borderBottom="1px solid blue">
        Skin On
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
