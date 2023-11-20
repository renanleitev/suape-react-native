import axios from 'axios';
import { baseUrl } from '../config/api';

export const patchSaveJourney = async (user) => {
  const url = `${baseUrl}/user/${user.id}`;
  try {
    const response = await axios.patch(url, user);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
