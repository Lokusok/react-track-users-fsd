declare type RootState = ReturnType<typeof import('../store').default.getState>;

declare interface IUser {
  id: string;
  name: string;
  descr: string;
}
