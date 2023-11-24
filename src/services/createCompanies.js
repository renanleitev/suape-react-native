import axios from 'axios';
import { baseUrl } from '../config/api';

export const createCompanies = async (company) => {
  const url = `${baseUrl}/empresa/`;
  try {
    const response = await axios.post(url, company);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
