import style from './style.module.css';

import { memo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import { PageLayout, Title } from '@/shared/ui/page-layout';
import { UserProfile } from '@/features/user-profile';

function UserPage() {
  const { id } = useParams();
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
              enterDone: style['title-transition-enter-done'],
              exit: style['title-transition-exit'],
              exitActive: style['title-transition-exit-active'],
              exitDone: style['title-transition-exit-done'],
            }}
            timeout={500}
          >
            <Title>
              {mode === 'view' ? (
                <>
                  Просмотр пользователя <u>{id}</u>
                </>
              ) : (
                <>
                  Редактирование пользователя <u>{id}</u>
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
