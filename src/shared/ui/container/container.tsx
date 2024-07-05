import { memo } from 'react';

interface IContainerProps {
  children: React.ReactNode;
}

function Container({ children }: IContainerProps) {
  return <div className="max-w-[1024px] mx-auto">{children}</div>;
}

export default memo(Container);
