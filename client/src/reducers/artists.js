import {
  GET_ONE_USER,
} from "../actions/auth";

const initialState = {
  artist: {
    firstName: "",
    lastName: "",
    email: "",
    email_lower: "",
    about: "",
    mediums: [],
    styles: [],
    userId: null
  },
  
};

const artistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ONE_USER:
      return {
      ...state,
      artist: {
        userId: action.payload.user._id,
        firstName: action.payload.user.firstName,
        lastName: action.payload.user.lastName,
        email: action.payload.user.email,
        email_lower: action.payload.user.email_lower,
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
