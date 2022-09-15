import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from "./NavBar"
import UserMovieCard from './UserMovieCard'

function UserPage({reviews, renderingNewReviews, renderingWithoutDeleted}){

    // ! This page will render a USER's liked MOVIES and if a review
    // ! is created, should render the REVIEWS (review div not made yet)

    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(false)

    const params = useParams()
    const {id} = params

    useEffect(()=>{
        fetch(`/users/${id}`)
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    setUser(user)
                    setLoading(false)
                })
            }else {
                res.json().then(data => setErrors(data.error))
            }
        })     
    }, [])

    // const updatedMovieCard = (deletedReview) => {
    //     const updatedUserData = user.movies?.filter((movie) => {
    //         if (movie.id !== deletedReview.movie_id) return true
    //       })
          
    // }

    if(loading) return <h1>Loading</h1>
    if(errors) return <h1>{errors}</h1>
    return (
        <div className='userPage'>
          <NavBar />
          <div className='h-12 pt-5 flex items-center overflow-hidden h-screen justify-center'>
            <h1 class="font-medium leading-tight pt-3 text-5xl">Hello, {user.name}</h1>
            <img
                src={user.avatar}
                class="rounded-full w-20 relative ml-10 "
                alt="Avatar"
            />
            </div>
                {user.movies.map(movie => <UserMovieCard 
                    key = {movie.id}
                    movieId = {movie.id}
                    title = {movie.title}
                    image = {movie.image}
                    user = {user}
                    reviews = {reviews}
                    setUser = {setUser}
                    renderingNewReviews = {renderingNewReviews}
                    renderingWithoutDeleted = {renderingWithoutDeleted}
                />)}
        </div>
    )
}

export default UserPage

