// import { Height } from "@mui/icons-material";
import { AppBar, Toolbar, Box, Typography,List,ListItem, styled,Drawer, IconButton } from "@mui/material";
import React, { useState } from "react";
import {Menu} from '@mui/icons-material';
import { Link } from "react-router-dom";


// component imports
import Search from "./Search";
import CustumButton from "./CustumButton";

const HeaderStyled = styled(AppBar)`
  background: #2874f0;
  height: 50px;
`;
const Component = styled(Link)`
  margin-left: 12%;
  line-height: 0;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
`;
const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;
const PlusImg = styled("img")({
  width: 10,
  Height: 10,
  marginLeft: 4,
  marginBottom: 2,
});

const CustomButtonWrapper=styled(Box)(({theme})=>({
margin:' 0 5% 0 auto',
[theme.breakpoints.down('md')]:{
  display:'none'
}
}))

const MenuButton=styled(IconButton)(({theme})=>({
display:'none',
[theme.breakpoints.down('md')]:{
display:'block'
}
}))






const Header = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
     
    const [open,setOpen] =useState(false);
     const handleOpen=()=>{
      setOpen(true);
     }

     const handleClose=()=>{
setOpen(false);
     }

     const list=()=>(
      <Box style={{width:200}} onClick={handleClose}>
        <List>
          <ListItem button>
           <CustumButton/>
          </ListItem>
        </List>
      </Box>
     )

  return (
    <HeaderStyled>
      <Toolbar style={{ minHeight: "55px" }}>
      <MenuButton color="inherit" onClick={handleOpen} >
        <Menu/>
       </MenuButton>
       <Drawer open={open} onClose={handleClose}>
       {list()}
       </Drawer>
        <Component to='/'>
          <img src={logoURL} alt="flipkartLogo" style={{ width: "75px" }} />
          <Box style={{ display: "flex" }}>
            <SubHeading>
              Explore&nbsp;
              <Box component="span" style={{ color: "yellow" }}>
                Plus
              </Box>
            </SubHeading>
            <PlusImg src={subURL} alt="sublogo" />
          </Box>
        </Component>
        <Search />
        <CustomButtonWrapper>
          <CustumButton />
        </CustomButtonWrapper>
      </Toolbar>
    </HeaderStyled>
  );
};

export default Header;
