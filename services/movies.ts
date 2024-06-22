import axios from 'axios';

const basicUrl = 'https://api.themoviedb.org/3/movie';
const options = 'language=fr-FR&page=1';
const authorization = ''


// now_playing
export const getNowPlaying = async () => {
  const url = `${basicUrl}/now_playing?${options}`;
  const response = await axios.get(url, {
    headers: {
      accept: 'application/json',
      Authorization: authorization
    },
  });
  return response.data;
}

// popular
export const getPopular = async () => {
  const url = `${basicUrl}/popular?${options}`;
  const response = await axios.get(url, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: authorization
    },
  });
  return response.data;
}
// top_rated
export const getTopRated = async () => {
  const url = `${basicUrl}/top_rated?${options}`;
  const response = await axios.get(url, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: authorization
    },
  });
  return response.data;
}
// upcoming
export const getUpComing = async () => {
  const url = `${basicUrl}/upcoming?${options}`;
  const response = await axios.get(url, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: authorization
    },
  });
  return response.data;
}

// movie details
export const getMovieDetails = async (id: number) => {
  const url = `${basicUrl}/${id}?language=fr-FR`;
  const response = await axios.get(url, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: authorization
    },
  });
  return response.data;
}

// genres
export const getGenres = async () => {
  const url = `${basicUrl}/genre/movie/list?language=fr-FR`;
  const response = await axios.get(url, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: authorization
    },
  });
  return response.data;
}

// search
export const searchMovies = async (query: string) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&${options}`;
  const response = await axios.get(url, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: authorization
    },
  });
  return response.data;
}
// similar
export const getSimilarMovies = async (id: number) => {
  const url = `${basicUrl}/${id}/similar?${options}`;
  const response = await axios.get(url, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: authorization
    },
  });
  return response.data;
}