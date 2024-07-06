import { memo, useRef } from 'react';

import { Title, PageLayout } from '@/shared/ui/page-layout';
import { CreateUserForm } from '@/entities/user-form';

import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import { createUser, selectIsCreating } from '@/entities/user';

function CreatePage() {
  const dispatch = useAppDispatch();
  const isCreating = useAppSelector(selectIsCreating);
  const formRef = useRef<{ resetAllFields: () => void }>(null);

  const callbacks = {
    createUser: async (user: Omit<IUser, 'id'>) => {
      await dispatch(createUser(user)).unwrap();
      formRef.current?.resetAllFields();
    },
  };

  const renders = {
    header: () => (
      <>
        <Title>Создать пользователя</Title>
      </>
    ),
  };

  return (
    <PageLayout header={renders.header()}>
      <CreateUserForm ref={formRef} onSubmit={callbacks.createUser} disabled={isCreating} />
    </PageLayout>
  );
}

export default memo(CreatePage);
