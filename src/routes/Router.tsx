import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { MainPage } from '../components';
import { Orders } from '../features/orders';
import { Customers } from '../features/customers';
import { Products } from '../features/products';
import { Users } from '../features/users';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    children: [
      {
        path: '/customers',
        element: <Customers />,
      },
      {
        path: '/orders',
        element: <Orders />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/users',
        element: <Users />,
      },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
