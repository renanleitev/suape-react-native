import axios from 'axios';
import { baseUrl } from '../config/api';

export const getUserById = async (user) => {
    const url = `${baseUrl}/user/${user.id}`;
    try {
        const response = await axios.get(url);
        return response.data;
      } catch (error) {
        console.log(error);
      }
}