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
    


    if(loading) return <h1>Loading</h1>
    if(errors) return <h1>{errors}</h1>
    return (
        <div className='userPage'>
          <NavBar userData={user}/>
            <div className='userPage-header-container'>
                <img
                    src={user.avatar}
                    className="rounded-full w-14 h-14 ml-10 mt-4"
                    alt="Avatar"
                />
                    <div>
                        <div className='h-10 text-5xl flex'>
                        <h1 class="font-medium leading-tight pt-3 ">Hello, {user.name}</h1>
                    </div>
            </div>
            <div className="userPage-contant-in-center">
                <div className='userPage-contant-container'>
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
                </div>
            </div>
        </div>
    )
}

export default UserPage
