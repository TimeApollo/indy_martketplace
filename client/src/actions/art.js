export const GET_ARTWORK = "GET_ARTWORK";
export const POST_ARTWORK = "POST_ARTWORK";
export const IS_GETTING_ARTWORK = "IS_GETTING_ARTWORK";
export const IS_UPLOADING = "IS_UPLOADING";
export const UPLOAD_FAIL = "UPLOAD_FAIL";
export const GET_ARTWORK_SUCCESS = "GET_ARTWORK_SUCCESS";
export const IS_GETTING_ARTIST_ARTWORK = "IS_GETTING_ARTIST_ARTWORK";
export const GET_ARTIST_ARTWORK_SUCCESS = "GET_ARTIST_ARTWORK_SUCCESS";
export const IMG_POPUP = "IMG_POPUP";
export const EXIT_IMG_POPUP = "EXIT_IMG_POPUP";

export const submitUpload = uploadFormData => dispatch => {
  // dispatchEvent(isUploading())
  // console.log(uploadFormData);
  let formData = new FormData();
  for (let name in uploadFormData) {
    if(Array.isArray(uploadFormData[name])){
      //loop through styles array
      for(let i = 0; i<uploadFormData[name].length; i++) {
        formData.append('styles[]',uploadFormData[name][i])
      }
    } else{
      formData.append(name, uploadFormData[name]);
    }
  }
  for(let value of formData.values()) {
    console.log(value)
  }
  const header = {
    method: "POST",
    body: formData
  };
  fetch("/api/artwork/upload/", header)
    .then(response => response.json())
    .then(uploadResponse => {
      // if (!uploadResponse) {
      //     dispatch(uploadFail)
      // }
      console.log(uploadResponse);
      // dispatchEvent(downloadUpload())
    });
};

export const isUploading = () => {
    return {
        type: IS_UPLOADING
    }
}

export const uploadFail = () => {
  return {
    type: UPLOAD_FAIL
  }
}

export const getArtwork = () => dispatch => {
  dispatch(isGettingArtwork())

  const header = {
    headers: {
      "Content-Type": "application/json"
    }
  }

  fetch("/api/artwork/", header )
    .then( response => response.json())
    .then( artwork => {
      dispatch(getArtworkSuccess(artwork))
    })
}

export const isGettingArtwork = () => {
  return {
    type: IS_GETTING_ARTWORK
  }
}

export const getArtworkSuccess = (artwork) => {
  return {
    type: GET_ARTWORK_SUCCESS,
    payload: artwork 
  }
}

export const getArtistArtwork = (userId) => dispatch => {
  dispatch(isGettingArtistArtwork())

  const header = {
    headers: {
      "Content-Type": "application/json"
    }
  }

  fetch(`/api/artwork/${userId}`, header)
    .then(response => response.json())
    .then(artwork => {
      dispatch(getArtistArtworkSuccess(artwork))
    })
}

export const isGettingArtistArtwork = () => {
  return {
    type: IS_GETTING_ARTIST_ARTWORK
  }
}

export const getArtistArtworkSuccess = (artwork) => {
  return {
    type: GET_ARTIST_ARTWORK_SUCCESS,
    payload: artwork
  }
}

export const createImgPopup = (clickedId) => {
  return {
    type: IMG_POPUP,
    payload: clickedId 
  }
}

export const exitImgPopup = () => {
  return {
    type: EXIT_IMG_POPUP
  }
}
export const getArtworkAndFiltered = () => dispatch => {
  dispatch(isGettingArtwork())

  const header = {
    headers: {
      "Content-Type": "application/json"
    }
  }

  fetch("/api/artwork/", header )
    .then( response => response.json())
    .then( artwork => {
      dispatch(getArtworkAndFilteredSuccess(artwork))
    })
}

// export const getArtworkAndFilteredSuccess = (artwork) => {
//   return {
//     type: GET_ARTWORK_FITLERED_SUCCESS,
//     payload: artwork 
//   }
// }
