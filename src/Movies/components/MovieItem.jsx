import React from 'react'

const MovieItem = ({movie}) => {
  const imagePath = `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`
  return (
    <div className='flex items-center flex-col'>
      <img src={imagePath} alt="movie image" />
      <div className='flex flex-col items-center gap-2'>
        <p className='text-white text-xl font-medium'>{movie?.original_title}</p>
        <span className='text-white text-sm font-bold'>{movie?.vote_average}</span>
      </div>
    </div>
  )
}

export default MovieItem