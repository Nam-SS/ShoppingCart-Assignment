import mockApiResponse from '../utils/MockResponse'
import { useState,useEffect } from 'react';
import ShoppingCard from './ShoppingCard';
export default function Body() {
    const [products, setProducts] = useState(mockApiResponse);
    // useEffect(()=>{
    //     setProducts(mockApiResponse)
    // },[products])
    return(<>
    {console.log("launch card:",products.map((product)=>{return product}))}
         {products.map((product)=>{<ShoppingCard key={product.id} details={product}/>})}
         </>
        )
}
