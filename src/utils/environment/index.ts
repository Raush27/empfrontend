import Cookies from 'js-cookie';
export const environment = {
  API_BASE_URL:  'http://localhost:4200/' || 'https://crm-rho-red.vercel.app/'
};

export const setHeaders = () => {
  const token = Cookies.get('token');
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'ngrok-skip-browser-warning': '69420',
      'Content-Type': 'multipart/form-data'
    }
  };
  return headers;
};
