import style from './style.module.css';

import { memo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import { PageLayout, Title } from '@/shared/ui/page-layout';
import { UserProfile } from '@/features/user-profile';
import { fetchUserById, selectCurrentUserInfo, selectCurrentUserWaiting } from '@/entities/user';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';

function UserPage() {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const user = useAppSelector(selectCurrentUserInfo);
  const isUserWaiting = useAppSelector(selectCurrentUserWaiting);

  const [mode, setMode] = useState<'view' | 'edit'>('view');

  useEffect(() => {
    if (!id) return;
    dispatch(fetchUserById(id));
  }, [id, dispatch]);

  const renders = {
    header: () => (
      <>
        <SwitchTransition>
          <CSSTransition
            key={mode}
            classNames={{
              enter: style['title-transition-enter'],
              enterActive: style['title-transition-enter-active'],
              exit: style['title-transition-exit'],
              exitActive: style['title-transition-exit-active'],
            }}
            timeout={400}
          >
            <Title>
              {isUserWaiting ? (
                <>Загружаем профиль пользователя...</>
              ) : (
                !user && <>Пользователь не найден...</>
              )}

              {user && (
                <>
                  {mode === 'view' ? (
                    <>
                      Просмотр пользователя <u>{user.name}</u>
                    </>
                  ) : (
                    <>
                      Редактирование пользователя <u>{user.name}</u>
                    </>
                  )}
                </>
              )}
            </Title>
          </CSSTransition>
        </SwitchTransition>
      </>
    ),
  };

  return (
    <PageLayout header={renders.header()}>
      {user && <UserProfile mode={mode} setMode={setMode} user={user}></UserProfile>}
    </PageLayout>
  );
}

export default memo(UserPage);
