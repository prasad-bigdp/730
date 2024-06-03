import React from 'react'
import logo from '../assets/logo.webp'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
		<div>
			<header className=' bg-black text-white-600 body-font'>
				<div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
					<Link to='/' className='flex title-font font-medium items-center text-white-900 mb-4 md:mb-0'>
						<img src={logo} alt="image" height="30" width="50"/>
						<span className='ml-3 text-xl text-white'>E-Mart</span>
					</Link>
					<nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
						<Link to='/' className='mr-5 text-white hover:text-white-900 hover:scale-105'>Home</Link>
						<Link to='/products' className='mr-5 text-white hover:scale-105  hover:text-white-900'>Products</Link>
						<Link to='/cart' className='mr-5 text-white hover:scale-105  hover:text-white-900'>Cart <span>0</span> </Link>
					</nav>
					<button className='inline-flex items-center bg-white-800 border-0 py-1 px-3 focus:outline-none hover:bg-green-700 rounded text-white hover:scale-105 mt-4 md:mt-0'>
						Login
					</button>
				</div>
			</header>
		</div>
	)
}

export default Header
