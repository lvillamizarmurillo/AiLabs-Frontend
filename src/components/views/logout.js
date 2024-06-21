export const logout = () => {
  // Limpiar la información de autenticación del almacenamiento local
  localStorage.removeItem('authToken');
  // O limpiar cookies, si las usas:
  // document.cookie = 'authToken=; Max-Age=0; path=/;';
  
  // Redirigir al usuario a la página de inicio de sesión
  window.location.href = '/auth';
};
