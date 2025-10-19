import React from 'react'
import useMoviesStore from './movieStore'
import MovieCard from './MovieCard';
function MoviesList() {
  const {movies} = useMoviesStore();
  return (
    <div>
      {movies.map((movie) => (<MovieCard key={movie.id} id={movie.id} />))}
    </div>
  )
}

export default MoviesList
