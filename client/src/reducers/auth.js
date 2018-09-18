import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS
} from '../actions/auth'

const initialState = {
  auth: {
    token: null,
  },
  register: {
    isRegisterSuccess: false,
    isRegisterFail: false,
    isRegisteringUser: false,
  }
}

const authReducer = ( state = initialState , action ) => {
  switch ( action.type ){
    case REGISTER_SUCCESS:
      return {
        ...state,
        auth: {
          ...state.auth,
          token: action.payload.token,
        },
        register: {
          ...state.register,
          isRegisterSuccess: true,
          isRegisteringUser: false,
        }
      }
      case LOGIN_SUCCESS:
      return {
        ...state,
        auth: {
          ...state.auth, 
          token: action.payload.token,
        },
        login: {
          ...state.login,
          isLoginSuccess: true,
        }
      }
    default:
      return state
  } 
}

export default authReducer