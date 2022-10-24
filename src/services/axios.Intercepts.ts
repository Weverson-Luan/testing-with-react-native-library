/* eslint-disable prettier/prettier */
import Axios, {AxiosRequestConfig} from 'axios';
// import enviroment from '../Enviroments';
// import {store} from '../Store';

const API_URL = 'https://63506a0b78563c1d82c12d49.mockapi.io/api/v1';

const createAxiosInstance = () => {
  let config: AxiosRequestConfig = {
    baseURL: API_URL,
    timeout: 10000,
  };
  const instance = Axios.create(config);

  instance.interceptors.request.use((value: AxiosRequestConfig) => {
    const user = {} as any;
    if (user.access_token) {
      value.headers = {Authorization: 'Bearer ' + user.access_token};
    }
    return value;
  });

  instance.interceptors.response.use(
    (value: any) => {
      if (value.data?.errors && value.data?.errors.length) {
        throw {
          message: value.data?.errors[0],
        };
      } else {
        return value;
      }
    },
    async (error: any) => {
      if (error?.message === 'Network Error') {
        throw new Error(
          'Sem conexão com a internet, tente novamente mais tarde',
        );
      }
      if (error.code === 'ECONNABORTED') {
        throw {
          message:
            'Nosso servidor demorou muito tempo para responder, tente novamente mais tarde',
        };
      }
      if (error?.response?.status === 401) {
        //get new token method
      }
      if (error?.response?.status === 403) {
        throw new Error(error?.response?.data?.message);
      }

      if (error?.response?.status === 400) {
        throw new Error(error?.response?.data?.message);
      }
      if (error?.response?.data?.errors?.length) {
        throw {
          message: error.response.data.errors[0],
        };
      }
      return error;
    },
  );

  return instance;
};

export {
  createAxiosInstance,
};
