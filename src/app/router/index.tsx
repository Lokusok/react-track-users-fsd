import { createBrowserRouter } from 'react-router-dom';

import Layout from '../layout';

import { CreatePage } from '@/pages/create';
import { MainPage } from '@/pages/main';

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
        path: '/create',
        element: <CreatePage />,
      },
    ],
  },
]);

export default router;
