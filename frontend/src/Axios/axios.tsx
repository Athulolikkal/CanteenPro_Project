import axios from 'axios';
let accessToken = '';

const instance = axios.create({
    baseURL: import.meta.env.VITE_BASEURL,
});

export const setAccessToken = (role: string | undefined) => {
    if (role === 'canteen') {
        accessToken = localStorage.getItem('canteenAccessToken') || '';
    } else {
        accessToken = localStorage.getItem('userAccessToken') || '';
    }
    instance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
};

setAccessToken('user');

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const { response } = error;

        if (response && response.status === 401) {
            console.log('jwt authentication failed');
            const { role } = response.data;
            if (role === 'canteen') {
                console.log('Canteen jwt authentication failed');
                window.location.href = '/canteen/jwtsessionexpiredcanteen';
              } else {
                console.log('user Jwt authentication failed');
                window.location.href = '/user/jwtsessionexpired';
              }
        }

        return Promise.reject(error);
    }
);

export default instance;

