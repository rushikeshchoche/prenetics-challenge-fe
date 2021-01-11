import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { authenticationService } from "../services/authentication.service";
import "./Login.css";
import { useStateValue } from "./StateProvider";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [{}, dispatch] = useStateValue();

  const signIn = (e) => {
    e.preventDefault();
    if (email && password) {
      authenticationService.login(email, password).then(
        (res) => {
          if (res.token) {
            // Logged In
            dispatch({
              type: "SET_TOKEN",
              token: res.token,
            });
            if (res.email) {
              dispatch({
                type: "SET_USER",
                user: { email: res.email },
              });
            }

            history.push("/");
          }
        },
        (error) => {
          setStatus(error);
        }
      );
    } else {
      setStatus("Email and Password are mandatory");
    }
  };

  return (
    <div className="login">
      <div className="login__container">
        <h2>Log In</h2>

        <form>
          <div className="formField">
            <label>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="formField">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            Log In
          </button>
          {status && <div className="login__alertDanger">{status}</div>}
        </form>
      </div>
    </div>
  );
}

export default Login;
