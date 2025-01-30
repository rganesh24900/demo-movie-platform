import MovieContainer from './components/MovieContainer';
import { useSelector } from 'react-redux';
import MovieItem from './components/MovieItem';
import ResponsivePaginationComponent from 'react-responsive-pagination';

const Movies = () => {
  const {movies,isLoading} = useSelector((state) => state.movies);
  return (
    <>
    <MovieContainer>
      {isLoading?<h1 className='text-white'>Loading please wait ...</h1>:
        movies.map(
          movie=>{
            return(
              <MovieItem key={movie?.id} movie={movie}/>
            )
          }
        )
      }
    </MovieContainer>
    <ResponsivePaginationComponent
      className='text-white flex justify-center bg-green-950 gap-2'
      current={1}
      total={5}
      // onPageChange={setCurrentPage}
    />
  </>
  );
};

export default Movies;
