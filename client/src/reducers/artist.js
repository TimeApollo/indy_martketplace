import {
  GET_ONE_ARTIST,
  GOT_ALL_ARTISTS,
} from "../actions/artist";

const initialState = {
  artist: {
    firstName: "",
    lastName: "",
    email: "",
    email_lower: "",
    about: "",
    mediums: [],
    styles: [],
    userId: null,
    isArtist: false,
  },
  artists: []
  
};

const artistReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ONE_ARTIST:
      return {
      ...state,
      artist: {
        userId: action.payload._id,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        email_lower: action.payload.email_lower,
        about: action.payload.about,
        mediums: action.payload.mediums,
        styles: action.payload.styles,
        isArtist: action.payload.isArtist
      }
    }
    case GOT_ALL_ARTISTS: 
      return {
        ...state,
        artists: action.payload
      }
    default:
      return state;
  }
}

export default artistReducer
