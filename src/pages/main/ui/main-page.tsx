import { memo } from 'react';

import { Search, Title, PageLayout } from '@/shared/page-layout';

function MainPage() {
  const renders = {
    header: () => (
      <>
        <Title>Главная. Список всех пользователей</Title>
        <Search />
      </>
    ),
  };

  return <PageLayout header={renders.header()}>12312312312312312312312</PageLayout>;
}

export default memo(MainPage);
