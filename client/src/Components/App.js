import { React, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import SelectedMovie from "./SelectedMovie"
import Movies from "./Movies"
import Shows from "./Shows"
import PostingNew from "./PostingNew";
import UserPage from "./UserPage";

function App() {
  const [ movies, setMovies ] = useState([])
  const [ userId, setUserId ] = useState(0)
  const [ userData, setUserData ] = useState([])
  const [ reviews, setReviews ] =useState([])


  useEffect(() => {
    fetch('/movies')
    .then((res) => {
      if (res.ok) {
        res.json().then((data => setMovies(data)))
      }
  })}, [ userId ])

  useEffect(() => {
    fetch(`/users/${userId}`)
    .then((res) => res.json())
    .then((data) => setUserData(data))
  }, [])

  useEffect(() => {
    fetch('/reviews')
    .then((res) => res.json())
    .then((data) => setReviews(data))
  }, [])

  const settingUserId = (id) => {
    setUserId(id)
  }

  const renderingNewMovie = (newMovie) => {
    setMovies([...movies, newMovie])
  }

  const renderingNewReviews = (updatedObj) => {
    const updatedResource = reviews
      ? reviews.map((review) => {
      if (review.id === updatedObj.id) {
        return updatedObj
      } else {return review}
    }) : null
    setReviews(updatedResource)
  }

  const renderingWithoutDeleted = (deletedReview) => {
    const updatedReviews = reviews?.filter((review) => {
      if (review.id !== deletedReview.id) return true
    })
    setReviews(updatedReviews)
  }

  return (
    <div>
      <Switch>
        <Route path="/home">
          <Home movies={movies}/>
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/movie/:id">
          <SelectedMovie userId={userData.id}/>
        </Route>
        <Route path="/movies">
          <Movies movies={movies}/>
        </Route>
        <Route path="/shows">
          <Shows shows={movies}/>
        </Route>
        <Route path="/newposting">
          <PostingNew renderingNewMovie={renderingNewMovie}/>
        </Route>
        <Route exact path="/user/:id">
          <UserPage
            reviews={reviews}
            movies={movies}
            renderingNewReviews={renderingNewReviews}
            renderingWithoutDeleted={renderingWithoutDeleted }  
          />
        </Route>
        <Route exact path="/">
          <Login settingUserId={settingUserId}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;


  // console.log(userData.id)

  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [currentUser, setCurrentUser] = useState(null);

  // useEffect(() => {
  //   fetch("/me").then((res) => {
  //     if (res.ok) {
  //       res.json().then((user) => {
  //         setCurrentUser(user);
  //         setIsAuthenticated(true);
  //       });
  //     }
  //   });
  // }, []);

  // if (!isAuthenticated) {
  //   return <div></div>;
  // }