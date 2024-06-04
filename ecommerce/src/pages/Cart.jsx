// src/components/Cart.js
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { removeItemFromCart } from "../redux/cartSlice"

const Cart = () => {
	const dispatch = useDispatch()
	const cartItems = useSelector((state) => state.cart.items)
	const totalAmount = useSelector((state) => state.cart.totalAmount)

	const handleRemoveFromCart = (id) => {
		dispatch(removeItemFromCart(id))
	}

	return (
		<section>
			<h2>Shopping Cart</h2>
			{cartItems.length === 0 ? (
				<p>Your cart is empty</p>
			) : (
				<div>
					{cartItems.map((item) => (
						<div key={item.id}>
							<h3>{item.title}</h3>
							<p>Quantity: {item.quantity}</p>
							<p>Total Price: ${item.totalPrice.toFixed(2)}</p>
							<button onClick={() => handleRemoveFromCart(item.id)}>
								Remove
							</button>
						</div>
					))}
					<h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
				</div>
			)}
		</section>
	)
}

export default Cart
