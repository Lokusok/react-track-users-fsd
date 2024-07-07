import { memo } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

interface IPaginationItemProps {
  order: string | number;
  onClick: () => void;
  active?: boolean;
  asLink?: boolean;
}

function PaginationItem({ order, onClick, active, asLink = false }: IPaginationItemProps) {
  const className = clsx(
    'no-underline appearance-none border-none w-[30px] h-[30px] flex justify-center items-center text-[#fff] rounded-[6px] pointer bg-accent-color-2 cursor-pointer hover:opacity-70 active:opacity-50 [transition:opacity_ease_0.2s,shadow_ease_0.2s]',
    {
      ['bg-accent-color-2-with-opacity pointer-events-none']: active,
    },
  );

  if (asLink) {
    return (
      <Link data-testid="pagination-link" to={`/list/${order}`} className={className}>
        {order}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {order}
    </button>
  );
}

export default memo(PaginationItem);
