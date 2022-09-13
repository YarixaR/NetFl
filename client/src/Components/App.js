import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";

function App() {
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

  return (
    <div>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/signup">
          <SignUp />
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
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
