const mainDiv = document.getElementById('products')
let cart = [];
let count = 0;
const fetchData = async () =>
{
    try
    {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        console.log("hi")
            displayData(data)

    }
    catch(err)
    {
        console.log(err)
    }
}
fetchData();
const displayData = (data) =>
{
    data.forEach((p) =>
    {
        const product = document.createElement('div');
        product.classList.add('product')
        const image = document.createElement('img');
        image.src = p.image;
        image.alt = p.title;
        const title = document.createElement('h2')
        title.textContent = p.title;
        const anchor = document.createElement('a');
        anchor.href = `./product.html?pid=${p.id}`
        anchor.target = "_blank"
        anchor.appendChild(title)
        const price = document.createElement('p');
        price.textContent="$"+p.price
        const addCart = document.createElement('button');
        addCart.addEventListener('click', () => cartUpdate(p))
        addCart.textContent="add to cart"
        product.append(image, anchor, price, addCart)
        mainDiv.appendChild(product)
    })  
}
export const cartUpdate = (p) =>
{
    console.log(p)
    count++;
    document.getElementById('count').textContent = count;
    cart.push(p);
    alert("cart is "+count)
    localStorage.setItem('cart', cart);
    localStorage.setItem('count',count)
}




