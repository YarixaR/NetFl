import React from 'react'
import {useState, useEffect} from 'react'
import NavBar from "./NavBar";

function Home() {

  const [ movies, setMovies ] = useState([]);


  useEffect(() => {
    fetch('/movies')
    .then((res) => res.json())
    .then((data) => setMovies(data))
  }, [])


  console.log(movies)

  
  return (
    <div>
      <NavBar />
      
    </div>
  )
}

export default Home