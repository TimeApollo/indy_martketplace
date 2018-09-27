import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  IS_LOGGING_IN,
  LOGIN_FAIL,
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
    error: ''
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
          styles: action.payload.styles
        }

      };
    case REGISTER_FAIL:
      return {
        ...state,
        register: {
          ...state.register,
          isRegisterFail: true,
          isRegistering: false,
          error: action.payload.user
        }
      };
    case IS_REGISTERING:
      return {
        ...state,
        register: {
          isRegisterSuccess: false,
          isRegisterFail: false,
          isRegistering: true,
          error: ''
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
          email_lower: action.payload.email.toLowerCase(),
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
  }
};

export default authReducer;
