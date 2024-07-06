import style from './style.module.css';

import { memo } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import { Profile, ProfileDescr } from '@/entities/user';
import { Button } from '@/shared/ui/button';
import { UpdateUserForm } from '@/entities/user-form';

interface IUserProfileProps {
  mode: 'view' | 'edit';
  setMode: (data: IUserProfileProps['mode']) => void;
}

function UserProfile({ mode, setMode }: IUserProfileProps) {
  const callbacks = {
    toggleMode: () => {
      setMode(mode === 'view' ? 'edit' : 'view');
    },
  };

  const renders = {
    actionsView: () => (
      <>
        <Button>Удалить</Button>
        <Button onClick={callbacks.toggleMode}>Изменить</Button>
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
          enterDone: style['profile-inner-enter-done'],
          exit: style['profile-inner-exit'],
          exitActive: style['profile-inner-exit-active'],
          exitDone: style['profile-inner-exit-done'],
        }}
        timeout={500}
      >
        {mode === 'view' ? (
          <Profile actions={renders.actionsView()}>
            <ProfileDescr>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, adipisci.
            </ProfileDescr>
          </Profile>
        ) : (
          <Profile actions={renders.actionsEdit()}>
            <UpdateUserForm />
          </Profile>
        )}
      </CSSTransition>
    </SwitchTransition>
  );
}

export default memo(UserProfile);
