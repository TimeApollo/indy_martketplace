import { push } from "connected-react-router";

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT_USER_REQUEST = 'LOGOUT_USER_REQUEST';
export const LOGOUT_USER_RESPONSE = 'LOGOUT_USER_RESPONSE';
export const IS_LOGGING_IN = "IS_LOGGING_IN";
export const IS_REGISTERING = "IS_REGISTERING";
export const EDIT_PROFILE = "EDIT_PROFILE";
export const IS_EDITING = "IS_EDITING";

export const registerUser = ({
  firstName,
  lastName,
  email,
  password,
  isArtist
}) => dispatch => {
  dispatch(isRegistering())
  const header = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      isArtist: isArtist,
    })
  };

  fetch("/api/auth/register", header)
    .then(response => response.json())
    .then(registerResponse => {
      console.log("hello",registerResponse);
      if (registerResponse.hasOwnProperty("error")) {
        if (registerResponse.error.hasOwnProperty('errmsg')){
          dispatch(registerFail({error: true, errorMessage: 'Email is already used. Please use another Email Address.'}));
        } else {
          dispatch(registerFail({error: true, errorMessage: 'Issue with registering. Please try again.'}))
        }
      } else {
        dispatch(
          registerSuccess(registerResponse)
        );
        dispatch(push("/profile"));
      }
    });
};

export const registerSuccess = (user) => {
  return {
    type: REGISTER_SUCCESS,
    payload: user
  };
};

export const registerFail = (user) => {
  return {
    type: REGISTER_FAIL,
    payload: user
  };
};

export const isRegistering = () => {
  return {
    type: IS_REGISTERING
  }
}

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
        dispatch(push("/profile"));
      }
    });
};

export const loginSuccess = user => {
  return {
    type: LOGIN_SUCCESS,
    payload: user
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

export function logoutUser() {
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  return dispatch => {
    dispatch(logoutUserRequest());

    fetch('api/auth/logout', options)
      .then(res => res.json())
      .then(data => {
        dispatch(logoutUserReceived(data));

        return data;
      });
  };
}

const logoutUserRequest = () => {
  return {
    type: LOGOUT_USER_REQUEST,
  };
};

const logoutUserReceived = data => {
  return {
    type: LOGOUT_USER_RESPONSE,
    message: data.message
  };
};

