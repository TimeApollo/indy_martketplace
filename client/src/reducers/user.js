import {
  GET_ONE_USER
} from '../actions/user'

const initialState = {

  user: {},
  users: {},
  userID: null,
}

const userReducer = ( state = initialState , action ) => {
  switch ( action.type ){
    case GET_ONE_USER:
      return {
        ...state,
        user: action.payload.user
      }
    default:
      return state
  } 
}

export default userReducer