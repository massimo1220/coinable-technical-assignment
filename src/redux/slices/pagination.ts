import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { PaginationProps } from 'redux/types/pagination';

const initialState: PaginationProps = {
	showCount: 12,
	currentPage: 1,
	totalPage: 1,
};

export const PaginationSlice = createSlice({
	name: 'pagination',
	initialState,
	reducers: {
		setCurrentPage: (state, action: PayloadAction<number>) => {
			state.currentPage = action.payload;
		},
		setTotalPage: (state, action: PayloadAction<number>) => {
			state.totalPage = action.payload;
		},
	},
});

export const { setCurrentPage, setTotalPage } = PaginationSlice.actions;

export default PaginationSlice.reducer;
