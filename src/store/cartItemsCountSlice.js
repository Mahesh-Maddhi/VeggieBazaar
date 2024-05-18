import { createSlice } from '@reduxjs/toolkit';

const cartItemsCountSlice = createSlice({
	name: 'cartItemsCount',
	initialState: {
		Itemscount: 1,
	},
	reducers: {
		setItemsCount: (state, action) => {
			state.Itemscount = action.payload;
		},
	},
});
export const { setItemsCount } = cartItemsCountSlice.actions;

export default cartItemsCountSlice.reducer;
