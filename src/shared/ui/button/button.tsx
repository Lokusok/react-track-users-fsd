import React, { memo } from 'react';
import { Link } from 'react-router-dom';

interface CommonProps {
  children?: React.ReactNode;
  disabled?: boolean;
}

type ConditionalProps =
  | {
      link?: false;
      to?: never;
      onClick?: () => void;
    }
  | {
      link: true;
      to: string;
      onClick?: never;
    };

type TProps = CommonProps & ConditionalProps;

function Button({ link, children, to, onClick, disabled = false }: TProps) {
  const className =
    'bg-accent-color-1 py-[10px] px-[25px] text-white rounded-[4px] no-underline pointer border-none hover:opacity-70 active:opacity-40 cursor-pointer disabled:pointer-events-none disabled:opacity-50';

  if (link) {
    return (
      <Link className={className} to={to!}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      {children}
    </button>
  );
}

export default memo(Button);
