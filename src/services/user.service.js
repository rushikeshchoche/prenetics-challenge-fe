import config from "../config";
import { handleResponse } from "../helpers/handle-response";
import { authHeader } from "../helpers/auth-header";

function getUserData({ email }) {
  const requestOptions = { method: "GET", headers: authHeader() };
  return fetch(
    `${config.apiUrl}/users/retrieveUser?email=${email}`,
    requestOptions
  ).then(handleResponse);
}

function getGeneticResults({ email }) {
  const requestOptions = { method: "GET", headers: authHeader() };
  return fetch(
    `${config.apiUrl}/users/retrieveGenetic?email=${email}`,
    requestOptions
  ).then(handleResponse);
}

export const userService = {
  getUserData,
  getGeneticResults,
};
