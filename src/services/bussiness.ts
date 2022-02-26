const axios = require('axios').default;
import { AxiosResponse } from 'axios';
import Constants from 'expo-constants';

const { API_URL, API_KEY } = Constants.manifest?.extra || {};

interface Business {
  businessId: string;
  name: string;
}

const business = axios.create({
  baseURL: API_URL,
  timeout: 1000,
  headers: { 'x-api-key': API_KEY },
});

export const getBusiness = async () =>
  business.get('/business').then((res: AxiosResponse) => res.data);

export const saveBusiness = async (name: string) => {
  return await business.post('/business', { name });
};
