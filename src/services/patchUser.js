import axios from 'axios';
import { baseUrl } from '../config/api';

export const patchUser = async (user) => {
  const url = `${baseUrl}/user/forgetPassword`;
  try {
    const response = await axios.patch(url, user);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
