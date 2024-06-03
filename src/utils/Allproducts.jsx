import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CategoryList from '../components/CategoryList';

const Allproducts = () => {
    const[products,setProducts]=useState([]);

    useEffect(()=>{
        axios.get('https://dummyjson.com/products').then(res=>setProducts(res.data.products))
    },[])
    return(

    <div className="container">
     <CategoryList/>
     <h1 className="text-xl py-2">products/All</h1>   
    <div className="grid grid-cols-4 gap-4 p-3">
    {products &&
        products.map((p) => (
            <div key={p.id} className="border-2 rounded-lg ">
                <div className="flex justify-center overflow-hidden">
                    <img
                    className="hover:scale-105 duration-200"
                    src={p.thumbnail}
                    alt={p.title}
                    />
                </div>
                <div className="p-4 bg-slate-100">
                <Link to={`/product/${p.id}`}>
                    <h3 className="text-xl font-medium">{p.title}</h3>
                    <h4 className='text-lg truncate'>{p.description}</h4>
                    <h2 className="text-2xl font-medium">${p.price}</h2>
                </Link>
                <button className='text-medium bg-yellow-400 py-1 px-2 rounded '>➕Add to Cart</button>
                </div>
            </div>
        ))}
    </div>
    </div>)
}

export default Allproducts