// import { useEffect, useState } from 'react'
// import {useParams} from 'react-router-dom'

// function UserPage(){

//     // ! This page will render a USER's liked MOVIES and if a review
//     // ! is created, should render the REVIEWS (review div not made yet)

//     const [user, setUser] = useState()
//     const [loading, setLoading] = useState(true)
//     const [errors, setErrors] = useState(false)

//     const params = useParams()
//     const {id} = params

//     useEffect(()=>{
//         fetch(`/users/${id}`)
//         .then(res => {
//             if(res.ok){
//                 res.json().then(user => {
//                     setUser(user)
//                     setLoading(false)
//                 })
//             }else {
//                 res.json().then(data => setErrors(data.error))
//             }
//         })
       
//     },[])

//     if(loading) return <h1>Loading</h1>
//     if(errors) return <h1>{errors}</h1>
//     return (
//         <div>
//             <h1>Hello, {user.name}</h1>
//                 {user.movies.map(movie => (
//                 <div className="user-page">
//                     <img src={movie.image} alt={movie.name} />
//                     <h4>Name: {movie.name}</h4>
//                     <h4>Release Date: {movie.release_date}</h4>
//                     <h4>Description: {movie.description}</h4>
//                     <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
//                 </div>
//                 ))}
//         </div>
//     )
// }

// export default UserPage
