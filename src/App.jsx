
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Cart from './pages/Cart'
import Products from './pages/Products'
import Product from './components/Product'
import Layout from './Layout'
import Allproducts from './utils/Allproducts'
function App() {

	return (
		<Router>
			<Layout>
				<Routes>
					<Route
						path='/'
						Component={Home}></Route>
					<Route
						path='/Product/:id'
						Component={Product}></Route>
					<Route
						path='/Products/:categoryName'
						Component={Products}></Route>
					<Route
						path='/Cart'
						Component={Cart}></Route>
					<Route path='/products/all' Component={Allproducts} />	
					<Route path="/product/:id" Component={Product} />
				</Routes>
			</Layout>
		</Router>
	)
}

export default App
