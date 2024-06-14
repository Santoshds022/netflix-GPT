import React from 'react'
import MovieCard from './MovieCard'
import "../Custom.css"


const MovieList = ({title,movies}) => {
    
  
    if (!movies || movies.length === 0) {
        return <div>No movies available.</div>; // Handle empty or undefined movies array
      }

  return (
    <div>
        <h1 className='text-2xl py-6 font-bold text-white'>{title}</h1>
        <div className='flex overflow-auto movie-list '>
            <div className='flex'>
                {
                    movies?.map(movie => <MovieCard key={movie.id} posterPath = {movie.poster_path}/>)
                }
            </div>
         </div>
    </div>
    
  )
}

export default MovieList
