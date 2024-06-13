import React from 'react'
import GptSarchBar from './GptSarchBar'
import GptSuggetions from './GptSuggetions'
import { BG_url } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
         <div className='absolute top-0 left-0 w-full h-full -z-10'>
             <img src={BG_url} alt="bgimg"className='w-full h-full object-cover' />
        </div>
     <GptSarchBar/>
     <GptSuggetions />
    </div>
  )
}

export default GptSearch
