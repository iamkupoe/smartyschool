export const getCurrentUrl = (url) => {
  const current = url.slice(11, location.pathname.length);
  let displayUrl = 'summary';

  if (current === '' || current === 'summary') {
    displayUrl = 'summary';
  } else if (current === 'profile') {
    displayUrl = 'profile';
  } else if (current === 'profile') {
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

export const getTutorDashboardUrlNow = (url) => {
  const current = url.slice(17, location.pathname.length);
  let displayUrl = 'account';
  if (current === '' || current === 'account') {
    displayUrl = 'account';
  } else if (current === 'performance') {
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
  } else if (current === 'mark-attendance') {
    displayUrl = 'mark-attendance';
  }
  return displayUrl;
};
