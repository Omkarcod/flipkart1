import { Box, Button, styled } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import { ShoppingCart as Cart, FlashOn as Flash } from "@mui/icons-material";

const LeftContainer = styled(Box)(({ theme }) => ({
  padding: "40px 0 0 80px",

  minWidth: "40%",
  [theme.breakpoints.down("lg")]: {
    padding: "20px 40px",
  },
}));

const Image = styled("img")({
  padding: "15px",
});

const StyledButton = styled(Button)(({ theme }) => ({
  width: "48%",
  height: 50,
  borderRradius: 2,
  [theme.breakpoints.down("lg")]: {
    width: "46%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "45%",
  },
}));

const Actionitems = ({ product }) => {
  const { id } = product;
  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    navigate("/cart");
  };
  return (
    <LeftContainer>
      <Box
        style={{
          padding: "15px 20px",
          border: "1px solid #f0f0f0",
          width: "93%",
        }}
      >
        <Image src={product.detailUrl} alt="imges" />
      </Box>
      <StyledButton
        style={{ marginRight: 10, background: "#ff9f00" }}
        variant="contained"
        onClick={() => addItemToCart()}
      >
        <Cart />
        Add to Cart
      </StyledButton>
      <StyledButton style={{ background: "#fb541b" }} variant="contained">
        <Flash />
        Buy Now
      </StyledButton>
    </LeftContainer>
  );
};

export default Actionitems;
