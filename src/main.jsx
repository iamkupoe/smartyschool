import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';;
import Summary from './components/dashboard/Summary';
import Register from './components/dashboard/Register';
import Fees from './components/dashboard/Fees';
import Reports from './components/dashboard/Reports';
import Settings from './components/dashboard/Settings';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: 'dashboard',
    element: <Dashboard /> ,
    children: [
      {
        path: '',
        element: <Summary />,
      },
      {
        path: 'summary',
        element: <Summary />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'fees',
        element: <Fees />,
      },
      {
        path: 'reports',
        element: <Reports />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

