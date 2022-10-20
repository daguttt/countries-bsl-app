export const isLoggedIn = (): boolean => {
  return JSON.parse(sessionStorage.getItem('authenticated') ?? 'false');
};
