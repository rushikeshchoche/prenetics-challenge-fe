import config from "../config";
import { handleResponse } from "../helpers/handle-response";
import { authHeader } from "../helpers/auth-header";

function getUserData() {
  const requestOptions = { method: "GET", headers: authHeader() };
  return fetch(`${config.apiUrl}/users/retrieveUser`, requestOptions).then(
    handleResponse
  );
}

export const userService = {
  getUserData,
};
