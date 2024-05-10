// document.getElementById('btn').addEventListener('click', function ()
// {
//     // alert(document.querySelector("#heading").innerText)
//     // document.querySelector("#heading").innerHTML = '<img src="" alt="image" />'
//     // let newColr = Math.round(Math.random() * 1000000)
//     // document.body.style.backgroundColor = "#" + newColr
    
//     /* implement dark n light modes */
//     document.body.classList.toggle('dark')
// })
// let type = document.getElementById("inp"); 
// let btnsh = document
// 	.getElementById("sh")
// btnsh.addEventListener("click", function ()
// {
//    if (type.type == "password") {
//            type.type = "text"
//             btnsh.textContent="hide"
// 		} else {
//            type.type = "password"
//             btnsh.textContent="show"
// 		}
// })
//  <div id="main"></div>
  
// const fruits = [
//     {
//         name: "orange",
//         price:50
//     },
//     {
//         name: "apple",
//         price:250
//     }
// ]

// fruits.forEach((f) =>
// {
//     const myDiv = document.createElement('div')//<div></div>
//     myDiv.classList.add('fruit')
//     const title = document.createElement('h1');
//     title.textContent = f.name;
//     const price = document.createElement('p');
//     price.textContent="$"+f.price
//     myDiv.append(title, price);
//     document.getElementById('main').appendChild(myDiv)
// })

//events - event propagation ---> how events propagate --
//bubbling -- child to parent
//capturing -- parent to child
document.getElementById('parent').addEventListener('click', function (e)
{
    alert(e.target.textContent+" clicked")
}, { capture: true })

//webAPI's
//Timers
//setTimeout -- trigeers only once and setInterval -- triggers every time

setTimeout(() => console.log("hello"), 1000)
console.log("hi")


//priority queue / task queue/ message queue -- event loop

// API's -- fakestore,nasa,isro,omdb,tmdb,weather -- firebase, supabase,razorpay,stripe,AI,chatgpt

// xhr ,fetch , axios
async function fetchData ()
{
    // fetch('https://www.fakestoreapi.com/products')
    // // promises- promise is an object which holds future occurrence of an asynchronous fn
    //     .then((res) => res.json())
    //     .then((data)=>console.log(data))
    // async- await
    
    const res = await fetch("https://www.fakestoreapi.com/products")
    const data = await res.json();
    console.log(data)



    


}
fetchData()




















































































