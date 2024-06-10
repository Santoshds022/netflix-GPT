import { API_OPTIONS } from '../utils/constants'
import { useDispatch, } from 'react-redux'
import { addTrailerVideo } from '../utils/moviesSlice'
import React, { useEffect,  } from 'react'

const useMovieTrailer = (movieId)=>{

    const dispatch = useDispatch()
    // console.log(movieId);

     const getMovieVideo = async ()=> {
        const data = await fetch('https://api.themoviedb.org/3/movie/' 
            +movieId+
            '/videos?language=en-US', API_OPTIONS)
        const json = await data.json();
        
        // console.log(json);
        const filterTrailer = json.results.filter((videos)=>videos.type === "Trailer")
        const trailer = filterTrailer.length ? filterTrailer[0] : json.results[0];

        console.log(trailer);
        // setTrailerId(trailer.key)// solution1
        dispatch(addTrailerVideo(trailer))
    } 
    useEffect(()=>{
        getMovieVideo();
    }, []) 
}

export default  useMovieTrailer;