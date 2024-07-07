import React, { memo } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';

import store from '@/app/store';

interface IWrapperProps {
  children: React.ReactNode;
  initialEntries?: string[];
}

function Wrapper({ children, initialEntries }: IWrapperProps) {
  return (
    <StoreProvider store={store}>
      <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
    </StoreProvider>
  );
}

export default memo(Wrapper);
