import axios from 'axios';
import { baseUrl } from '../config/api';

export const deleteUser = async (user) => {
  const url = `${baseUrl}/user/${user.id}`;
  try {
    const response = await axios.delete(url, user);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
