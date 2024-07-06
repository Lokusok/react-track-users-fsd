import { createSlice } from '@reduxjs/toolkit';
import { IUsersState } from './types';

const initialState: IUsersState = {
  users: [],
};

const usersSlice = createSlice({
  name: 'usersSlice',
  initialState,
  reducers: {},
});

export const usersReducer = usersSlice.reducer;
export const usersActions = usersSlice.actions;
