import axios from "axios";

const url = `https://api-suape.onrender.com/ponto/`;

export const getPoints = async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};