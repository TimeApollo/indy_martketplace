import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  IS_LOGGING_IN,
  LOGIN_FAIL,
  // LOGOUT_USER_REQUEST,
  // LOGOUT_USER_RESPONSE,
  IS_REGISTERING,
  REGISTER_FAIL
} from "../actions/auth";

const initialState = {
  auth: {
    token: null
  },
  register: {
    isRegisterSuccess: false,
    isRegisterFail: false,
    isRegistering: false,
    error: false,
    errorMessage: ''
  },
  login: {
    isLoginSuccess: false,
    isLoginFail: false,
    isLoggingIn: false,
  },
  user: {
    firstName: "",
    lastName: "",
    email: "",
    email_lower: "",
    about: "",
    mediums: [],
    styles: [],
    userId: null,
    isLoggedIn: false,
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
          isRegistering: false
        },
        user: {
          userId: action.payload._id,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          email: action.payload.email,
          email_lower: action.payload.email_lower,
          about: action.payload.about,
          mediums: action.payload.mediums,
          styles: action.payload.styles,
          isLoggedIn: true
        }
      };
    case REGISTER_FAIL:
      return {
        ...state,
        register: {
          ...state.register,
          isRegisterFail: true,
          isRegistering: false,
          error: action.payload.error,
          errorMessage: action.payload.errorMessage
        }
      };
    case IS_REGISTERING:
      return {
        ...state,
        register: {
          isRegisterSuccess: false,
          isRegisterFail: false,
          isRegistering: true,
          error: false,
          errorMessage: ''
        }
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        auth: {
          ...state.auth,
          token: action.payload.token
        },
        login: {
          ...state.login,
          isLoginSuccess: true,
          isLoggingIn: false
        },
        user: {
          userId: action.payload._id,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          email: action.payload.email,
          email_lower: action.payload.email_lower,
          about: action.payload.about,
          mediums: action.payload.mediums,
          styles: action.payload.styles
        }
      };
    case IS_LOGGING_IN:
      return {
        ...state,
        login: {
          ...state.login,
          isLoggingIn: true,
          isLoginSuccess: false,
          isLoginFail: false
        }
      };
    case LOGIN_FAIL:
      return {
        ...state,
        login: {
          ...state.login,
          isLoginFail: true,
          isLoggingIn: false
        }
      };
    default:
      return state;

    // case LOGOUT_USER_REQUEST:
    //   return {
    //     ...state,
    //     user: {
    //       ...user,
    //       isloggedIn: false,
    //       fetching: true,
    //     }
    //   };
    // case LOGOUT_USER_RESPONSE:
    //   return {
    //     ...state,
    //     user: initialState.user,
    //     message: action.message,
    //     fetching: false,
    //   };
  }
};

export default authReducer;
