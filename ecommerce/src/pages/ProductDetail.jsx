// src/components/ProductDetail.js
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchProducts } from "../redux/productSlice"
import { addItemToCart } from "../redux/cartSlice"

const ProductDetail = () => {
	const { productId } = useParams()
	const dispatch = useDispatch()
	const products = useSelector((state) =>
		state.products.products)
	const product= products.products.find(
			(product) => product.id === parseInt(productId),
		)
	const productStatus = useSelector((state) => state.products.status)

	useEffect(() => {
		if (productStatus === "idle") {
			dispatch(fetchProducts())
		}
	}, [productStatus, dispatch])

	const handleAddToCart = (product) => {
		dispatch(addItemToCart(product))
	}

	if (productStatus === "loading") {
		return <div>Loading...</div>
	}

	if (!product) {
		return <div>Product not found</div>
	}

	return (
		<section>
			<h2>{product.title}</h2>
			<p>{product.description}</p>
			<p>${product.price}</p>
			<img
				src={product.image}
				alt={product.title}
			/>
			<button onClick={() => handleAddToCart(product)}>Add to Cart</button>
		</section>
	)
}

export default ProductDetail
