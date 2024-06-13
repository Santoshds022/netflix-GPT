import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name : 'gpt',
    initialState: {
        showGptSearch :false
    },
    reducers : {
        toggleGptSearchView :(state) =>{
            state.showGptSearch = !state.showGptSearch ;
        }
    }

})
export const { toggleGptSearchView } = gptSlice.actions;

// Export the reducer as default
export default gptSlice.reducer;