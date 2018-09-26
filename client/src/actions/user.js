import { push } from "connected-react-router";
export const GET_ONE_USER = "GET_ONE_USER";

export const getOneUser = () => dispatch => {
  fetch("/api/user")
    .then(res => res.json())
    .then(data => {
      console.log(data.user);
      dispatch({ type: GET_ONE_USER, payload: data.user });
    });
};