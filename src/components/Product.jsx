import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
    const params=useParams();
    const[product,setProduct]=useState({});
    
    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/${params.id}`).then(res=>setProduct(res.data))
    },[])
  return (
    <div className='p-4'>
        {product.id && 
            <div className='grid grid-cols-2 gap-5'>
                <div className=""><img src={product.thumbnail} alt="product Image" title={product.title} /></div>
                <div>
                    <h1 className="text-2xl font-medium">{product.title}</h1>
                    <h2 className="text-xl ">{product.description}</h2>
                    <h1 className="text-3xl font-medium">${product.price}</h1>
                    <div className="mt-2"><button className='text-medium bg-yellow-400 py-1 px-2 rounded '>➕ Add to Cart</button> <button className='text-medium bg-yellow-400 py-1 px-2 rounded '>Buy Now</button></div>
                </div>
            </div>
        }
    </div>
  )
}

export default Product