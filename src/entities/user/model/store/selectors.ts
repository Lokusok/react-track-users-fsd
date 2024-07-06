import { createSelector } from '@reduxjs/toolkit';

export const selectUsers = (state: RootState) => state.users.users;
export const selectUsersWaiting = (state: RootState) => state.users.waiting;
export const selectIsCreating = (state: RootState) => state.users.isCreating;
export const selectIsDeleting = (state: RootState) => state.users.isDeleting;

export const selectUsersCount = createSelector(selectUsers, (users) => users.length);
export const selectUserById = createSelector(
  selectUsers,
  (_, id) => id,
  (users: IUser[], id: unknown) => {
    console.log('SELECT USER BY ID', id, users);
    return users.find((user) => user.id === id);
  },
);
