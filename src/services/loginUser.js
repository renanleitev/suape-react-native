import axios from 'axios';
import { baseUrl } from '../config/api';

export const loginUser = async (user) => {
  const url = `${baseUrl}/user/login`;
  console.log('user', user)
  try {
    const response = await axios.post(url, user);
    console.log('resposta', response.error)
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
