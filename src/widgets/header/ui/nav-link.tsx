import { memo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

interface IMyNavLinkProps {
  children: React.ReactNode;
  to: string;
  pathChoices?: string[];
}

function MyNavLink({ children, to, pathChoices = [] }: IMyNavLinkProps) {
  const location = useLocation();

  const defaultClassName =
    'text-[24px] no-underline text-[#fff] hover:underline hover:opacity-[0.9]';
  const activeClassName = 'text-[24px] underline text-[#fff] opacity-[0.5]';

  const classNameChoice = ({ isActive }: { isActive: boolean }) => {
    const isCorrectActive =
      isActive || pathChoices.some((path) => location.pathname.startsWith(path));
    return isCorrectActive ? activeClassName : defaultClassName;
  };

  return (
    <NavLink className={classNameChoice} to={to}>
      {children}
    </NavLink>
  );
}

export default memo(MyNavLink);
