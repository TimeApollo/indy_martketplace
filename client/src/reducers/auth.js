import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  IS_LOGGING_IN,
  LOGIN_FAIL,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_RESPONSE,
  IS_REGISTERING,
  REGISTER_FAIL,
  EDIT_PROFILE,
  IS_EDITING,
  DELETE_USER_SUCCESS
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
    errorMessage: ""
  },
  login: {
    isLoginSuccess: false,
    isLoginFail: false,
    isLoggingIn: false
  },
  logout: {
    isLoggingOut: false,
    message: "",
    success: false
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
    isArtist: false
  }
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
          isLoggedIn: true,
          isArtist: action.payload.isArtist
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
          errorMessage: ""
        }
      };
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
          styles: action.payload.styles,
          isLoggedIn: true,
          isArtist: action.payload.isArtist
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
    case EDIT_PROFILE:
      return {
        ...state,
        user: {
          ...state.user,
          isPasswordUpdated: true,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          about: action.payload.about,
          mediums: action.payload.mediums,
          styles: action.payload.styles,
          isArtist: action.payload.isArtist
        }
      };
    case IS_EDITING:
      return {
        ...state,
        isPasswordUpdated: false
      };
    default:
      return state;

    case LOGOUT_USER_REQUEST:
      return {
        ...state,
        logout: {
          isLoggingOut: true
        }
      };
    case LOGOUT_USER_RESPONSE:
      return {
        ...state,
        user: initialState.user,
        logout: {
          isLoggingOut: false,
          message: action.payload.message,
          success: action.payload.success
        }
      };
  }
};

export default authReducer;
