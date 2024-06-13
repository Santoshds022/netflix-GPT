import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store => store.movies))
  
 
  return (
    movies.nowPlayingMovies &&(
    <div className='bg-black'>
      <div className='-mt-[260px] relative z-20 px-10 '>
        <MovieList title={"Now playing Movies"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
        <MovieList title={"Toprated Movies "} movies={movies.topRatedMovies} />
        <MovieList title={"Upcomming Movies"} movies={movies.upCommingMovies} />

      </div>

    </div>)
  )
}

export default SecondaryContainer
