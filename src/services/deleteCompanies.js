import axios from 'axios';
import { baseUrl } from '../config/api';

export const deleteCompanies = async (company) => {
  const url = `${baseUrl}/empresa/${company.id}`;
  try {
    const response = await axios.delete(url, company);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
