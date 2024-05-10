// destructuring -- object or an array
const arr=[5,3]
const [x,y]=arr

const obj = {
    name: "xyz",
    age: 55,
}
// const { name } = obj

// rest and spread operators
//spread is about actual parameters, rest is about formal parameters
function sum (a,c,d,...b)
{
    let arr=[...b,5]
    return a + b;

}
sum(2, 3, 5, 8, 7);

// scope - lexical scoping -- scope of "this" operator-- current calling object
var na= "prasad"
let obj2 = {
    na: "shekhar",
    age: 25,    
}
const display= function(a,b)  {
	console.log(this)
	console.log(this.na,a,b)
}
display.call(obj2,3,5)
display.apply(obj2, [3, 5])
const z = display.bind(obj2, [3, 5])
z()
z()

class MyFun
{
  static  a = 20;
    fun ()
    {

    }
}
let obj3 = new MyFun()
console.log(obj3.a)




console.log(typeof(MyFun))




















































