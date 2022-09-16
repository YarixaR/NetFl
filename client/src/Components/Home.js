import React from 'react'
import NavBar from "./NavBar"
import Card from './Card'

function Home({movies, userId, userData}) {

  return (
    <div className='page' >
      <NavBar userData={userData}/>
      <div className='header-container'>
        <div className='header-title'>
          <h1>THE</h1>
          <h1 id='second-row-text'>SEA BEAST</h1>
        </div>
        <div className='header-subtitle'>
          <h1>FROM THE AWARD WINNING</h1>
          <h1>Filmmaker of MOANA & BIG HERO 6</h1>
        </div>
        <img className='header-trailer'src='https://c.tenor.com/n72csQ3YXxcAAAAC/sea-beast-attack-the-sea-beast.gif' alt=''/>
        {/* <iframe className='header-trailer' src="https://www.youtube.com/embed/P-E-IGQCsPo?autoplay=1&mute=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
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
