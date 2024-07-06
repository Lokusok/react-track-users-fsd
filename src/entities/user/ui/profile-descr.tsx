import { memo } from 'react';

interface IProfileDescrProps {
  children: React.ReactNode;
}

function ProfileDescr({ children }: IProfileDescrProps) {
  return <p className="text-[18px] text-center">{children}</p>;
}

export default memo(ProfileDescr);
