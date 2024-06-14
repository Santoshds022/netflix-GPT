import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux';


const GptSarchBar = () => {
   const languageKey = useSelector(store => store.config.lang)
   console.log(lang.languageKey);
  return (
    <div className='pt-[10%] flex justify-center'>
      <form className=' bg-black grid grid-cols-12'>
        <input type="text"
            className='p-4 m-4 col-span-9'
           placeholder={lang[languageKey].gptSearchPlaceholder} 
            />
        <button 
            className=' col-span-3 py-2 m-4 px-4 bg-red-700 text-white rounded-lg'>
             {lang[languageKey].search}
        </button>
      </form>
    </div>
  )
}

export default GptSarchBar
