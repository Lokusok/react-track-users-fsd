import { createSlice } from '@reduxjs/toolkit';
import { IUsersState } from './types';

import { fetchUsers, createUser, deleteUser } from './thunks';

const initialState: IUsersState = {
  users: [],
  waiting: false,
  isCreating: false,
  isDeleting: false,
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

    builder
      .addCase(createUser.pending, (state) => {
        state.isCreating = true;
      })
      .addCase(createUser.fulfilled, (state) => {
        state.isCreating = false;
      })
      .addCase(createUser.rejected, (state) => {
        state.isDeleting = false;
      });

    builder
      .addCase(deleteUser.pending, (state) => {
        state.isDeleting = true;
      })
      .addCase(deleteUser.fulfilled, (state) => {
        state.isDeleting = false;
      })
      .addCase(deleteUser.rejected, (state) => {
        state.isDeleting = false;
      });
  },
});

export const usersReducer = usersSlice.reducer;
export const usersActions = usersSlice.actions;
