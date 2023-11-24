import axios from 'axios';
import { baseUrl } from '../config/api';

export const patchPoints = async (point) => {
  const url = `${baseUrl}/ponto/${point.id}`;
  try {
    const response = await axios.patch(url, point);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};