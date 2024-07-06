export interface ICurrentUserState {
  info: IUser | null;
  waiting: boolean;
  isUpdating: boolean;
}

export interface IUserDto {
  id: IUser['id'];
  info: Omit<IUser, 'id'>;
}
