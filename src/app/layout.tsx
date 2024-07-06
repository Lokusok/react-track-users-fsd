import './router-animations.css';

import { memo } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';

function Layout() {
  const location = useLocation();
  const currentOutlet = useOutlet();

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="grow">
          <SwitchTransition>
            <CSSTransition key={location.pathname} timeout={300} classNames="page" unmountOnExit>
              {currentOutlet}
            </CSSTransition>
          </SwitchTransition>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default memo(Layout);
