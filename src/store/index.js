import { configureStore } from '@reduxjs/toolkit';
import cartItemsCountreducer from './cartItemsCountSlice';
import cartTotalReducer from './cartTotalSlice';
const store = configureStore({
	reducer: {
		cartItemsCount: cartItemsCountreducer,
		cartTotal: cartTotalReducer,
	},
});

export default store;
