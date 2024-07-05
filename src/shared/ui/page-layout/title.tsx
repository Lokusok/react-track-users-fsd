import { memo } from 'react';

interface ITitleProps {
  children: React.ReactNode;
}

function Title({ children }: ITitleProps) {
  return <h2 className="text-center">{children}</h2>;
}

export default memo(Title);
