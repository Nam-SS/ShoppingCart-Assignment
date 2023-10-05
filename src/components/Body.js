import mockApiResponse from '../utils/MockResponse'
import { useState,useEffect } from 'react';
import ShoppingCard from './ShoppingCard';
import { Grid, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import {addToCart} from '../redux/cartSlice';

export default function Body() {
    const [products, setProducts] = useState(mockApiResponse);
    const dispatch = useDispatch()
    // useEffect(()=>{
    //     setProducts(mockApiResponse)
    // },[products])
    return(<>
    {/* {console.log("launch card:",products.map((product)=>{return product}))} */}
    <Box sx={{mx: 'auto', m: 7, p: 7 }}>
    <Grid container
                spacing={10}
                direction="row"
                justify="flex-start"
                alignItems="flex-start">
          {products.length && products.map((product)=>{return <ShoppingCard key={product.id} details={product} addToCart={addToCart}/>})}
        </Grid></Box></>
        )
}
