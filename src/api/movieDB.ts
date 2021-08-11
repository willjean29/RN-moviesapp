import axios from 'axios';
import {API_URL, API_KEY, LANGUAGE} from 'react-native-dotenv';

const movieDB = axios.create({
  baseURL: API_URL,
  params: {
    api_key: API_KEY,
    language: LANGUAGE,
  },
});

export default movieDB;
