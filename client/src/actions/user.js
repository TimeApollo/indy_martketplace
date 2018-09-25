import { push } from 'connected-react-router';

export const GET_ONE_USER = 'GET_USER';


export const getOneUser = () => dispatch => {
  fetch('/api/user')
      .then( res => res.json() )
      .then( data => {
          console.log(data.user)
          dispatch({ type: GET_ONE_USER, convos: data.user })
      } )
}