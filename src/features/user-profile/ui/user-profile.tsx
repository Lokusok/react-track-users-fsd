import style from './style.module.css';

import { memo } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import {
  deleteUser,
  Profile,
  ProfileDescr,
  selectCurrentUserIsUpdating,
  selectIsDeleting,
  updateUserById,
} from '@/entities/user';
import { UpdateUserForm } from '@/entities/user-form';

import { Button } from '@/shared/ui/button';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import { useNavigate } from 'react-router-dom';

interface IUserProfileProps {
  mode: 'view' | 'edit';
  setMode: (data: IUserProfileProps['mode']) => void;
  user: IUser;
}

function UserProfile({ mode, setMode, user }: IUserProfileProps) {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const isDeleting = useAppSelector(selectIsDeleting);
  const isUpdating = useAppSelector(selectCurrentUserIsUpdating);

  const callbacks = {
    toggleMode: () => {
      setMode(mode === 'view' ? 'edit' : 'view');
    },
    deleteUser: async () => {
      await dispatch(deleteUser(user.id)).unwrap();
      navigate('/', { state: { fetchUsers: true } });
    },
    updateUser: async (data: Omit<IUser, 'id'>) => {
      await dispatch(
        updateUserById({
          id: user.id,
          info: data,
        }),
      );
      callbacks.toggleMode();
    },
  };

  const renders = {
    actionsView: () => (
      <>
        <Button data-testid="go-delete-button" disabled={isDeleting} onClick={callbacks.deleteUser}>
          Удалить
        </Button>
        <Button data-testid="go-edit-button" disabled={isDeleting} onClick={callbacks.toggleMode}>
          Изменить
        </Button>
      </>
    ),
    actionsEdit: () => <Button onClick={callbacks.toggleMode}>К просмотру</Button>,
  };

  return (
    <SwitchTransition>
      <CSSTransition
        key={mode}
        classNames={{
          enter: style['profile-inner-enter'],
          enterActive: style['profile-inner-enter-active'],
          exit: style['profile-inner-exit'],
          exitActive: style['profile-inner-exit-active'],
        }}
        timeout={400}
      >
        {mode === 'view' ? (
          <Profile actions={renders.actionsView()}>
            <ProfileDescr>{user.descr}</ProfileDescr>
          </Profile>
        ) : (
          <Profile actions={renders.actionsEdit()}>
            <UpdateUserForm onSubmit={callbacks.updateUser} user={user} disabled={isUpdating} />
          </Profile>
        )}
      </CSSTransition>
    </SwitchTransition>
  );
}

export default memo(UserProfile);
