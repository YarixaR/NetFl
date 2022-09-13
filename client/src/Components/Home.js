import React from 'react'
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";

function Home() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        {/* <Route exact path="/shows">
          <Shows />
        </Route>
        <Route exact path="/movies">
          <Movies />
        </Route>
        <Route exact path="/user-page">
          <User />
        </Route> */}
      </Switch>
    </div>
  )
}

export default Home