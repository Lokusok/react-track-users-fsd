import './router-animations.css';

import { memo } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import { Header } from '@/widgets/header';

function Layout() {
  const location = useLocation();
  const currentOutlet = useOutlet();

  return (
    <>
      <Header />
      <SwitchTransition>
        <CSSTransition key={location.pathname} timeout={300} classNames="page" unmountOnExit>
          {currentOutlet}
        </CSSTransition>
      </SwitchTransition>
    </>
  );
}

export default memo(Layout);
