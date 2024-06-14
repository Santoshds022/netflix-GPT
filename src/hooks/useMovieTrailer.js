import { API_OPTIONS } from '../utils/constants'
import { useDispatch, } from 'react-redux'
import { addTrailerVideo } from '../utils/moviesSlice'
import React, { useEffect,  } from 'react'

const useMovieTrailer = (movieId)=>{

    const dispatch = useDispatch()
  

     const getMovieVideo = async ()=> {
        const data = await fetch('https://api.themoviedb.org/3/movie/' 
            +movieId+
            '/videos?language=en-US', API_OPTIONS)
        const json = await data.json();
        
     
        const filterTrailer = json.results.filter((videos)=>videos.type === "Trailer")
        const trailer = filterTrailer.length ? filterTrailer[0] : json.results[0];

        // setTrailerId(trailer.key)// solution1
        dispatch(addTrailerVideo(trailer))
    } 
    useEffect(()=>{
        getMovieVideo();
    }, [movieId]) 
}

export default  useMovieTrailer;