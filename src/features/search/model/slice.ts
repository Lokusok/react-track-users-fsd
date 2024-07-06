import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISearchState } from './types';

const initialState: ISearchState = {
  query: '',
};

const searchSlice = createSlice({
  name: 'searchSlice',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});

export const searchReducer = searchSlice.reducer;
export const searchActions = searchSlice.actions;
