import { getBasicTokenWithApiKeySecret, getSignature, setTicks } from '@helpers/crypto.helper';
import storageHelper from '@helpers/storage.helper';
import axios, { AxiosError, AxiosResponse } from 'axios';
import ApiRoutes from './api_routes';

// ** Create instance Axios
const customAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  // method: 'POST',
  headers: {
    ApplicationChannel: `${process.env.NEXT_PUBLIC_APPLICATION_CHANNEL}`,
    ApplicationBrand: `${process.env.NEXT_PUBLIC_APPLICATION_BRAND}`,
    'Content-Type': 'application/json'
  }
});

const requestHandler = async (request: any) => {
  return request;
};

const responseHandler = (response: AxiosResponse) => {
  return response;
};

const errorHandler = (error: AxiosError) => {
  if (error?.response?.data?.code === '401') {
    if (typeof window !== 'undefined') {
      storageHelper.removeAll();
      window.location.href = '/';
    }
  }
  return Promise.reject(error);
};

// ** Set Axios as global interceptor
// ** Request Intercept
customAxios.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

// ** Response Intercept
customAxios.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export default customAxios;
