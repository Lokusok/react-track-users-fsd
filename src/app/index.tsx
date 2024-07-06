import { memo, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';

import router from './router';
import store from './store';

import axios from 'axios';

function App() {
  useEffect(() => {
    axios.get('/api/posts').then((response) => {
      console.log('Response data:', response.data);
    });
  }, []);

  return (
    <>
      <StoreProvider store={store}>
        <RouterProvider router={router} />
      </StoreProvider>
    </>
  );
}

export default memo(App);
