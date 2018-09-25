import { push } from "connected-react-router";

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const IS_LOGGING_IN = "IS_LOGGING_IN";
export const GET_ONE_USER = "GET_USER";

export const registerUser = ({
  firstName,
  lastName,
  email,
  password
}) => dispatch => {
  const header = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    })
  };

  fetch("/api/auth/register", header)
    .then(response => response.json())
    .then(registerResponse => {
      console.log(registerResponse);
      if (registerResponse.hasOwnProperty("errors")) {
        dispatch(registerFail());
      } else {
        dispatch(
          registerSuccess(
            registerResponse.name,
            registerResponse.userId,
            registerResponse.token
          )
        );
        dispatch(push("/"));
      }
    });
};

export const registerSuccess = (name, userId) => {
  return {
    type: REGISTER_SUCCESS,
    payload: {
      name,
      userId
    }
  };
};

export const registerFail = () => {
  return {
    type: REGISTER_FAIL
  };
};

export const loginUser = ({ email, password }) => dispatch => {
  dispatch(isLoggingIn());

  const header = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  };

  fetch("/api/auth/login", header)
    .then(response => response.json())
    .then(loginResponse => {
      console.log(loginResponse);
      if (!loginResponse) {
        dispatch(loginFail());
      } else if (loginResponse.hasOwnProperty("errors")) {
        dispatch(loginFail());
      } else {
        dispatch(loginSuccess(loginResponse));
        dispatch(push("/"));
      }
    });
};

export const loginSuccess = user => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      user
    }
  };
};

export const loginFail = () => {
  return {
    type: LOGIN_FAIL
  };
};

export const isLoggingIn = () => {
  return {
    type: IS_LOGGING_IN
  };
};

export const getOneUser = () => dispatch => {
  fetch("/api/user")
    .then(res => res.json())
    .then(data => {
      console.log(data.user);
      dispatch({ type: GET_ONE_USER, convos: data.user });
    });
};
