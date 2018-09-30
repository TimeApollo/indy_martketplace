import {
  GET_ONE_USER,
} from "../actions/auth";

const initialState = {
  user: {
    firstName: "",
    lastName: "",
    email: "",
    about: "",
    mediums: [],
    styles: [],
    userId: null
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ONE_USER:
      return {
      ...state,
      user: {
        userId: action.payload.user._id,
        firstName: action.payload.user.firstName,
        lastName: action.payload.user.lastName,
        email: action.payload.user.email,
        about: action.payload.user.about,
        mediums: action.payload.user.mediums,
        styles: action.payload.user.styles
      }
    }
    default:
      return state;
  }
}

export default userReducer
