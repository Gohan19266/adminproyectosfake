export const isAuthenticated = () =>
  sessionStorage.getItem('token') ? true : false;