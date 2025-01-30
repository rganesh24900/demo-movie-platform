import { useNavigate } from "react-router-dom"
import { updateImage } from "../../common";

const MovieItem = ({movie}) => {
  const navigate = useNavigate();
  return (
    <div onClick={()=>{
      navigate(`/movie-details/${movie?.id}`);
    }} className='flex items-center flex-col cursor-pointer'>
      <img src={updateImage(movie?.poster_path)} alt="movie image" />
      <div className='flex flex-col items-center gap-2'>
        <p className='text-white text-xl font-medium'>{movie?.original_title}</p>
        <span className='text-white text-sm font-bold'>{movie?.vote_average}</span>
      </div>
    </div>
  )
}

export default MovieItem