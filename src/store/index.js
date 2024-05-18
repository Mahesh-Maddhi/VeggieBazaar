import { configureStore } from '@reduxjs/toolkit';
import cartItemsCountreducer from './cartItemsCountSlice';
const store = configureStore({
	reducer: {
		cartItemsCount: cartItemsCountreducer,
	},
});

export default store;
