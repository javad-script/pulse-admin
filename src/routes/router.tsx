import { createBrowserRouter, type RouteObject } from 'react-router';
import AdminLayout from '../layouts/AdminLayout';
import { lazy } from 'react';

const Dashboard = lazy(() => import('../pages/Dashboard'));
const Products = lazy(() => import('../pages/Products'));

const routes: RouteObject[] = [
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'products', element: <Products /> },
      { path: 'products/:id/:slug', element: <Products /> },
      { path: 'orders', element: <Products /> },
      { path: 'users', element: <Products /> },
      { path: 'payments', element: <Products /> },
      { path: 'feedbacks', element: <Products /> },
      { path: 'settings', element: <Products /> },
      { path: 'help-center', element: <Products /> },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
