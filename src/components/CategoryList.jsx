import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const CategoryList = () => {
    const[categories,setCategories]=useState([]);

    useEffect(()=>{
        axios.get('https://dummyjson.com/products/category-list').then(res=>{
          setCategories(res.data);
        })
    },[])
    return (
      <div>
        <div id="categoryList" className="p-4 whitespace-nowrap overflow-y-scroll" >
          {
            categories && categories.map(category=>
              <Link 
              to={`/products/${category}`} 
              key={category}
              className="border rounded-lg py-1 px-2 bg-slate-100 font-medium mx-2"
              >{category}</Link>
            )
          }
        </div>
        
      </div>
    
    )
}

export default CategoryList