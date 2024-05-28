// import { createStore } from 'redux'
// import counterReducer from './Reducers';
// const store = createStore(counterReducer);
// export default store;
import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './Reducers'
export default store= configureStore({
	reducer: {
		counter:counterSlice
	},
})