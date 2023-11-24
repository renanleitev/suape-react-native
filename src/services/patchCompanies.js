import axios from 'axios';
import { baseUrl } from '../config/api';

export const patchCompanies = async (company) => {
  const url = `${baseUrl}/empresa/${company.id}`;
  try {
    const response = await axios.patch(url, company);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
