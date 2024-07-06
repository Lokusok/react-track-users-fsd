import { createAsyncThunk } from '@reduxjs/toolkit';
import { ISearchByOptions, httpUsersClient } from '@/shared/api/http-client';

export const fetchUsers = createAsyncThunk(
  'usersSlice/fetchUsers',
  async (options: ISearchByOptions) => {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await httpUsersClient.searchBy(options);

    return response;
  },
);
