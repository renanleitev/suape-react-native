import axios from 'axios';
import { baseUrl } from '../config/api';

export const postUser = async (user) => {
  const url = `${baseUrl}/user/`;
  try {
    const response = await axios.post(url, user);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
