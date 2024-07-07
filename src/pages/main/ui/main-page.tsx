import style from './style.module.css';

import { memo, useEffect } from 'react';
import { batch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import {
  Pagination,
  paginationActions,
  selectCurrentPage,
  selectMaxPage,
} from '@/features/pagination';
import { SearchBy, selectSearchQuery } from '@/features/search';

import { fetchUsers, selectUsers, selectUsersWaiting, UserCard } from '@/entities/user';

import { Title, PageLayout } from '@/shared/ui/page-layout';
import { Container } from '@/shared/ui/container';
import { Grid } from '@/shared/ui/grid';
import { Skeleton } from '@/shared/ui/skeleton';
import { Button } from '@/shared/ui/button';
import { useAppDispatch } from '@/shared/lib/hooks';
import { NoUsersNotifier } from '@/shared/ui/no-users-notifier';

function MainPage() {
  const { page } = useParams();

  const dispatch = useAppDispatch();

  const users = useSelector(selectUsers);
  const currentPage = useSelector(selectCurrentPage);
  const maxPage = useSelector(selectMaxPage);
  const searchQuery = useSelector(selectSearchQuery);
  const isUsersWaiting = useSelector(selectUsersWaiting);

  const renders = {
    header: () => (
      <>
        <Title>Главная. Список всех пользователей</Title>
        <SearchBy />
      </>
    ),

    linkToUser: (user: IUser) => (
      <Button link to={`/user/${user.id}`}>
        Просмотреть
      </Button>
    ),
  };

  const options = {
    isPaginationVisible: !isUsersWaiting && maxPage !== 1,
  };

  useEffect(() => {
    const pageToSearch = page ?? currentPage;

    const asyncEffect = async () => {
      const thunkResult = await dispatch(
        fetchUsers({
          page: +pageToSearch,
          searchQuery,
        }),
      ).unwrap();

      batch(() => {
        dispatch(paginationActions.setMaxPage(+thunkResult.maxPage));
        dispatch(paginationActions.setPerPage(+thunkResult.perPage));
        dispatch(paginationActions.setCurrentPage(+thunkResult.page));
      });
    };

    asyncEffect();
  }, [page, dispatch, searchQuery, currentPage]);

  return (
    <PageLayout header={renders.header()}>
      <Container>
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={[page, searchQuery].join(',')}
            classNames={{
              enter: style['grid-wrapper-enter'],
              enterActive: style['grid-wrapper-enter-active'],
              exit: style['grid-wrapper-exit'],
              exitActive: style['grid-wrapper-exit-active'],
            }}
            timeout={300}
          >
            <>
              {!isUsersWaiting && users?.length > 0 ? (
                <div className="flex flex-col gap-y-[30px] items-center">
                  <Grid>
                    {users.length > 0 &&
                      users.map((user) => (
                        <UserCard key={user.id} actions={renders.linkToUser(user)} user={user} />
                      ))}
                  </Grid>

                  {options.isPaginationVisible && <Pagination />}
                </div>
              ) : (
                <>
                  {isUsersWaiting && (
                    <Grid>
                      {new Array(4).fill(null).map((_, index) => (
                        <Skeleton key={index} />
                      ))}
                    </Grid>
                  )}
                </>
              )}

              {!isUsersWaiting && users?.length === 0 && <NoUsersNotifier />}
            </>
          </CSSTransition>
        </SwitchTransition>
      </Container>
    </PageLayout>
  );
}

export default memo(MainPage);
