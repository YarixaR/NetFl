import React from "react";
import { Route, Switch } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        {/* <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/shows">
          <Shows />
        </Route>
        <Route exact path="/movies">
          <Movies />
        </Route>
        <Route exact path="/user-page">
          <User />
        </Route> */}
        <Route exact path="/login">
        <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
