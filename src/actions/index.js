import axios from 'axios';

import { FETCH_ARTICLES } from './../constants';


export const fetchArticles = (tag) => {
  const baseUrl = process.env.NODE_ENV === 'development' ?
    process.env.REACT_APP_DB_URL_LOCALHOST :
    process.env.REACT_APP_DB_URL_HEROKU;

  const request = axios.get(`${baseUrl}/tag/?q=${tag}`);

  return {
    type: FETCH_ARTICLES,
    payload: request
  };
};
