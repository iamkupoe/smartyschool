export const getCurrentUrl = (url) => {
  const current = url.slice(11, location.pathname.length);
  switch (current) {
    case '':
      return 'summary';
    case 'summary':
      return 'summary';
    case 'profile':
      return 'profile';
    case 'fees':
      return 'fees';
    case 'reports':
      return 'reports';
    case 'settings':
      return 'settings';
    case 'register':
      return 'register';
    default:
      break;
  }
};
