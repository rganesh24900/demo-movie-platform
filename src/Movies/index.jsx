import MovieContainer from './components/MovieContainer';
import { useDispatch, useSelector } from 'react-redux';
import MovieItem from './components/MovieItem';
import ResponsivePaginationComponent from 'react-responsive-pagination';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { actionCreators } from '../state';

const Movies = () => {
  const { movies, isLoading } = useSelector((state) => state.movies);
  const [params] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    let debounce;

    debounce = setTimeout(() => {
      if (!currentPage) return;
      if (params.get('upcomingMovies')) {
        dispatch(actionCreators.fetchUpcomingMovies(currentPage));
      } else if (params.get('topRatedMovies')) {
        dispatch(actionCreators.fetchTopMovies(currentPage));
      } else {
        dispatch(actionCreators.fetchPopularMovies(currentPage));
      }
    }, 500);

    return () => {
      clearTimeout(debounce);
    };
  }, [currentPage]);

  return (
    <>
      <MovieContainer>
        {isLoading ? (
          <h1 className="text-white ">Loading please wait ...</h1>
        ) : (
          movies?.results.map((movie) => {
            return <MovieItem key={movie?.id} movie={movie} />;
          })
        )}
      </MovieContainer>
      <ResponsivePaginationComponent
        className="text-white flex justify-center bg-green-950 gap-2 w-24 justify-self-center rounded mb-1"
        current={currentPage}
        total={500}
        previousLabel="Prev"
        nextLabel="Next"
        activeItemClassName="text-green-600 bg-white"
        onPageChange={setCurrentPage}
        maxWidth={5}
      />
    </>
  );
};

export default Movies;
