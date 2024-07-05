import { memo } from 'react';
import { NavLink } from 'react-router-dom';

interface IMyNavLinkProps {
  children: React.ReactNode;
  to: string;
}

function MyNavLink({ children, to }: IMyNavLinkProps) {
  const defaultClassName =
    'text-[24px] no-underline text-[#fff] hover:underline hover:opacity-[0.9]';
  const activeClassName = 'text-[24px] underline text-[#fff] opacity-[0.5]';

  const classNameChoice = ({ isActive }: { isActive: boolean }) => {
    return isActive ? activeClassName : defaultClassName;
  };

  return (
    <NavLink className={classNameChoice} to={to}>
      {children}
    </NavLink>
  );
}

export default memo(MyNavLink);
