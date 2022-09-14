import React from 'react'
import NavBar from "./NavBar"
import Card from './Card'

function Home({movies}) {

  console.log(movies[1])

  const movieFirst = movies[1]
  const movieImage = movies[1].image

  return (
    <div>
      <NavBar />
      <div>
        <img className="first-image" src={movieImage} alt="first movie"/>
        <h1>{movieFirst.title}</h1>
        <h4>{movieFirst.description}</h4>
        <button>Watch Now</button>
      </div>
      <div>
        {movies.map((movie) => <Card 
          key = {movie.id}
          id = {movie.id}
          title = {movie.title}
          image = {movie.image}
          release = {movie.release_date}
          genre = {movie.genre}
          description = {movie.description}
          trailer = {movie.trailer}
        />)}
      </div>
    </div>
  )
}

export default Home
