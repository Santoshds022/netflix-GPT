import React from 'react'

const GptSarchBar = () => {
  return (
    <div className='pt-[10%] flex justify-center'>
      <form className=' bg-black grid grid-cols-12'>
        <input type="text" className='p-4 m-4 col-span-9' placeholder='what wouldyou like to watch today?' />
        <button className=' col-span-3 py-2 m-4 px-4 bg-red-700 text-white rounded-lg'>Search</button>
      </form>
    </div>
  )
}

export default GptSarchBar
