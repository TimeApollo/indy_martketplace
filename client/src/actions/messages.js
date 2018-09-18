export const GET_MESSAGES = 'GET_MESSAGES';

export const getMessages = () => dispatch => {
    fetch('/api/messages/69')
        .then( res => res.json() )
        .then( data => {
            console.log(data.convos)
            dispatch({ type: GET_MESSAGES, convos: data.convos })
        } )
}