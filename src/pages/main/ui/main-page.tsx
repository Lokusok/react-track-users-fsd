import { memo } from 'react';

import { Search, Title, PageLayout } from '@/shared/ui/page-layout';
import { Container } from '@/shared/ui/container';
import { Grid } from '@/shared/ui/grid';
import { Skeleton } from '@/shared/ui/skeleton';
import { UserCard } from '@/entities/user';
import { Button } from '@/shared/ui/button';
import { Pagination } from '@/features/pagination';

function MainPage() {
  const renders = {
    header: () => (
      <>
        <Title>Главная. Список всех пользователей</Title>
        <Search />
      </>
    ),

    linkToUser: () => (
      <Button link to={'/user/fsdfsd'}>
        Просмотреть
      </Button>
    ),
  };

  return (
    <PageLayout header={renders.header()}>
      <Container className="flex flex-col gap-y-[30px] items-center">
        <Grid>
          {/* <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton /> */}
          <UserCard actions={renders.linkToUser()} />
          <UserCard actions={renders.linkToUser()} />
          <UserCard actions={renders.linkToUser()} />
          <UserCard actions={renders.linkToUser()} />
        </Grid>

        <Pagination />
      </Container>
    </PageLayout>
  );
}

export default memo(MainPage);
