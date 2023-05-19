import React from 'react'
import { Typography,Box ,styled, Table, TableBody, TableRow, TableCell} from '@mui/material'
import {LocalOffer as Badge} from '@mui/icons-material';

const SmallText=styled(Box)`
  
  font-size: 14px;
  vertical-align: baseline;
  & >P{
    font-size: 14px;
    margin-top: 10px;
  }
`;

const StyledBadge=styled(Badge)`
margin-right: 10px ;
color: #00CC00;
font-size: 15px;
`;
const ColumnText=styled(TableRow)`
  font-size: 14px;
  vertical-align: baseline;
  & >td {
    font-size: 14px;
    margin-top: 10px;
    border: none;
  }
`

const ProductDetail = ({product}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date=new Date(new Date().getTime()+(5*24*60*60*1000));
  return (
    <>
       <Typography>
            {product.title.longTitle}
          </Typography>
          <Typography style={{marginTop:5, color:'#878787',fontSize:14}}>
            8 Rating & 1 review
            <Box component='span'>
              <img src={fassured}
              style={{width:77,marginLeft:20}} alt="imdh" />
            </Box>
            </Typography>
           <Typography>
           <Box component='span' style={{fontSize:28}}>₹
              {product.price.cost}
            </Box>&nbsp;&nbsp;&nbsp;
            <Box component='span' style={{color:'#878787'}}>
              <strike>₹{product.price.mrp}</strike>
            </Box>&nbsp;&nbsp;&nbsp;
            <Box component='span' style={{color:"#388E3C"}}>
              {product.price.discount}
            </Box>
           </Typography>
           <Typography>Avaliable offers</Typography>
           <SmallText>
            <Typography><StyledBadge/> Get extra 20% off upto 50 on 1 item(s) T&c</Typography>
            <Typography> <StyledBadge/>Get extra 14% off(price inclusive of discount) T&c</Typography>
            <Typography> <StyledBadge/>sign up for Flipkart pay later and get Flipkart gift Card worth rs100 know more </Typography>
            <Typography><StyledBadge/> buy 2 items save 5% Buy 3 or more save 10% T&c</Typography>
            <Typography><StyledBadge/> 5% cashback on flipkart axis Bank Card </Typography>
            <Typography><StyledBadge/> No cost EMI on Credit card  </Typography>

           </SmallText>
           <Table>
            <TableBody>
              <ColumnText>
                <TableCell style={{color:'#878787'}}>
                    Delivery
                </TableCell>
                <TableCell style={{fontWeight:600}}>Delivery by {date.toDateString()}|₹40</TableCell>
              </ColumnText>

              <ColumnText>
                <TableCell style={{color:'#878787'}}>
            Warranty
                </TableCell>
                <TableCell>NO  Warranty</TableCell>
              </ColumnText>

              <ColumnText>
                <TableCell style={{color:'#878787'}}>
           Seller
                </TableCell>
                <TableCell>
                  <Box component='span' style={{color:"#2874f0"}}>
                    Super ComNet
                  </Box>
                  <Typography>GST invoice available</Typography>
                  <Typography>View more sellers starting from ₹{product.price.cost}</Typography>
                </TableCell>
              </ColumnText>
              <ColumnText>
                <TableCell colSpan={2}>
           <img src={adURL}style={{width:390}} alt="sup" />
                </TableCell>
               
              </ColumnText>
              <ColumnText>
                <TableCell style={{color:'#878787'}}>
            Description
                </TableCell>
                <TableCell>{product.description}</TableCell>
              </ColumnText>
            </TableBody>
           </Table>
         
    </>
  )
}

export default ProductDetail
