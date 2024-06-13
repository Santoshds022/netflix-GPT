import React from 'react'
import { useSelector } from 'react-redux';
import VideoTItle from './VideoTItle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    if (!movies || movies.length === 0) {
        return <div>Loading...</div>;
    }
    //or if(!movies) return;

    const mainMovie = movies[2];
    // console.log(mainMovie);

    const {original_title , overview, id} = mainMovie;
  return (
    <div className=''>
     <VideoTItle  title = {original_title} overview = {overview} />
     <VideoBackground  movieId = {id}/>   
    </div>
  )
}

export default MainContainer
