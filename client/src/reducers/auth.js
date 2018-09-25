import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  GET_ONE_USER,
  IS_LOGGING_IN,
  LOGIN_FAIL
} from "../actions/auth";

const initialState = {
  auth: {
    token: null
  },
  register: {
    isRegisterSuccess: false,
    isRegisterFail: false,
    isRegisteringUser: false
  },
  login: {
    isLoginSuccess: false,
    isLoginFail: false,
    isLoggingIn: false
  },
  user: {
    firstName: "",
    lastName: "",
    email: "",
    about: "",
    mediums: [],
    styles: [],
    userId: null
  },
  users: {}
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        auth: {
          ...state.auth,
          token: action.payload.token
        },
        register: {
          ...state.register,
          isRegisterSuccess: true,
          isRegisteringUser: false
        }
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        auth: {
          ...state.auth,
          token: action.payload.user.token,
        },
        login: {
          ...state.login,
          isLoginSuccess: true,
          isLoggingIn: false,
        },
        user: {
          userId: action.payload.user.id,
          firstName: action.payload.user.firstName,
          lastName: action.payload.user.lastName,
          email: action.payload.user.email,
          about: action.payload.user.about,
          mediums: action.payload.user.mediums,
          styles: action.payload.user.styles,
        }
      };
    case IS_LOGGING_IN:
      return {
        ...state,
        login: {
          ...state.login, 
          isLoggingIn: true,
          isLoginSuccess: false,
          isLoginFail: false,
        }
      };
    case LOGIN_FAIL:
      return {
        ...state,
        login: {
          ...state.login,
          isLoginFail: true,
          isLoggingIn: false,
        }
      }
    case GET_ONE_USER:
      return {
        ...state,
        user: action.payload.user
      };
    default:
      return state;
  }
};

export default authReducer;
