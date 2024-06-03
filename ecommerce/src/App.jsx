
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Cart from './pages/Cart'
import Products from './pages/Products'
import Product from './pages/Product'
import Layout from './Layout'
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
						path='/Products'
						Component={Products}></Route>
					<Route
						path='/Cart'
						Component={Cart}></Route>
				</Routes>
			</Layout>
		</Router>
	)
}

export default App
