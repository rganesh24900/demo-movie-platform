import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { actionCreators } from '../state';
import React, { useEffect } from 'react';
import MovieDetailsContainer from './components/MovieDetailsContainer';
import Cast from '../Movies/components/Cast';
import { updateImage } from '../common';

const MovieDetails = () => {
  const { movieId } = useParams();

  const { movieDetails, casts, isLoading,castLoading } = useSelector(
    (state) => state.movies
  );

  const dispatch = useDispatch();
  // const imagePath = `https://image.tmdb.org/t/p/w500/${movieDetails?.poster_path}`;
  // const backdropPath = `https://image.tmdb.org/t/p/w500/${movieDetails?.poster_path}`;

  const MemoizedCast = React.memo(Cast);

  useEffect(() => {
    dispatch(actionCreators.fetchMovieDetails(movieId));
    dispatch(actionCreators.fetchCasts(movieId));
  }, []);

  console.log({ movieDetails });

  return (
    <div className="gap-4 flex flex-col">
      <MovieDetailsContainer>
        {isLoading?<h1 className='text-white'>Loading please wait...</h1>:<>
          <div className="w-[70%]">
            <div>
              <img
                className="w-20"
                src={updateImage(movieDetails?.poster_path)}
                alt="posterImage"
              />
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-bold text-white">
                  {movieDetails?.title}
                </h1>
                <p className="text-sm text-blue-700">
                  Rating : {movieDetails?.vote_average}
                </p>
                <div className="flex flex-row gap-2 items-center">
                  <span className="bg-black text-white text-xs p-2 rounded">
                    {movieDetails?.runtime} min
                  </span>
                  <p className="text-blue-200 text-xs">
                    {movieDetails?.genres.map((g) => g.name).join(',')}
                  </p>
                </div>
                <p className="text-white text-sm">
                  Release Date :{' '}
                  {new Date(movieDetails?.release_date).toDateString()}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-white">Overview</h1>
              <p className="text-sm text-white">{movieDetails?.overview}</p>
            </div>
          </div>
          <div className="flex-grow">
            <img src={updateImage(movieDetails?.backdrop_path)} alt="backDropImage" />
          </div>
        </>}
      </MovieDetailsContainer>
      <h1 className="text-white">Cast</h1>
      {castLoading?<h1 className='text-white'>Loading please wait...</h1>:<div className="flex flex-row gap-2 flex-wrap">
        {casts.slice(10)?.map((cast) => {
          return <MemoizedCast key={movieId} cast={cast} />;
        })}
      </div>}
    </div>
  );
};

export default MovieDetails;
