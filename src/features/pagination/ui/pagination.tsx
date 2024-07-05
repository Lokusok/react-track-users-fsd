import { memo } from 'react';
import { PaginationItem } from '@/entities/pagination';

function Pagination() {
  return (
    <div>
      <PaginationItem />
    </div>
  );
}

export default memo(Pagination);
