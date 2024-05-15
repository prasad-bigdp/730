const mainDiv = document.getElementById('main');
import { cartUpdate } from "./index.js";
const fetchData = async () =>
{
    const url = new URLSearchParams(window.location.search);
    console.log(url.get('pid'))
    const res = await fetch(`https://fakestoreapi.com/products/${url.get("pid")}`)
    const data = await res.json();
    displayData(data)
}
fetchData();
const displayData = (data) =>
{
    console.log(data)
   const product = document.createElement("div")
		product.classList.add("product")
		const image = document.createElement("img")
		image.src = data.image
		image.alt = data.title
		const title = document.createElement("h2")
		title.textContent = data.title
		const anchor = document.createElement("a")
		anchor.href = `./product.html?pid=${data.id}`
		anchor.target = "_blank"
		anchor.appendChild(title)
		const price = document.createElement("p")
		price.textContent = "$" + data.price
		const addCart = document.createElement("button")
		addCart.addEventListener("click", () => cartUpdate(data))
		addCart.textContent = "add to cart"
		product.append(image, anchor, price, addCart)
		mainDiv.appendChild(product) 
}