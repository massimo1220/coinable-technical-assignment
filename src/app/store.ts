import { configureStore } from '@reduxjs/toolkit';
import PaginationSlice from 'redux/slices/pagination';

export const store = configureStore({
	reducer: {
		pagination: PaginationSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
