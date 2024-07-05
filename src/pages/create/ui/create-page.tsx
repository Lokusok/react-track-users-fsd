import { memo } from 'react';

import { Title, PageLayout } from '@/shared/page-layout';

function CreatePage() {
  const renders = {
    header: () => (
      <>
        <Title>Создать пользователя</Title>
      </>
    ),
  };

  return <PageLayout header={renders.header()}>Create user page</PageLayout>;
}

export default memo(CreatePage);
