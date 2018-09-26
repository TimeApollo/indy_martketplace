import { push } from "connected-react-router";
export const GET_ONE_USER = "GET_ONE_USER";

export const getOneUser = (userId) => dispatch => {
  fetch(`/api/user/${userId}`)
    .then(res => res.json())
    .then(data => {
      console.log(data.user);
      dispatch({ type: GET_ONE_USER, payload: data.user });
    });
};