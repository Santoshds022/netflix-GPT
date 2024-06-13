import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopulerMovies from '../hooks/usePopulerMovies'
import useTopRatedMovie from '../hooks/useTopRatedMovie'
import useUpCommingMovies from '../hooks/useUpCommingMovies'



const Browse = () => {
  
  useNowPlayingMovies();
  usePopulerMovies();
  useTopRatedMovie();
  useUpCommingMovies();
 
  return (
    <div>
     <Header />
     <MainContainer />
     <SecondaryContainer />
    </div>
  )
}

export default Browse
