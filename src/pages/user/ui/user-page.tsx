import style from './style.module.css';

import { memo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import { PageLayout, Title } from '@/shared/ui/page-layout';
import { UserProfile } from '@/features/user-profile';
import { useSelector } from 'react-redux';
import { selectUserById } from '@/entities/user';

function UserPage() {
  const { id } = useParams();

  const user = useSelector((state) => selectUserById(state, id))!;
  const [mode, setMode] = useState<'view' | 'edit'>('view');

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
              {mode === 'view' ? (
                <>
                  Просмотр пользователя <u>{user.name}</u>
                </>
              ) : (
                <>
                  Редактирование пользователя <u>{user.name}</u>
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
      <UserProfile mode={mode} setMode={setMode}></UserProfile>
    </PageLayout>
  );
}

export default memo(UserPage);
