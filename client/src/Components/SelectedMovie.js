import { React, useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'

function SelectedMovie({ userId, handleAddReviews}) {
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
        // .then(window.location.reload(false))
    e.target.reset()
  }

  const navigateToUserPage = () => {
    history.push(`/user/${userId}`)
  }

  const starObject = {1:'⭐', 2:'⭐⭐', 3:'⭐⭐⭐', 4:'⭐⭐⭐⭐', 5:'⭐⭐⭐⭐⭐' }

  return (
    <div className="flex flex-wrap justify-center mt-2">
      <div >
      <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <img className='flex justify-center object-cover rounded-xl' src={movie.image} alt="movie"/>
      <div className=''>
        <h2 className='font-bold text-lg text-center'>{movie.title}</h2>
        {/* <h4>{movie.genre}</h4> */}
        <h4 className='font-bold text-lg text-center'>{movie.release_date}</h4>
      </div>
      <h4 className="text-center text-gray-400 py-2 mr-2">{movie.description}</h4>
      <div className="w-full max-w-sm">
      <form className="shadow-md rounded-lg bg-black h-96 rounded px-8 pt-6 pb-8 mb-4 " onSubmit={handleSubmit}>
      <section>
              <h1 className="text-xl dark:text-white font-bold text-center">
                Leave a review!
              </h1>
            </section>
      <div className='text-lg text-center mt-10'>
        {movie.reviews == false ? null : movie.reviews?.map((review) => <h3 onClick={navigateToUserPage}>{review.comment} {starObject[review.rating]}</h3>)}
      </div>
        <input className="text-center flex justify-center rounded-lg ml-10 mt-10 w-60 p-2 bg-gray-700 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type='text' name='comment' placeholder='Write a comment' onChange={handleChange}/>
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
        <button className='text-white-700 hover:text-white border border-white-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-2 py-0.5 text-center ml-1 mr-1 mt-1 mb-1 dark:border-white-500 dark:text-white-500 dark:hover:text-white dark:hover:bg-white-600 dark:focus:ring-white-900'>Submit</button>
        <button className='text-white-700 hover:text-white border border-white-700 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-2 py-0.5 text-center ml-1 mr-1 mt-1 mb-1 dark:border-white-500 dark:text-white-500 dark:hover:text-white dark:hover:bg-white-600 dark:focus:ring-white-900' onClick={handleClick}>Return to Home</button>
      </form>
      </div>
    </div>
  )
}

export default SelectedMovie