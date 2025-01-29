import React from 'react';
import MovieContainer from './components/MovieContainer';
import { useSelector } from 'react-redux';
import MovieItem from './components/MovieItem';

const Movies = () => {
  const {movies,isLoading} = useSelector((state) => state.movies);
  return (
    <MovieContainer>
      {isLoading?<h1 className='text-white'>Loading please wait ...</h1>:
        movies.map(
          movie=>{
            return(
              <MovieItem movie={movie}/>
            )
          }
        )
      }
    </MovieContainer>
  );
};

export default Movies;
