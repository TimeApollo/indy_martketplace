export const GET_ARTWORK = "GET_ARTWORK";
export const POST_ARTWORK = "POST_ARTWORK";

// export const uploadArtwork = () => dispatch => {
//     fetch('')
// }
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
  fetch("api/artwork/upload", header)
    .then(response => response.json())
    .then(uploadResponse => {
      // if (!uploadResponse) {
      //     dispatch(uploadFail)
      // }
      console.log(uploadResponse);
      // dispatchEvent(downloadUpload())
    });
};

// export const isUploading = () => {
//     return {
//         type: IS_UPLOADING
//     }
// }
