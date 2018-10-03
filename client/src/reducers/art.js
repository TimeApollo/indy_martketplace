import {
    IS_UPLOADING,
    UPLOAD_FAIL,
    // UPLOAD_SUCCESS,
    IS_GETTING_ARTWORK,
    GET_ARTWORK_SUCCESS,
    IS_GETTING_ARTIST_ARTWORK,
    GET_ARTIST_ARTWORK_SUCCESS,
<<<<<<< HEAD
    IMG_POPUP,
    EXIT_IMG_POPUP
=======
    GET_ARTWORK_FITLERED_SUCCESS
>>>>>>> d98571bcc231a6a96f548dbd346978a3e04f0742
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
<<<<<<< HEAD
    imgPopup: false,
    currentImageId: "",
=======
    filteredArtwork: []
>>>>>>> d98571bcc231a6a96f548dbd346978a3e04f0742
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
            console.log("get_artwork_success log: ", action.payload)
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
        case IMG_POPUP:
            console.log("clicked id: ", action.payload)
            return {
                ...state,
                imgPopup: true
            }
        case EXIT_IMG_POPUP:
            return {
                ...state,
                imgPopup: false
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