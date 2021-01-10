import React, { useEffect } from "react";
import { userService } from "../services/user.service";
import { useStateValue } from "./StateProvider";
import "./Profile.css";
import logo from "../assets/prenetics-logo.svg";

function Profile() {
  const [{ token, user }, dispatch] = useStateValue();

  useEffect(() => {
    userService.getUserData().then((res) => {
      if (res) {
        dispatch({
          type: "SET_USER",
          user: res,
        });
      }
    });
  }, []);

  return (
    <div className="profile">
      <div className="profile__container">
        <div className="profile__screenContainer">
          <div className="profile__profileBadge qr-code-badge-layout">
            <div className="logo-and-labels">
              <div>
                <img className="PreneticsLogo" src={logo} alt="" />
              </div>
              <div>
                <div></div>
              </div>
            </div>
            <div>
              <div className="profile-details">
                <div className="detail">
                  <label>Last Name</label>
                  <div>{user?.lastName}</div>
                </div>
                <div className="detail">
                  <label>First Name</label>
                  <div>{user?.firstName}</div>
                </div>
                <div className="detail">
                  <label>Email Address</label>
                  <div>{user?.email}</div>
                </div>
                <div className="detail">
                  <label>Date of Birth</label>
                  <div>{user?.dob}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
