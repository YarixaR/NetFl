import { React, useState, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'

function UserMovieCard({movieId, title, image, user, setUser, reviews, renderingNewReviews, renderingWithoutDeleted, updatedMovieCard}) {

  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(null);
  const [exsitingReviewId, setExsitingReviewId] = useState("")

  const [editedComment, setEditedComment] = useState("")
  const [isClicked, setIsClicked] = useState(false)

  const refOne = useRef(null)

  const handleExsitingReview = (e, id) => {
    e.preventDefault()
    if(refOne.current.contains(e.target)) {
      setIsClicked(!isClicked)
      setExsitingReviewId(id)
    }
  }
  
  const handleChange = (e) => {
    setEditedComment(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`/reviews/${exsitingReviewId}`, {
      method: 'PATCH',
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify({
        rating: rating-1,
        comment: editedComment,
        user_id: user.id,
        movie_id: movieId
      })
    }).then((resp) => resp.json())
      .then(updatedObj => renderingNewReviews(updatedObj))
  }

  const handleDelete = (review) => {
    const id = review.id
    fetch(`/reviews/${id}`, {
      method: 'DELETE'
    }).then(() => { 
      const newUser = { ...user }
      newUser.movies = user.movies?.filter((movie) => {
        if (movie.id !== review.movie_id) return true
      })
      setUser(newUser)
      renderingWithoutDeleted(review)
    })
  }

  const filteredReviews = reviews?.filter((review) => {
    if (review.movie_id === movieId && review.user_id === user.id) return true
  })

  const history = useHistory()
  const handleClick = () => {
    history.push(`/movie/${movieId}`)
  }

  const starObject = {1:'⭐', 2:'⭐⭐', 3:'⭐⭐⭐', 4:'⭐⭐⭐⭐', 5:'⭐⭐⭐⭐⭐' }
  
  return (
    <div>
        <img src={image} alt="movie" onClick={handleClick}/>
        <h2>{title}</h2>
        {filteredReviews == false ? null : filteredReviews?.map((review) =>
          <div>
            <h3 ref={refOne} onClick={e => handleExsitingReview(e, review.id)}>{review.comment} {starObject[review.rating]}</h3>
            <button onClick={e => handleDelete(review)}>Delete</button>
          </div>
        )}
        {isClicked
          ? <form onSubmit={handleSubmit}>
              <input type='text' name='comment' placeholder='Please submit new comment' value={editedComment} onChange={handleChange}></input>
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
          : null
        }
    </div>
  )
}

export default UserMovieCard