/**
 * This file handle all the API calls for the business
 * creating an axios instance and calling the API
 *
 * @author Rich Jimenez <richjimenez@me.com>
 */
const axios = require('axios').default;
import Constants from 'expo-constants';
import { AxiosResponse } from 'axios';
import { TBusiness } from '@customTypes/business';

interface Person {
  personId?: string;
  businessId: string;
  email: string;
  name: string;
  phone: string;
  role: string;
  join_date: string;
}

interface PersonDelete {
  personId: string;
  businessId: string;
}

const { API_URL, API_KEY } = Constants.manifest?.extra || {};

const business = axios.create({
  baseURL: API_URL,
  timeout: 1000,
  headers: { 'x-api-key': API_KEY },
});

/**
 * This function simulate a delay on the API
 * @function delay
 * @param {number} ms - The time to delay
 * @author Rich Jimenez <richjimenez@me.com>
 */
const sleep = (ms: number = 1000): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

business.interceptors.response.use(async (res: AxiosResponse) => {
  //await sleep();
  return res;
});

export const getBusinesses = async () => business.get('/business').then((res: AxiosResponse) => res.data);

export const createNewBusiness = async (name: string) => business.post('/business', { name });

export const getBusiness = async (businessId: string) =>
  business.get(`/business/${businessId}`).then((res: AxiosResponse) => res.data);

export const updateBusiness = async (businessObj: TBusiness) =>
  business.put(`/business/${businessObj.businessId}`, businessObj).then((res: AxiosResponse) => res.data);

export const deleteBusiness = async (businessId: string) =>
  business.delete(`/business/${businessId}`).then((res: AxiosResponse) => res.data);

export const getPersons = async (businessId: string) =>
  business.get(`/business/${businessId}/persons`).then((res: AxiosResponse) => res.data);

export const createNewPerson = async (person: Person) =>
  business.post(`/business/${person.businessId}/persons`, person).then((res: AxiosResponse) => res.data);

export const updatePerson = async (person: Person) =>
  business.put(`/business/${person.businessId}/persons/${person.personId}`, person).then((res: AxiosResponse) => res.data);

export const deletePerson = async (person: PersonDelete) =>
  business.delete(`/business/${person.businessId}/persons/${person.personId}`).then((res: AxiosResponse) => res.data);
