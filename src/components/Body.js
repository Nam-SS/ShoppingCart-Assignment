import mockApiResponse from '../utils/MockResponse'
import { useState,useEffect } from 'react';
import ShoppingCard from './ShoppingCard';
import { Grid, Box } from '@mui/material';

export default function Body() {
    const [products, setProducts] = useState(mockApiResponse);
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
          {products.length && products.map((product)=>{return <ShoppingCard key={product.id} details={product}/>})}
        </Grid></Box></>
        )
}
