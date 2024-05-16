const checkout = document.getElementById("checkout-details")
const cart = JSON.parse(localStorage.getItem("cart"))
const displayData=() =>
{
    checkout.textContent=""
   cart.forEach((p, i) => {
			const item = document.createElement("div")
			item.classList.add("item")
			const image = document.createElement("img")
			image.src = p.image
			image.alt = p.title
			const title = document.createElement("h1")
			title.textContent = p.title
			const price = document.createElement("p")
			price.textContent = "$" + p.price
			const deleteButton = document.createElement("button")
			deleteButton.textContent = "❎"
			deleteButton.addEventListener("click", () => deleteLogic(i))
			item.append(image, title, price, deleteButton)
			checkout.appendChild(item)
		}) 
}
displayData()
const total = document.getElementById('total')
function calculate ()
{
    let result = cart.reduce((c, p) => c + p.price, 0)
    total.textContent ="Total: $"+ result;
}
calculate()
function deleteLogic (i)
{
    console.log(cart)
    cart.splice(i, 1);
   localStorage.setItem('cart',JSON.stringify(cart))
    displayData();
    console.log(cart)
    calculate();
}