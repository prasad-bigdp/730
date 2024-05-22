interface MovieDetails{
  title?: string,
  im:string
}
const Movie = ({ title, im }: MovieDetails) => {
	return (
		<div>
			<img
				src={im}
				alt='image'
			/>
			<h2>{title}</h2>
		</div>
	)
}

export default Movie
