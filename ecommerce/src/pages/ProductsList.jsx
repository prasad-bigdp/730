// src/components/ProductsList.js
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../redux/productSlice"
import { addItemToCart } from "../redux/cartSlice"
import { Link } from "react-router-dom"

const ProductsList = () => {
	const dispatch = useDispatch()
	const products = useSelector((state) => state.products.products)
	const productStatus = useSelector((state) => state.products.status)
	const error = useSelector((state) => state.products.error)

	useEffect(() => {
		if (productStatus === "idle") {
			dispatch(fetchProducts())
		}
	}, [productStatus, dispatch])

	const handleAddToCart = (product) => {
		dispatch(addItemToCart(product))
	}

	let content

	if (productStatus === "loading") {
		content = <div>Loading...</div>
	} else if (productStatus === "success") {
		content = products.products.map((product) => (
			<div key={product.id}>
				<h3>
					<Link to={`/products/${product.id}`}>{product.title}</Link>
				</h3>
				<p>{product.description}</p>
				<p>${product.price}</p>
				<button onClick={() => handleAddToCart(product)}>Add to Cart</button>
			</div>
		))
	} else if (productStatus === "failed") {
		content = <div>{error}</div>
	}

	return (
		<section>
			<h2>Products</h2>
			{content}
		</section>
	)
}

export default ProductsList
