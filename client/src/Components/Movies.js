import { React } from 'react'
import NavBar from "./NavBar"
import Card from './Card'

function Movies({movies, userData}) {

  return (
    <div className='page'>
      <NavBar userData={userData}/>
      <div className="grid lg:grid-cols-5 gap-12 lg:gap-0">
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
    </div>
  )
}

export default Movies