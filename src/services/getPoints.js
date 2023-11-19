import axios from 'axios';
import { baseUrl } from '../config/api';

export const getPoints = async () => {
  const url = `${baseUrl}/ponto/`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
