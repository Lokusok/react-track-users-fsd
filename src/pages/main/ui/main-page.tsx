import { memo } from 'react';

import { Search, Title, PageLayout } from '@/shared/ui/page-layout';
import { Container } from '@/shared/ui/container';
import { Grid } from '@/shared/ui/grid';
import Skeleton from '@/shared/ui/skeleton/skeleton';

function MainPage() {
  const renders = {
    header: () => (
      <>
        <Title>Главная. Список всех пользователей</Title>
        <Search />
      </>
    ),
  };

  return (
    <PageLayout header={renders.header()}>
      <Container>
        <Grid>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </Grid>
      </Container>
    </PageLayout>
  );
}

export default memo(MainPage);
