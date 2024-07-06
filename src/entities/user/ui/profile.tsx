import { memo } from 'react';

interface IProfileProps {
  children: React.ReactNode;
  actions?: React.ReactNode;
}

function Profile({ children, actions }: IProfileProps) {
  return (
    <div>
      {children}

      {Boolean(actions) && (
        <div className="mt-[30px] flex gap-x-[15px] justify-center items-center">{actions}</div>
      )}
    </div>
  );
}

export default memo(Profile);
