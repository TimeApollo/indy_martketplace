export const GET_ARTWORK = 'GET_ARTWORK'
export const POST_ARTWORK = 'POST_ARTWORK'

// export const uploadArtwork = () => dispatch => {
//     fetch('')
// }
export const submitUpload = ({ medium, forSale, uploadFile, styles, title }) => {
    dispatchEvent(isUploading())
    const header = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            medium: medium,
            forSale: forSale,
            uploadFile: uploadFile,
            styles: styles,
            title: title
        })
    }
    fetch("api/artwork/upload", header)
    .then(response => response.json())
    .then(uploadResponse => {
        if (!uploadResponse) {
            dispatch(uploadFail)
        }
        console.log(uploadResponse);
        // dispatchEvent(downloadUpload())
    })
}

export const isUploading = () => {
    return {
        type: IS_UPLOADING
    }
}