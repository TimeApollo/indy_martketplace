import {
    IS_UPLOADING,
    UPLOAD_FAIL,
    // UPLOAD_SUCCESS,
    IS_GETTING_ARTWORK,
    GET_ARTWORK_SUCCESS,
    IS_GETTING_ARTIST_ARTWORK,
    GET_ARTIST_ARTWORK_SUCCESS,
    GET_ARTWORK_FITLERED_SUCCESS,
    FILTER_ART_ARRAY,
    IMG_POPUP,
    EXIT_IMG_POPUP,
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
    imgPopup: false,
    singleArt: {},
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
        case IMG_POPUP:
            console.log("single artpiece: ", action.payload)
            return {
                ...state,
                imgPopup: true,
                singleArt: action.payload
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
        case FILTER_ART_ARRAY:
            console.log(action.payload)
            let filteredArtArray = []

            filteredArtArray = state.artwork.filter( art => {
                if ( !action.payload.mediums.length && !action.payload.styles.length ){
                    return true
                } else if ( !action.payload.mediums.length && action.payload.styles.length ){
                    return action.payload.styles.some( style => art.styles.includes( style ))
                } else if ( action.payload.mediums.length && !action.payload.styles.length ){
                    return action.payload.mediums.some( medium => art.medium === medium)
                } else {
                    return action.payload.mediums.some( medium => { 
                        if (art.medium === medium){
                            return true
                        } else {
                            return action.payload.styles.some( style => art.styles.includes( style ))
                        }
                    })
                }
            })
            
            return {
                ...state,
                filteredArtwork: filteredArtArray,
            }
        default:
            return state;
    }
}

export default artReducer;