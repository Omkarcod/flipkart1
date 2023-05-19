import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase, Box, styled,List, ListItem } from "@mui/material";
import { useSelector,useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";
import { Link } from "react-router-dom";

// styling using styled components
const SearchContainer = styled(Box)`
  background-color: white;
  width: 38%;
  border-radius: 5px;
  margin-left: 10px;
  display: flex;
  `;
const InputContainer = styled(InputBase)`
  /* background-color: white; */
  color: grey;
  margin-left: 20px;
  width: 100%;
  font-size: unset;
`;
const SearchIconWrapper = styled(Box)`
  color: blue;
  padding: 5px;
  display: flex;
  cursor: pointer;
`;
const ListWrapper=styled(List)`
position:absolute;
background: #FFFFFF;
color: #000;
margin-top: 36px;

`

const Search = () => {
  const [text,setText]=useState('');

 const {products}=useSelector(state=>state.getProducts)
 const dispatch=useDispatch();
 useEffect(()=>{
   dispatch(getProducts())
 },[dispatch])

  const getText=(text)=>{
   setText(text);
  }
  return (
    <SearchContainer>
      <InputContainer placeholder="Search for Products,Brands and More" 
      onChange={(e)=>getText(e.target.value)}
      value={text}/>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>

      {
        text &&
        <ListWrapper>
          {
            products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
              <ListItem>
                <Link
                to={`product/${product.id}`}
                onClick={()=>setText('')}
                style={{textDecoration:"none",color:'inherit'}}>
                {product.title.longTitle}
                
                </Link>
              </ListItem>
            ))
          }
        </ListWrapper>
      }
    </SearchContainer>
  );
};

export default Search;
