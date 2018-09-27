export const GET_ARTWORK = 'GET_ARTWORK'
export const POST_ARTWORK = 'POST_ARTWORK'

// export const uploadArtwork = () => dispatch => {
//     fetch('')
// }
export const submitUpload = ({ meduim, forSale, uploadFile, styles, title }) => {
    return {
        type: UPLOAD_ART,
        payload: {
            meduim,
            forSale,
            uploadFile,
            styles
            title
        }
    }
}