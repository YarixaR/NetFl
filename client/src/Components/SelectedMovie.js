import { React, useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'

function SelectedMovie() {
  const [ movie, setMovie ] = useState([])

  const [rating, setRating] = useState({
    rating: "",
    comment: ""
  });
  const [hover, setHover] = useState(null);

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
      <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <img src={movie.image} alt="movie"/>
      <h2>{movie.title}</h2>
      {/* <h4>{movie.genre}</h4> */}
      <h4>{movie.release_date}</h4>
      <h4>{movie.description}</h4>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        console.log(ratingValue)
        return (
          <label>
            <input
              type= "radio"
              name= "rating"
              value= {ratingValue}
              onClick= {() => setRating(ratingValue)}
            />
              <FaStar
                icon="fa-solid fa-star"
                className='star'
                color= {ratingValue < (hover || rating) ? "#ffc107" : "#e4e5e9"}
                size = {30}
                onMouseEnter= {() => setHover(ratingValue)}
                onMouseLeave= {() => setHover(null)}
              />
          </label>
        )
      })}
      <button onClick={handleClick}>Return to Home</button>
    </div>
  )
}

export default SelectedMovie


// t.integer "rating"
// t.string "comment"