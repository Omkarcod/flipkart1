import { Box, Button,Badge, Typography, styled } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState, useContext } from "react";
import { useSelector } from "react-redux";

// components import
import LoginDialog from "../login/LoginDialog";
import { Datacontext } from "../context/DataProvider.jsx";
import Profile from "./Profile.jsx";
import { Link } from "react-router-dom";

// styling using styled component=>

const Wrapper = styled(Box)(({theme})=>({
  display: 'flex',
  /* justify-content: space-around; */
  
  margin: '0 3% 0 auto',
  '& > *' :{
    marginRight: '40px !important',
    fontSize: 16,
    alignItems: 'center'
  },
  [theme.breakpoints.down('md')]:{
   display:"block"
  }

}));


const CartDiv = styled(Link)(({theme})=>({
  display: 'flex',
  textDecoration:'none',
  color:'inherit',
  [theme.breakpoints.down('md')]:{
    display:'block'
  }
}));
const ButtonStyle = styled(Button)`
  color: blue;
  background: #fff;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 5px;
  box-shadow: none;
  /* margin-left: 15px; */
  font-weight: 600;
  height: 32px;
`;

const CustumButton = () => {
  const [open, setOpen] = useState(false);
  const { account,setAccount } = useContext(Datacontext);
  // Logical function
  const {cartItems}= useSelector(state => state.cart);
  const openDialog = () => {
    setOpen(true);
  };
  return (
    <Wrapper>
      {
        account ? <Profile account={account} setAccount={setAccount}/> : 
      <ButtonStyle variant="contained" onClick={() => openDialog()}>
        Login
      </ButtonStyle>
      }
      <Typography style={{ marginTop: 3, width: 135 }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>

      <CartDiv to='/cart'>
        <Badge badgeContent={cartItems?.length} color="primary">
        <ShoppingCartIcon />
        </Badge>
        <Typography style={{marginLeft:10}}>Cart</Typography>
      </CartDiv>
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default CustumButton;
