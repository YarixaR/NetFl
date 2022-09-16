import React from 'react'
import NavBar from "./NavBar"
import Card from './Card'

function Shows({shows, userData}) {
  return (
    <div className='page'>
      <NavBar userData={userData}/>
      {shows.map(show => show.genre == "show" ? <Card 
        key = {show.id}
        id = {show.id}
        title = {show.title}
        image = {show.image}
        release = {show.release_date}
        genre = {show.genre}
        description = {show.description}
        trailer = {show.trailer}
        /> : null
        )
      }
    </div>
  )
}

export default Shows