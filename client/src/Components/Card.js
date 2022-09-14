import React from 'react'
import { useHistory } from 'react-router-dom'

function MovieCard({id, title, image, release, genre, description, trailer}) {

  const history = useHistory()

  const handleClick = () => {
    history.push(`/movie/${id}`)
  }

  return (
    <div>
      <div onClick={handleClick}>
        <img src={image} alt="movie"/>
        <h2>{title}</h2>
        <h4>{genre}</h4>
        <h4>{release}</h4>
        <h4>{description}</h4>
      </div>
    </div>
  )
}

export default  MovieCard
