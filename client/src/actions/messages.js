export const GET_MESSAGES = 'GET_MESSAGES';
export const MSG_POPUP = 'MSG_POPUP';
export const MSG_CLOSE = 'MSG_CLOSE';

export const getMessages = () => dispatch => {
    fetch('/api/messages/69')
        .then( res => res.json() )
        .then( data => {
            console.log(data.convos)
            dispatch({ type: GET_MESSAGES, convos: data.convos })
        } )
}

export const createMsgPopup = () => dispatch => {
    console.log()
    dispatch({ type: MSG_POPUP })
}

export const exitMsgPopup = () => dispatch => {
    dispatch({ type: MSG_CLOSE })
}