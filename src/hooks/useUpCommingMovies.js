import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { addUpCommingMovies } from '../utils/moviesSlice';
import { useDispatch } from 'react-redux';

const useUpCommingMovies = () => {
    const dispatch = useDispatch()
 
    const getTopRatedMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
       
        dispatch(addUpCommingMovies(json.results))
    }

    useEffect(()=>{
        getTopRatedMovies();

    },[])
}

export default useUpCommingMovies
