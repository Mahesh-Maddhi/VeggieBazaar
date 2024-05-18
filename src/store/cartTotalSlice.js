import { createSlice } from '@reduxjs/toolkit';

export const cartTotalSlice = createSlice({
	name: 'cartTotal',
	initialState: {
		total: 0,
	},
	reducers: {
		setCartTotal: (state, action) => {
			state.total = action.payload;
		},
	},
});
export const { setCartTotal } = cartTotalSlice.actions;

export default cartTotalSlice.reducer;
