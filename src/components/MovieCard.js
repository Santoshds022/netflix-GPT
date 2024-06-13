import React from 'react'
import { Img_CDN } from '../utils/constants'

const MovieCard = ({ posterPath}) => {
  return (
    <div className='w-36 pr-4'>
      <img src={Img_CDN +  posterPath } alt="Movie card" />
    </div>
  )
}

export default MovieCard
