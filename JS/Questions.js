// console.log(a);
// console.log(b);
// var a = 20;
// let b = 30;

// for (let i = 0; i < 3; i++)
// {
//     setTimeout(()=>console.log(i),1)
//     }

/* difference between var,let,const, global,local scope works, hoisting*/

/* data types --> primitve vs non-primitive */

// let str = "raj";
// let str1 = "raj"
// console.log(str==str1)
// str = "prasad";
// str1 = "prasad";
// console.log(str == str1)
// console.log(str.toUpperCase())
// console.log(str)
// let arr = [2, 3, 5]
// let arr1 = [2, 3, 5];
// let arr2 = arr;
// console.log(arr);
// '' and "" and ``, 
let a = 50;
console.log(` The value of a is ${a}`);
let str="shekhar"
console.log(5 + +'4')
// prasad ---> dasard
let str1 = "prasad"
console.log(str1.split('').reverse().join(''))
// This is JS Basics class --> reverse every word but in same order
let str3 = "This is JS Basics class"
let arr = str3.split(' ')
console.log(arr);
let arr2 = arr.map((a) => a.split('').reverse().join(''));
console.log(arr2)
let str4 = arr2.join(' ');
console.log(str4)
console.log(arr.splice(2,1,2,5,true))
console.log(arr)
for (let x in arr)
{
    console.log(arr[x])
}
// map, filter, reduce
let arr3 = [2, 5, 7, 8];
console.log(arr3.reduce((a,s)=>a+s,0))
// functions
function something ()
{
    console.log("something");
}
console.log(something)

    // can a function call itself? - IIFE
    // (function ()
    // {
    //     var y = 20;
// })()
// what is callback function
//callback function is fn which accepted as parameter to another fn
    
function mad ()
{
    console.log("mad")
}
function bad ()
{
    console.log("bad");
}
function x (a,b)
{
    a();
    b();
}
x(mad, bad);

//closure - inner fn remembers outer fn values

function y ()
{
    var a = 20;
    function z ()
    {
        a++;
        console.log(a)
    }
    return z;
}
let newFun = y();
console.log(newFun)
newFun()
newFun()
newFun()





















































    
    
    
    
    
    
    
    
    















































