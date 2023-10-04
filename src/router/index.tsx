import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import { Home } from '@/pages/Home';
import { ErrorPage } from '@/pages/Error';

const Router: React.FC = () => {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />,
      },
    ],
    { basename: import.meta.env.BASE_URL },
  );
  return <RouterProvider router={router} />;
};

export { Router };
