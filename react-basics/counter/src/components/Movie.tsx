interface Product {
	id: number
	title: string
	price: number
	description: string
	category: string
	image: string
	rating: {
		rate: number
		count: number
	}
}
const Movie = ({ product}: Product ) => {
	return (
		<div>
			<img
				src={ product.image }
				alt='image'
			/>
			<h2>{product.title}</h2>
		</div>
	)
}

export default Movie
