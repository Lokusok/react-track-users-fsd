import { createAsyncThunk } from '@reduxjs/toolkit';

import { httpUsersClient } from '@/shared/api/http-client';
import { IUserDto } from './types';

export const fetchUserById = createAsyncThunk(
  'usersSlice/fetchUserById',
  async (userId: IUser['id']) => {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    const user = await httpUsersClient.fetchUserById(userId);
    return user;
  },
);

export const updateUserById = createAsyncThunk(
  'usersSlice/updateUserById',
  async (data: IUserDto) => {
    const transformUser: IUser = {
      ...data.info,
      id: data.id,
    };
    const updatedUser = await httpUsersClient.updateUser(transformUser);

    return updatedUser;
  },
);
