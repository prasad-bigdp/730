// const initialState = {
//     count: 0,
// }
// const counterReducer = (state=initialState,action) =>
// {
//     switch (action.type)
//     {
//         case "Incr": console.log(state.count + 1); return {count:state.count+1};
//         case "Decr": return { count: state.count - 1 }
//         default: return state;
//     }
// }
// export default counterReducer;

import { createSlice } from '@reduxjs/toolkit'
export const counterSlice = createSlice({
	name: "counter",
	initialState: { count: 0 },
	reducers: {
		incrr(state, action) {
			return { count: state.count + 1 }
		},
		Decrr(state, action) {
			return { count: state.count - 1 }
		},
	},
})
export const { incrr, Decrr } = counterSlice.actions
export default counterSlice.reducer