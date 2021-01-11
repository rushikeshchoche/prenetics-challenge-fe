import React, { useEffect } from "react";
import { userService } from "../services/user.service";
import { useStateValue } from "./StateProvider";
import "./Profile.css";
import logo from "../assets/prenetics-logo.svg";

function Profile() {
  const [{ user, genetic }, dispatch] = useStateValue();

  useEffect(() => {
    if (user) {
      userService.getUserData(user).then((res) => {
        if (res) {
          dispatch({
            type: "SET_USER",
            user: res,
          });
        }
      });
    }
  }, []);

  const getGeneticInfo = () => {
    if (user) {
      userService.getGeneticResults(user).then((res) => {
        if (res) {
          const parsedResult = JSON.parse(res.result);
          dispatch({
            type: "SET_USER_GENETIC",
            genetic: { policyCode: res.policyCode, result: parsedResult },
          });
        }
      });
    }
  };

  return (
    <div className="profile">
      <div className="profile__container">
        <div className="profile__screenContainer">
          <div className="profile__profileBadge qr-code-badge-layout">
            <div className="logo-and-labels">
              <div>
                <img className="PreneticsLogo" src={logo} alt="" />
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
          <div>
            <button className="Button Button-green" onClick={getGeneticInfo}>
              View Genetics Report
            </button>
            {genetic && (
              <div className="profile__geneticContainer">
                <div className="profile__geneticHeader">Genetic results</div>
                <div>Policy Code : {genetic.policyCode}</div>
                <div>Result: {genetic.result.type}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
