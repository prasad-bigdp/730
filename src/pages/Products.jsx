import React from 'react'
import ProductTopCategory from '../utils/productTopCategory'
import { useParams } from 'react-router-dom'
import CategoryList from '../components/CategoryList';

const Products = () => {
  const params =useParams();

  return (
    <>
    <div>
      <CategoryList/>
      <h1 className="text-xl py-2">products/{params.categoryName}</h1>
      <ProductTopCategory  category={params.categoryName}/>
    </div>
    </>
  )
}

export default Products
