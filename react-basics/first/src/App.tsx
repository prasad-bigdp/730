
import './App.css'

function App() {
  let x:number | string = 25;
  x = "raj";
  let y: string = "vbc";
  let z: boolean = true;
  let p: undefined = undefined;
  let q: null = null;
  let num: (number | string)[] = [ 2, 5, "t" ];
  let num1: [ number, string, number ] = [ 2, "j", 88 ]
  let num3: any = 2;
  interface O{
    name: string,
    age:number
  }
  let obj: O = {
    name: 25,
    age: 55
  }
  return (
    <>
      { console.log(typeof (x), x) }
      { console.log(typeof(num1))}
     
    </>
  )
}

export default App
