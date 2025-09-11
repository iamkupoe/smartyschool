import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Summary from "./components/dashboard/Summary";
import Register from "./components/dashboard/register/Register";
import Fees from "./components/dashboard/fees/Fees";
import Reports from "./components/dashboard/reports/Reports";
import Settings from "./components/dashboard/Settings";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./components/dashboard/profile/Profile";
import StudentsList from "./components/dashboard/register/StudentsList";
import RegistrationForm from "./components/dashboard/register/RegistrationForm";
import PaymentList from "./components/dashboard/fees/PaymentList";
import PaymentForm from "./components/dashboard/fees/PaymentForm";
import FeedingPayment from "./components/dashboard/fees/FeedingPayment";
import TutorDashboard from "./pages/TutorDashboard";
import Account from "./components/tutor_dashboard/account/Account";
import Attendance from "./components/tutor_dashboard/attendance/Attendance";
import Performance from "./components/tutor_dashboard/performance/Performance";
import AttendanceList from "./components/tutor_dashboard/attendance/AttendanceList";
import MarkAttendance from "./components/tutor_dashboard/attendance/MarkAttendance";
import PerformanceList from "./components/tutor_dashboard/performance/performanceList";
import RecordPerformance from "./components/tutor_dashboard/performance/RecordPerformance";
import TutorProfile from "./components/tutor_dashboard/account/TutorProfile";
import ResetPassword from "./components/tutor_dashboard/account/ResetPassword";
import StaffRegistrationForm from "./components/dashboard/register/StaffRegistrationForm";
import AllReportsDisplay from "./components/dashboard/reports/AllReportsDisplay";
import AttendanceReport from "./components/dashboard/reports/AttendanceReport";
import PaymentReport from "./components/dashboard/reports/PaymentReport";
import EnrollmentReport from "./components/dashboard/reports/EnrollmentReport";
import PerformanceReport from "./components/dashboard/reports/PerformanceReport";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <Summary />,
      },
      {
        path: "summary",
        element: <Summary />,
      },
      {
        path: "profile",
        element: <Profile />,
        children: [
          {
            path: "",
            element: <Account />,
          },
          {
            path: "admin-account",
            element: <Account />,
          },
          {
            path: "reset-password",
            element: <ResetPassword />,
          },
        ],
      },
      {
        path: "register",
        element: <Register />,
        children: [
          {
            path: "",
            element: <StudentsList />,
          },
          {
            path: "registrations",
            element: <StudentsList />,
          },
          {
            path: "registration-form",
            element: <RegistrationForm />,
          },
          {
            path: "staff-reg-form",
            element: <StaffRegistrationForm />,
          },
        ],
      },
      {
        path: "fees",
        element: <Fees />,
        children: [
          {
            path: "",
            element: <PaymentList />,
          },
          {
            path: "payments",
            element: <PaymentList />,
          },
          {
            path: "payment-form",
            element: <PaymentForm />,
          },
          {
            path: "feeding-pay",
            element: <FeedingPayment />,
          },
        ],
      },
      {
        path: "reports",
        element: <Reports />,
        children: [
          { path: "", element: <AllReportsDisplay /> },
          { path: "all-reports", element: <AllReportsDisplay /> },
          { path: "attendance-report", element: <AttendanceReport /> },
          { path: "payment-report", element: <PaymentReport /> },
          { path: "enrollment-report", element: <EnrollmentReport /> },
          { path: "performance-report", element: <PerformanceReport/> },
        ],
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "tutor-dashboard",
    element: <TutorDashboard />,
    children: [
      {
        path: "",
        element: <TutorProfile />,
      },
      {
        path: "tutor-profile",
        element: <TutorProfile />,
        children: [
          {
            path: "",
            element: <Account />,
          },
          {
            path: "account",
            element: <Account />,
          },
          {
            path: "reset-password",
            element: <ResetPassword />,
          },
        ],
      },
      {
        path: "attendance",
        element: <Attendance />,
        children: [
          {
            path: "",
            element: <AttendanceList />,
          },
          {
            path: "attendance-list",
            element: <AttendanceList />,
          },
          {
            path: "mark-attendance",
            element: <MarkAttendance />,
          },
        ],
      },
      {
        path: "performance",
        element: <Performance />,
        children: [
          {
            path: "",
            element: <PerformanceList />,
          },
          {
            path: "performance-list",
            element: <PerformanceList />,
          },
          {
            path: "performance-recording",
            element: <RecordPerformance />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
