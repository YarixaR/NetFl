import React from 'react'
import {useHistory} from 'react-router-dom'
import NavBar from "./NavBar"
import Card from './Card'

function Home({movies, userId, userData}) {

  const history = useHistory()

  const handleClick = () => {
    history.push('/movie/2')
  }

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
        <button onClick={handleClick} id='detail-btn' className='ml-14 mt-96 text-white border border-red-700 bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg px-14 py-3 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900'>Check Details</button>
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
