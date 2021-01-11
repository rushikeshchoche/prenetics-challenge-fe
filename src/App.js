import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import Profile from "./components/Profile";
import { PrivateRoute } from "./components/PrivateRoute";
import { authenticationService } from "./services/authentication.service";
import { useStateValue } from "./components/StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    const currentUser = authenticationService.currentUserValue;
    if (currentUser && currentUser.token) {
      dispatch({
        type: "SET_TOKEN",
        token: currentUser.token,
      });
      if (currentUser.email) {
        dispatch({
          type: "SET_USER",
          user: { email: currentUser.email },
        });
      }
    }
  }, []);

  /* */
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch> */}
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
