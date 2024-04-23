import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Summary from './components/dashboard/Summary';
import Register from './components/dashboard/Register';
import Fees from './components/dashboard/Fees';
import Reports from './components/dashboard/Reports';
import Settings from './components/dashboard/Settings';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './components/dashboard/Profile';
import StudentsList from './components/dashboard/register/StudentsList';
import RegistrationForm from './components/dashboard/register/RegistrationForm';
import PaymentList from './components/dashboard/fees/PaymentList';
import PaymentForm from './components/dashboard/fees/PaymentForm';
import FeedingPayment from './components/dashboard/fees/FeedingPayment';
import TutorDashboard from './pages/TutorDashboard';
import Account from './components/tutor_dashboard/account/Account';
import Attendance from './components/tutor_dashboard/attendance/Attendance';
import Performance from './components/tutor_dashboard/performance/Performance';
import AttendanceList from './components/tutor_dashboard/attendance/AttendanceList';
import MarkAttendance from './components/tutor_dashboard/attendance/MarkAttendance';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: 'dashboard',
    element: <Dashboard />,
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
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'register',
        element: <Register />,
        children: [
          {
            path: '',
            element: <StudentsList />,
          },
          {
            path: 'registrations',
            element: <StudentsList />,
          },
          {
            path: 'registration-form',
            element: <RegistrationForm />,
          },
        ],
      },
      {
        path: 'fees',
        element: <Fees />,
        children: [
          {
            path: '',
            element: <PaymentList />,
          },
          {
            path: 'payments',
            element: <PaymentList />,
          },
          {
            path: 'payment-form',
            element: <PaymentForm />,
          },
          {
            path: 'feeding-pay',
            element: <FeedingPayment />,
          },
        ],
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
  {
    path: 'tutor-dashboard',
    element: <TutorDashboard />,
    children: [
      {
        path: 'account',
        element: <Account />,
      },
      {
        path: 'attendance',
        element: <Attendance />,
        children: [
          {
            path: 'attendance-list',
            element: <AttendanceList />,
          },
          {
            path: 'mark-attendance',
            element: <MarkAttendance />,
          },
        ],
      },
      {
        path: 'performance',
        element: <Performance />,
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
