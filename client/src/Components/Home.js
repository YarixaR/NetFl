import React from 'react'
import NavBar from "./NavBar"
import Card from './Card'

function Home({movies, userId}) {

  // console.log(movies[1])

  // const movieFirst = movies[1]
  // const movieImage = movies[1].image

  return (
    <div className='home' >
      <NavBar/>
      <div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/P-E-IGQCsPo?autoplay=1&mute=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        {/* <img className="first-image" src={movieImage} alt="first movie"/>
        <h1>{movieFirst.title}</h1>
        <h4>{movieFirst.description}</h4> */}
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
          userId = {userId}
        />)}
      </div>
    </div>
  )
}

export default Home
