import { createBrowserRouter } from 'react-router-dom';

import Layout from '../layout';

import { CreatePage } from '@/pages/create';
import { MainPage } from '@/pages/main';
import { UserPage } from '@/pages/user';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: '/list/:page',
        element: <MainPage />,
      },
      {
        path: '/create',
        element: <CreatePage />,
      },
      {
        path: '/user/:id',
        element: <UserPage />,
      },
    ],
  },
]);

export default router;
