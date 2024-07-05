import { memo } from 'react';
import NavLink from './nav-link';

import { Container } from '@/shared/ui/container';

function Header() {
  return (
    <header className="bg-accent-color-1 py-7.5 text-white">
      <Container>
        <nav>
          <ul className="list-none flex justify-center gap-x-[30px]">
            <li>
              <NavLink to="/">Главная</NavLink>
            </li>
            <li>
              <NavLink to="/create">Создать</NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default memo(Header);
