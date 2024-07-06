import { createSelector } from '@reduxjs/toolkit';

export const selectUsers = (state: RootState) => state.users.users;
export const selectUsersCount = createSelector(selectUsers, (users) => users.length);
