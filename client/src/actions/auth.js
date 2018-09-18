import { push } from 'connected-react-router';

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const registerUser = ({ firstName , lastName , email , password }) => ( dispatch ) => {
  const header = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "firstName": firstName,
      "lastName": lastName,
      "email": email,
      "password": password
    })
  }

  fetch('/api/auth/register' , header )
    .then( response => response.json() )
    .then( registerResponse => {
      console.log(registerResponse)
      if ( registerResponse.hasOwnProperty( 'errors' )){
        dispatch( registerFail() )
      } else {
        dispatch( registerSuccess( registerResponse.name , registerResponse.userId , registerResponse.token ));
        dispatch( push ( '/' ))
      }
    })
}

export const registerSuccess = ( name , userId ) => {
  return {
    type: REGISTER_SUCCESS,
    payload: {
      name,
      userId
    }
  }
}

export const registerFail = () => {
  return {
    type: REGISTER_FAIL,
  }
}

export const loginUser = ({ email , password }) => ( dispatch ) => {
  const header = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "email": email,
      "password": password
    })
  }

  fetch('/api/auth/login' , header )
    .then( response => response.json() )
    .then( loginResponse => {
      console.log(loginResponse)
      if ( loginResponse.hasOwnProperty( 'errors' )){
        dispatch( loginFail() )
      } else {
        dispatch( loginSuccess( loginResponse.userId , loginResponse.token ));
        dispatch( push ( '/' ))
      }
    })
}

export const loginSuccess = ( userId, token ) => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      userId, 
      token
    }
  }
}

export const loginFail = () => {
  return {
    type: LOGIN_FAIL,
  }
}