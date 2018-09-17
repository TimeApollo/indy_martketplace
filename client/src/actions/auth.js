import { push } from 'connected-react-router';

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';

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
    tyope: REGISTER_FAIL,
  }
}