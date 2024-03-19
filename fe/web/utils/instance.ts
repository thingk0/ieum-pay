import axios, { AxiosInstance } from 'axios';
const api = '/api';
const accessToken = localStorage.getItem('access_token');

const axiosAuthApi = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: api,
    headers: { Authorization: 'Bearer ' + accessToken },
    timeout: 1000,
  });
  return instance;
};

const axiosApi = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: api,
    timeout: 1000,
  });
  return instance;
};