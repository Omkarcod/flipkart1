import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import { Box, styled } from "@mui/material";
import { useDispatch,useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";
import Slide from "./Slide";
import MisSlide from "./MisSlide";
import Midsection from "./Midsection";

const Component = styled(Box)`
  padding: 10px 10px;
  background: #f2f2f2;
`;

const Home = () => {
  const{products}= useSelector(state => state.getProducts)
  const dispatch= useDispatch();

  useEffect(()=>{
    dispatch(getProducts())

  },[dispatch])

  return (
    <>
      <Navbar />
      <Component>
        <Banner />
        <MisSlide products={products} title='Deal of the day' timer={true}/>
        <Midsection/>
        <Slide products={products} title='Discount for you' timer={false}/>
        <Slide products={products} title='Suggesting items' timer={false}/>
        <Slide products={products} title='Top Selection' timer={false}/>
        <Slide products={products} title='Recommanded items' timer={false}/>
        <Slide products={products} title='Trending offer' timer={false}/>
        <Slide products={products} title='Seasons top picks' timer={false}/>
        <Slide products={products} title='Top deals on accessories' timer={false}/>
      </Component>
    </>
  );
};

export default Home;
