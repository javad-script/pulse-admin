import { createBrowserRouter, type RouteObject } from 'react-router';
import AdminLayout from '../layouts/AdminLayout';
import { lazy } from 'react';

const Dashboard = lazy(() => import('../pages/Dashboard'));

const routes: RouteObject[] = [
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [{ index: true, element: <Dashboard /> }],
  },
];

const router = createBrowserRouter(routes);

export default router;
