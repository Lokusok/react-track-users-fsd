import { memo } from 'react';
import { RouterProvider } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';

import router from './router';
import store from './store';

function App() {
  return (
    <>
      <StoreProvider store={store}>
        <RouterProvider router={router} />
      </StoreProvider>
    </>
  );
}

export default memo(App);
