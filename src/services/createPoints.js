import axios from 'axios';
import { baseUrl } from '../config/api';

export const createPoints = async (point) => {
  const url = `${baseUrl}/ponto/`;
  try {
    const response = await axios.post(url, point);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
