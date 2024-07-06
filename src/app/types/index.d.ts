declare type RootState = ReturnType<typeof import('../store').default.getState>;
declare type AppDispatch = typeof import('../store').default.dispatch;

declare interface IUser {
  id: string;
  name: string;
  descr: string;
}
