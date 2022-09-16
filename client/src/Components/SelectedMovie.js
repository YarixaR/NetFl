import { React, useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import NavBar from "./NavBar"

function SelectedMovie({ userId, userData, handleAddReviews}) {
  const [ movie, setMovie ] = useState([])

  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(null);

  const [comment, setComment] = useState("")

  const {id} = useParams()
  const history = useHistory()

  const handleMovieId = () => {
    fetch(`/movies/${id}`)
    .then((res) => res.json())
    .then((data) => setMovie(data))
  }

  useEffect(() => {
    handleMovieId()
  }, [])
  
  const handleClick = () => {
    history.push('/home')
  }

  const handleChange = (e) => {
    setComment(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/reviews', {
      method: 'POST',
      headers: {
          "Content-type": "application/json",
      },
      body: JSON.stringify({
        rating: rating-1,
        comment: comment,
        user_id: userId,
        movie_id: id
      }),
      })    
        .then((resp) => resp.json())
        .then(data => {
          handleAddReviews(data)
          handleMovieId()
        })
    e.target.reset()
  }

  const navigateToUserPage = () => {
    history.push(`/user/${userId}`)
  }

  const starObject = {1:'⭐', 2:'⭐⭐', 3:'⭐⭐⭐', 4:'⭐⭐⭐⭐', 5:'⭐⭐⭐⭐⭐' }

  return (
    <div className='page'>
      <NavBar userData={userData}/>
      <div className='header-container'></div>
        <iframe className='movie-trailer' src={movie.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <div className='card-grid'> 
        <div className='selected-card'>
          <img className='h-30 object-cover rounded-xl' src={movie.image} alt="movie"/>
          <h2>{movie.title}</h2>
          <h4>{movie.release_date}</h4>
          <h4>{movie.description}</h4>
          <form onSubmit={handleSubmit}>
            <label>Comment</label>
            <input type='text' name='comment' placeholder='Write a comment' onChange={handleChange}/>
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;
              return (
                <label>
                  <input
                    type= "radio"
                    name= "rating"
                    value= {rating}
                    onClick= {() => setRating(ratingValue + 1)}
                  />
                    <FaStar
                      icon="fa-solid fa-star"
                      className='star'
                      color= {ratingValue < (hover || rating) ? "#ffc107" : "#e4e5e9"}
                      size = {30}
                      onMouseEnter= {() => setHover(ratingValue + 1)}
                      onMouseLeave= {() => setHover(null)}
                    />
                </label>
              )
            })}
            <button>Submit</button>
          </form>
          <div>
            {movie.reviews == false ? null : movie.reviews?.map((review) => <h3 onClick={navigateToUserPage}>{review.comment} {starObject[review.rating]}</h3>)}
          </div>
          <button onClick={handleClick}>Return to Home</button>
        </div>
      </div>
    </div>
  )
}

export default SelectedMovie