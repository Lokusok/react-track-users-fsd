import React, { memo } from 'react';
import { PaginationItem } from '@/entities/pagination';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';

import { paginationActions } from '../model/store/slice';
import { selectCurrentPage, selectMaxPage } from '../model/store/selectors';

function Pagination() {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(selectCurrentPage);
  const maxPage = useAppSelector(selectMaxPage);

  const callbacks = {
    onClickPaginationItem: (page: number) => {
      dispatch(paginationActions.setCurrentPage(page));
    },
  };

  const renders = {
    renderItem: (page: number) => {
      return (
        <PaginationItem
          asLink
          active={currentPage == page}
          order={page}
          onClick={() => callbacks.onClickPaginationItem(page)}
        />
      );
    },
  };

  return (
    <div className="flex gap-x-[10px]">
      {new Array(maxPage).fill(null).map((_, index) => (
        <React.Fragment key={index}>{renders.renderItem(index + 1)}</React.Fragment>
      ))}
    </div>
  );
}

export default memo(Pagination);
