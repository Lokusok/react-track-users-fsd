export { default as UserCard } from './ui/card';
export { default as Profile } from './ui/profile';
export { default as ProfileDescr } from './ui/profile-descr';

export { usersReducer, usersActions } from './model/store/slice';
export { selectUsers, selectUsersCount } from './model/store/selectors';
