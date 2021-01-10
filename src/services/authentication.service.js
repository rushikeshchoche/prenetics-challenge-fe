import { BehaviorSubject } from "rxjs";
import config from "../config";
import { handleResponse } from "../helpers/handle-response";

const currentUserSubject = new BehaviorSubject(
  JSON.parse(sessionStorage.getItem("currentUser"))
);

export const authenticationService = {
  login,
  logout,
  currentUser: currentUserSubject.asObservable(),
  get currentUserValue() {
    return currentUserSubject.value;
  },
};

function login(email, password) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  };

  return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
    .then(handleResponse)
    .then((user) => {
      // store user details and jwt token in session storage to keep user logged in between page refreshes
      sessionStorage.setItem("currentUser", JSON.stringify(user));
      currentUserSubject.next(user);

      return user;
    });
}

function logout() {
  // remove user from session storage to log user out
  sessionStorage.removeItem("currentUser");
  currentUserSubject.next(null);
}
