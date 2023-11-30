import axios from 'axios';
import { baseUrl } from '../config/api';

export const getCompanies = async () => {
  const url = `${baseUrl}/empresa/`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};