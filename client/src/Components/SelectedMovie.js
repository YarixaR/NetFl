import { React, useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'

function SelectedMovie() {
  const [ movie, setMovie ] = useState([])

  const {id} = useParams()
  const history = useHistory()
  
  useEffect(() => {
    fetch(`/movies/${id}`)
    .then((res) => res.json())
    .then((data) => setMovie(data))
  }, [])

  const handleClick = () => {
    history.push('/home')
  }

  return (
    <div>
      <img src={movie.image} alt="movie"/>
      <h2>{movie.title}</h2>
      <h4>{movie.genre}</h4>
      <h4>{movie.release_date}</h4>
      <h4>{movie.description}</h4>
      <button onClick={handleClick}>Return to Home</button>
    </div>
  )
}

export default SelectedMovie