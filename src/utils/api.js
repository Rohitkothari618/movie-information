import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const ApiKey = process.env.REACT_APP_TMDB_API_KEY;

export const fetchMoiveApi = async (url, params) => {
  const data = await axios.get(BASE_URL + url, ApiKey);
  return data;
};
