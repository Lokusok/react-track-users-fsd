import { configureStore } from '@reduxjs/toolkit';

import { searchReducer } from '@/features/search';
import { paginationReducer } from '@/features/pagination';
import { fetchUsers, usersReducer } from '@/entities/user';

const store = configureStore({
  reducer: {
    search: searchReducer,
    pagination: paginationReducer,
    users: usersReducer,
  },
});

// Prefetch
store.dispatch(fetchUsers({ page: 1, searchQuery: '' }));

export default store;
