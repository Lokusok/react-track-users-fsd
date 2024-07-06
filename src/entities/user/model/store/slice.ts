import { createSlice } from '@reduxjs/toolkit';
import { IUsersState } from './types';

import { fetchUsers } from './thunks';

const initialState: IUsersState = {
  users: [],
  waiting: false,
};

const usersSlice = createSlice({
  name: 'usersSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.waiting = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        console.log('fetchUsers.fulfilled:', action.payload);
        state.users = action.payload.data;
        state.waiting = false;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.waiting = false;
      });
  },
});

export const usersReducer = usersSlice.reducer;
export const usersActions = usersSlice.actions;
