export const getCurrentUrl = (url) => {
  const current = url.slice(11, location.pathname.length);
  let displayUrl = 'summary';

  if (current === '' || current === 'summary') {
    displayUrl = 'summary';
  } else if (current === 'profile' || current === 'profile/admin-account' || current === 'profile/reset-password') {
    displayUrl = 'profile';
  } else if (
    current === 'fees' ||
    current === 'fees/payments' ||
    current === 'fees/feeding-pay' ||
    current === 'fees/payment-form'
  ) {
    displayUrl = 'fees';
  } else if (current === 'reports') {
    displayUrl = 'reports';
  } else if (current === 'settings') {
    displayUrl = 'settings';
  } else if (
    current === 'register' ||
    current === 'register/registrations' ||
    current === 'register/registration-form'
  ) {
    displayUrl = 'register';
  }
  return displayUrl;
};
export const getRegisterCurrentScreen = (url) => {
  const current = url.slice(20, location.pathname.length);
  let displayUrl = 'registration';

  if (current === '' || current === 'registration') {
    displayUrl = 'registration';
  } else if (current === 'registration-form') {
    displayUrl = 'registration-form';
  } else if (current === 'register-tutor') {
    displayUrl = 'register-tutor';
  }
  return displayUrl;
};

export const getFeesCurrentScreen = (url) => {
  const current = url.slice(16, location.pathname.length);
  let displayUrl = 'payments';

  if (current === '' || current === 'payments') {
    displayUrl = 'payments';
  } else if (current === 'payment-form') {
    displayUrl = 'payment-form';
  } else if (current === 'feeding-pay') {
    displayUrl = 'feeding-pay';
  }
  return displayUrl;
};

export const getProfileCurrentScreen = (url) => {
  const current = url.slice(19, location.pathname.length);
  let displayUrl = 'admin-account';

  if (current === '' || current === 'admin-account') {
    displayUrl = 'admin-account';
  } else if (current === 'reset-password') {
    displayUrl = 'reset-password';
  }
  return displayUrl;
};

export const getTutorDashboardUrlNow = (url) => {
  const current = url.slice(17, location.pathname.length);
  let displayUrl = 'tutor-profile';
  if (
    current === '' ||
    current === 'tutor-profile' ||
    current === 'tutor-profile/reset-password' ||
    current === 'tutor-profile/account'
  ) {
    displayUrl = 'tutor-profile';
  } else if (
    current === 'performance' ||
    current === 'performance/performance-list' ||
    current === 'performance/performance-recording'
  ) {
    displayUrl = 'performance';
  } else if (
    current === 'attendance' ||
    current === 'attendance/mark-attendance' ||
    current === 'attendance/attendance-list'
  ) {
    displayUrl = 'attendance';
  }
  return displayUrl;
};

export const getAttendanceCurrentUrl = (url) => {
  const current = url.slice(28, location.pathname.length);
  let displayUrl = 'attendance-list';
  if (current === '' || current === 'attendance-list') {
    displayUrl = 'attendance-list';
  } else if (current === 'mark-attendance') {
    displayUrl = 'mark-attendance';
  }
  return displayUrl;
};

export const getPerformanceCurrentUrl = (url) => {
  const current = url.slice(29, location.pathname.length);
  let displayUrl = 'performance-list';
  if (current === '' || current === 'performance-list') {
    displayUrl = 'performance-list';
  } else if (current === 'performance-recording') {
    displayUrl = 'performance-recording';
  } else if (current === 'mark-attendance') {
    displayUrl = 'mark-attendance';
  }
  return displayUrl;
};

export const getAccountsCurrentUrl = (url) => {
  const current = url.slice(31, location.pathname.length);
  let displayUrl = 'account';
  if (current === '' || current === 'account') {
    displayUrl = 'account';
  } else if (current === 'reset-password') {
    displayUrl = 'reset-password';
  }
  return displayUrl;
};
