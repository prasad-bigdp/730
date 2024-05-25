import React, { useEffect, useState } from 'react'
import Movie from './Movie'



const Movies = () => {
	let [ x, fun ] = useState<number>(0);
	const [data,setData]= useState<object[]>([])
	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch("https://fakestoreapi.com/products")
			const data = await res.json();
			console.log(data)
            setData(data)
		}
		fetchData();
	},[])
	
  return (
		<div style={{ display: "flex", gap: "10px", overflowX: "scroll" }}>
			<p>{x}</p>
			<button
				onClick={() => {
					fun(x + 1)
					fun(x + 1)
					console.log("hi", x)
				}}>
				click me
			</button>
			{data.map((m, i) => (
				<>
					<Movie key={i} product={m} />
				</>
			))}
		</div>
	)
}

export default Movies
