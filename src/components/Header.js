import React from "react";
import { useHistory } from "react-router-dom";
import { authenticationService } from "../services/authentication.service";
import "./Header.css";
import logo from "../assets/prenetics-logo.svg";
import { useStateValue } from "./StateProvider";

function Header() {
  const history = useHistory();
  const [{ token }, dispatch] = useStateValue();

  const loadProfile = () => {
    history.push("/profile");
  };

  const logout = () => {
    authenticationService.logout();
    // Logged Out
    dispatch({
      type: "SET_TOKEN",
      token: null,
    });
    history.push("/");
  };
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__nav">
          <a className="logo-link" href="/">
            <img className="PreneticsLogo" src={logo} alt="" />
          </a>
          {token && (
            <div className="header__links">
              <div
                className="header__profileLink"
                href=""
                onClick={loadProfile}
              >
                My Profile
              </div>
              <a href="" onClick={logout}>
                Log Out
              </a>
            </div>
          )}
        </div>
        <div className="header__userconfigs">
          <div className="LanguageDropdown">
            <div className="selected-item">ENG</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
