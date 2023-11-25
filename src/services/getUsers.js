import axios from 'axios';
import { baseUrl } from '../config/api';

export const getUsers = async () => {
  const url = `${baseUrl}/user/`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
