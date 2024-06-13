import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice(
    {
        name : "movies",
        initialState : {
            nowPlayingMovies : null,
            popularMovies : null,
            topRatedMovies : null,
            upCommingMovies : null,
            TrailerVideo :null

        },
        reducers: {
            addNowPlayingMovies :  (state , action)=>{
                state.nowPlayingMovies = action.payload;
            },
            addPopularMovies :  (state , action)=>{
                state.popularMovies = action.payload;
            },
            addTopRatedMovies:  (state , action)=>{
                state.topRatedMovies = action.payload;
            },
            addUpCommingMovies:  (state , action)=>{
                state.upCommingMovies = action.payload;
            },
            
            addTrailerVideo : (state , action)=>{
                state.TrailerVideo = action.payload;
            }
        }
    });
    export const {addNowPlayingMovies ,addTopRatedMovies,addPopularMovies,addUpCommingMovies, addTrailerVideo} = moviesSlice.actions

    export default moviesSlice.reducer;