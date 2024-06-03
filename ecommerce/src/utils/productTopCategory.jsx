import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
const productTopCategory = ({ category, no_of_items }) =>
{
    const [topProducts, setTopProducts] = useState([])
    useEffect(() =>
    {
        axios
            .get(
                `https://dummyjson.com/products/category/${category}?limit=${no_of_items}`,
            )
            .then((res) => setTopProducts(res.data.products))
    }, [])
    return(<div>
			{topProducts &&
				topProducts.map((p) => (
					<div>
						<img
							src={p.thumbnail}
							alt={p.title}
						/>
						<Link to={`/product?pid=${p.id}`}>
							<h3>{p.title}</h3>
						</Link>
						<button></button>
					</div>
				))}
		</div>)
}

export default productTopCategory
