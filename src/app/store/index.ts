import { configureStore } from '@reduxjs/toolkit';

import { searchReducer } from '@/features/search';
import { paginationReducer } from '@/features/pagination';
import { usersReducer } from '@/entities/user';

const store = configureStore({
  reducer: {
    search: searchReducer,
    pagination: paginationReducer,
    users: usersReducer,
  },
});

export default store;
