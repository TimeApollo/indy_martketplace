import {
    IS_UPLOADING,
    UPLOAD_FAIL,
    // UPLOAD_SUCCESS,
    IS_GETTING_ARTWORK,
    GET_ARTWORK_SUCCESS,
    IS_GETTING_ARTIST_ARTWORK,
    GET_ARTIST_ARTWORK_SUCCESS,
    GET_ARTWORK_FITLERED_SUCCESS
} from "../actions/art";

const initialState = {
    upload: {
        isUploadingSuccess: false,
        isUploadingFail: false,
        isUploading: false,
    },
    artwork: [],
    isGettingArtwork: false,
    userArtwork: [],
    isGettingArtistArtwork: false,
    filteredArtwork: []
}

const artReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_UPLOADING:
            return {
                ...state,
                upload: {
                    ...state.upload,
                    isUploading: true,
                    isUploadingFail: false,
                    isUploadingSuccess: false
                }
            }
        case UPLOAD_FAIL:
            return {
                ...state,
                upload: {
                    ...state.upload,
                    isUploadingFail: true,
                    isUploading: false
                }
            }
        // case UPLOAD_SUCCESS:
        //  return {
        //      ...state,
        //      upload: {

        //      }
        //  }
        case IS_GETTING_ARTWORK:
            return {
                ...state,
                isGettingArtwork: true
            }
        case GET_ARTWORK_SUCCESS:
            return {
                ...state,
                isGettingArtwork: false,
                artwork: action.payload
            }
        case GET_ARTIST_ARTWORK_SUCCESS:
            return {
                ...state,
                isGettingArtistArtwork: false,
                userArtwork: action.payload
            }
        case IS_GETTING_ARTIST_ARTWORK:
            return {
                ...state,
                isGettingArtistArtwork: true,
            }
        case GET_ARTWORK_FITLERED_SUCCESS:
            return {
                ...state,
                isGettingArtistArtwork: false,
                artwork: action.payload,
                filteredArtwork: action.payload,
            }
        default:
            return state;
    }
}

export default artReducer;