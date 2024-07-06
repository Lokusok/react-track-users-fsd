import { memo } from 'react';
import { PaginationItem } from '@/entities/pagination';

function Pagination() {
  return (
    <div className="flex gap-x-[10px]">
      <PaginationItem active order={1} onClick={() => console.log(1)} />
      <PaginationItem order={2} onClick={() => console.log(2)} />
      <PaginationItem order={3} onClick={() => console.log(3)} />
      <PaginationItem order={4} onClick={() => console.log(4)} />
      <PaginationItem order={5} onClick={() => console.log(5)} />
    </div>
  );
}

export default memo(Pagination);
