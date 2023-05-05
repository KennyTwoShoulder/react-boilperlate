import { FrappeApp } from 'frappe-js-sdk';

const getTokenFromLocalStorage = () => {
  try {
    const userToken = JSON.parse(localStorage.getItem('userToken'));

    return userToken;
  } catch (error) {
    console.error(error);
  }
}

const frappe = new FrappeApp('http://mysite.localhost:8000', {
  useToken: true,
  token: getTokenFromLocalStorage(),
  type: 'Bearer',
});

export default frappe;