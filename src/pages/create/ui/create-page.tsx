import { memo } from 'react';

import { Title, PageLayout } from '@/shared/ui/page-layout';
import { CreateUserForm } from '@/features/create-user-form';

function CreatePage() {
  const renders = {
    header: () => (
      <>
        <Title>Создать пользователя</Title>
      </>
    ),
  };

  return (
    <PageLayout header={renders.header()}>
      <CreateUserForm />
    </PageLayout>
  );
}

export default memo(CreatePage);
