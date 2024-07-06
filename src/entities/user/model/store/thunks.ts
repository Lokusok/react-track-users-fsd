import { createAsyncThunk } from '@reduxjs/toolkit';
import { ISearchByOptions, httpUsersClient } from '@/shared/api/http-client';

export const fetchUsers = createAsyncThunk(
  'usersSlice/fetchUsers',
  async (options: ISearchByOptions, thunkAPI) => {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    const users = await httpUsersClient.searchBy(options);
    if (users.page > 1 && users.data.length === 0) {
      thunkAPI.dispatch(
        fetchUsers({
          page: options.page ? options.page - 1 : 1,
          searchQuery: options.searchQuery,
        }),
      );

      return {
        ...users,
        page: users.page - 1,
      };
    }

    return users;
  },
);

export const createUser = createAsyncThunk(
  'usersSlice/createUser',
  async (user: Omit<IUser, 'id'>) => {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    const foundedUser = await httpUsersClient.createUser(user);
    return foundedUser;
  },
);

export const deleteUser = createAsyncThunk('usersSlice/deleteUser', async (userId: IUser['id']) => {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const deletedUser = await httpUsersClient.deleteUser(userId);
  return deletedUser;
});
