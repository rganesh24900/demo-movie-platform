import axios from 'axios';
import { movieListActions } from '../actions';

const MovieEndpoint = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export const fetchPopularMovies = (page = 1) => {
  return async (dispatch) => {
    try {
      const { data } = await MovieEndpoint.get('/movie/popular', {
        params: {
          api_key: import.meta.env.VITE_REACT_APP_apiKey,
          language: import.meta.env.VITE_REACT_APP_language,
          page,
        },
      });
      console.log({ moviedata: data });
      dispatch({ type: movieListActions.FETCH_MOVIES, payload: data });
    } catch (error) {}
  };
};
export const fetchUpcomingMovies = (page = 1) => {
  return async (dispatch) => {
    try {
      const { data } = await MovieEndpoint.get('/movie/upcoming', {
        params: {
          api_key: import.meta.env.VITE_REACT_APP_apiKey,
          language: import.meta.env.VITE_REACT_APP_language,
          page,
        },
      });
      console.log({ moviedata: data });
      dispatch({ type: movieListActions.FETCH_MOVIES, payload: data });
    } catch (error) {}
  };
};
export const fetchTopMovies = (page = 1) => {
  return async (dispatch) => {
    try {
      const { data } = await MovieEndpoint.get('/movie/top_rated', {
        params: {
          api_key: import.meta.env.VITE_REACT_APP_apiKey,
          language: import.meta.env.VITE_REACT_APP_language,
          page,
        },
      });
      console.log({ moviedata: data });
      dispatch({ type: movieListActions.FETCH_MOVIES, payload: data });
    } catch (error) {}
  };
};
export const searchMovies = (searchText, page = 1) => {
  return async (dispatch) => {
    try {
      const { data } = await MovieEndpoint.get('search/movie', {
        params: {
          api_key: import.meta.env.VITE_REACT_APP_apiKey,
          language: import.meta.env.VITE_REACT_APP_language,
          query: searchText,
          page,
        },
      });
      console.log({ moviedata: data });
      dispatch({ type: movieListActions.FETCH_MOVIES, payload: data });
    } catch (error) {}
  };
};
