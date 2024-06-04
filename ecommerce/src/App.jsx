
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Cart from './pages/Cart'

import Layout from './Layout'
import ProductDetail from './pages/ProductDetail'
import ProductsList from './pages/ProductsList'
function App() {

	return (
		<Router>
			<Layout>
				<Routes>
					<Route
						path='/'
						Component={Home}></Route>
					<Route
						path='/Product/:productId'
						Component={ProductDetail}></Route>
					<Route
						path='/Products'
						Component={ProductsList}></Route>
					<Route
						path='/Cart'
						Component={Cart}></Route>
				</Routes>
			</Layout>
		</Router>
	)
}

export default App
