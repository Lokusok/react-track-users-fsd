import { createSlice } from '@reduxjs/toolkit';

import { ICurrentUserState } from './types';
import { fetchUserById, updateUserById } from './thunks';

const initialState: ICurrentUserState = {
  info: null,
  waiting: false,
  isUpdating: false,
};

const currentUserSlice = createSlice({
  name: 'currentUserSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.pending, (state) => {
        state.waiting = true;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.info = action.payload;
        state.waiting = false;
      })
      .addCase(fetchUserById.rejected, (state) => {
        state.waiting = false;
      });

    builder
      .addCase(updateUserById.pending, (state) => {
        state.isUpdating = true;
      })
      .addCase(updateUserById.fulfilled, (state, action) => {
        state.info = action.payload;
        state.isUpdating = false;
      })
      .addCase(updateUserById.rejected, (state) => {
        state.isUpdating = false;
      });
  },
});

export const currentUserReducer = currentUserSlice.reducer;
export const currentUserActions = currentUserSlice.actions;
