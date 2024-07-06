import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPaginationState } from './types';

const initialState: IPaginationState = {
  currentPage: 1,
  maxPage: null,
  perPage: null,
};

const paginationSlice = createSlice({
  name: 'paginationSlice',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<IPaginationState['currentPage']>) => {
      state.currentPage = action.payload;
    },
    setMaxPage: (state, action: PayloadAction<IPaginationState['maxPage']>) => {
      state.maxPage = action.payload;
    },
    setPerPage: (state, action: PayloadAction<IPaginationState['perPage']>) => {
      state.perPage = action.payload;
    },
  },
});

export const paginationReducer = paginationSlice.reducer;
export const paginationActions = paginationSlice.actions;
