import { React } from 'react'
import NavBar from "./NavBar"
import Card from './Card'

function Movies({movies, userData}) {

  return (
    <div className='movies'>
      <NavBar userData={userData}/>
      {movies.map(movie => movie.genre == "movie" ? <Card 
        key = {movie.id}
        id = {movie.id}
        title = {movie.title}
        image = {movie.image}
        release = {movie.release_date}
        genre = {movie.genre}
        description = {movie.description}
        trailer = {movie.trailer}
        /> : null
        )
      }
    </div>
  )
}

export default Movies