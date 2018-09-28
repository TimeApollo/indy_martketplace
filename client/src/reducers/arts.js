import {
    IS_UPLOADING,
    UPLOAD_FAIL,
    UPLOAD_SUCCESS
} from "../actions/art";

const intitalState = {
    upload: {
        isUploadingSuccess: false,
        isUploadingFail: false,
        isUploading: false,

    }
}

const uploadReducer = (state = intitalState, action) => {
    switch (action.type) {
        case IS_UPLOADING:
         return {
             upload: {
                 ...state.upload,
                 isUploading: true,
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
    }
}