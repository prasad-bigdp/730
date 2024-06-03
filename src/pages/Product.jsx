import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
    const params=useParams();
    console.log(params.pid)
    useEffect(()=>{
    },[])
  return (
    <>
    {params.pid}
    </>
  )
}

export default Product