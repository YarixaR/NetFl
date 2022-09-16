import React from 'react'
import { useHistory } from 'react-router-dom'

function Card({id, title, image, release, genre, description}) {

  const history = useHistory()

  const handleClick = () => {
    history.push(`/movie/${id}`)
  }

  return (
      <div className='w-60 p-2 bg-black rounded-xl mt-10 flex flex-col overflow-hidden md:w-{240px} relative p-2' onClick={handleClick}>
        <img className='rounded-xl w-full h-auto block' src={image} alt="movie"/>
        <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
          <h2 className='white-space-normal text-cs md:text-sm font-bold flex justify-center items-center h-full text-center'>{title}</h2>
          {/* <h4 className='text-sm text-gray-300 '>{genre}</h4> */}
          {/* <h4 className='text-sm text-gray-300 '>{release}</h4> */}
          {/* <h4 className='text-sm text-gray-300 m-2'>{description}</h4> */}
        </div>
      </div>
  )
}

export default Card

