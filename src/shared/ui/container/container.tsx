import { memo } from 'react';
import clsx from 'clsx';

interface IContainerProps {
  children: React.ReactNode;
  className?: string;
}

function Container({ children, className }: IContainerProps) {
  const classNames = clsx('max-w-[1024px] mx-auto', className);
  return <div className={classNames}>{children}</div>;
}

export default memo(Container);
