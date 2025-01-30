import axios from 'axios';
import { movieListActions } from '../actions';

const MovieEndpoint = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export const fetchPopularMovies = (page = 1) => {
  return async (dispatch) => {
    try {
      dispatch({type:movieListActions.START_LOADING});
      const { data } = await MovieEndpoint.get('/movie/popular', {
        params: {
          api_key: import.meta.env.VITE_REACT_APP_apiKey,
          language: import.meta.env.VITE_REACT_APP_language,
          page,
        },
      });
      dispatch({ type: movieListActions.FETCH_MOVIES, payload: data });
    } catch (error) {
      console.error("error in fetchPopularMovies : ",error)
    }
  };
};
export const fetchUpcomingMovies = (page = 1) => {
  return async (dispatch) => {
    try {
      dispatch({type:movieListActions.START_LOADING});
      const { data } = await MovieEndpoint.get('/movie/upcoming', {
        params: {
          api_key: import.meta.env.VITE_REACT_APP_apiKey,
          language: import.meta.env.VITE_REACT_APP_language,
          page,
        },
      });
      dispatch({ type: movieListActions.FETCH_MOVIES, payload: data });
    } catch (error) {
      console.error("error in fetchUpcomingMovies : ",error)
    }
  };
};
export const fetchTopMovies = (page = 1) => {
  return async (dispatch) => {
    try {
      dispatch({type:movieListActions.START_LOADING});
      const { data } = await MovieEndpoint.get('/movie/top_rated', {
        params: {
          api_key: import.meta.env.VITE_REACT_APP_apiKey,
          language: import.meta.env.VITE_REACT_APP_language,
          page,
        },
      });
      dispatch({ type: movieListActions.FETCH_MOVIES, payload: data });
    } catch (error) {
      console.error("error in fetchTopMovies : ",error)
    }
  };
};
export const searchMovies = (searchText, page = 1) => {
  return async (dispatch) => {
    try {
      dispatch({type:movieListActions.START_LOADING});
      const { data } = await MovieEndpoint.get('search/movie', {
        params: {
          api_key: import.meta.env.VITE_REACT_APP_apiKey,
          language: import.meta.env.VITE_REACT_APP_language,
          query: searchText,
          page,
        },
      });
      dispatch({ type: movieListActions.FETCH_MOVIES, payload: data });
    } catch (error) {
      console.error("error in searchMovies : ",error)
    }
  };
};

export const fetchMovieDetails = (movieId=1) => {
  return async (dispatch) => {
    try {
      dispatch({type:movieListActions.START_LOADING});
      const { data } = await MovieEndpoint.get(`movie/${movieId}`, {
        params: {
          api_key: import.meta.env.VITE_REACT_APP_apiKey,
          language: import.meta.env.VITE_REACT_APP_language,
        },
      });
      dispatch({ type: movieListActions.FETCH_MOVIE_DETAILS, payload: data });
    } catch (error) {
      console.error("error in fetchMovieDetails : ",error)
    }
  };
};

export const fetchCasts = (movieId=1) => {
  return async (dispatch) => {
    try {
      dispatch({type:movieListActions.START_LOADING});
      const { data } = await MovieEndpoint.get(`movie/${movieId}/credits`, {
        params: {
          api_key: import.meta.env.VITE_REACT_APP_apiKey,
          language: import.meta.env.VITE_REACT_APP_language,
        },
      });
      console.log({ moviecasts: data });
      dispatch({ type: movieListActions.FETCH_CASTS, payload: data });
    } catch (error) {
      console.error("error in fetchCasts : ",error)
    }
  };
};