import { memo } from 'react';

interface IGridProps {
  children: React.ReactNode;
}

function Grid({ children }: IGridProps) {
  return <div className="grid grid-cols-2 gap-[30px] auto-rows-[200px] w-[100%]">{children}</div>;
}

export default memo(Grid);
