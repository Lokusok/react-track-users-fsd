import { memo } from 'react';

interface IProfileProps {
  children: React.ReactNode;
  actions?: React.ReactNode;
}

function Profile({ children, actions }: IProfileProps) {
  return (
    <>
      <p className="text-[18px] text-center">{children}</p>

      {Boolean(actions) && <div className="mt-[30px]">{actions}</div>}
    </>
  );
}

export default memo(Profile);
