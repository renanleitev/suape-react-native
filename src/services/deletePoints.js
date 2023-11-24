import axios from 'axios';
import { baseUrl } from '../config/api';

export const deletePoints = async (point) => {
  const url = `${baseUrl}/ponto/${point.id}`;
  try {
    const response = await axios.delete(url, point);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};