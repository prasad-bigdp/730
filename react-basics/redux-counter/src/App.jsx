
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from './Redux/Actions'
import { Decrr, incrr } from './Redux/Reducers';
function App() {
  const dispatch = useDispatch();
  const count=useSelector((state)=>state.count)
  return (
		<>
			<p>{count}</p>
			<button onClick={()=>dispatch(incrr())}>+</button>
			<button onClick={()=>dispatch(Decrr())}>-</button>
		</>
	)
}

export default App
