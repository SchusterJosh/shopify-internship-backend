require('dotenv').config();
const axios = require('axios');
const { extractInfo } = require('../util/extractInfo');

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${process.env.API_KEY_HEADER}`,
  },
});

// This function returns the data from the API request. Specify the type (ex. person) and specific name you want to search for.
const getSearchResults = async (query) => {
  const response = await instance.get(`/search/movie?query=${query}`);
  const data = extractInfo(response.data.results);
  return data;
};

const getAllCredits = async (id) => {
  const response = await instance.get(`/person/${id}/movie_credits`);
  return response.data;
};

module.exports = { getSearchResults, getAllCredits };
