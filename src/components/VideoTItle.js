import React from 'react'

const VideoTItle = ({title , overview}) => {
  return (
    <div className=' px-14 absolute pt-[20%] text-white bg-gradient-to-r from-black w-screen aspect-video '>
     <h1 className='text-4xl font-bold'>{title}</h1>
     <p className='py-6 text-sm w-1/4'>{overview}</p>

     <div >
        <button className='bg-white text-black p-2 px-10 bg-opacity-50 rounded-lg hover:bg-white'> ▷ Play</button>
        <button  className='bg-gray-500 text-white p-2 px-10  bg-opacity-50 rounded-lg mx-2'>More info </button>
     </div>
    </div>
  )
}

export default VideoTItle
