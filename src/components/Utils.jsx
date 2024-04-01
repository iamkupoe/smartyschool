export const getCurrentUrl = (url) => {
  const current = url.slice(11, location.pathname.length);
  let displayUrl = 'summary';

  if (current === '' || current === 'summary') {
    displayUrl = 'summary';
  } else if (current === 'profile') {
    displayUrl = 'profile';
  } else if (current === 'profile') {
    displayUrl = 'profile';
  } else if (current === 'fees') {
    displayUrl = 'fees';
  } else if (current === 'reports') {
    displayUrl = 'reports';
  } else if (current === 'settings') {
    displayUrl = 'settings';
  } else if (
    current === 'register' ||
    current === 'register/registrations' ||
    'register/registration-form'
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
