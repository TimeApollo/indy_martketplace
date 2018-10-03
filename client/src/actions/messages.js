export const GET_MESSAGES = 'GET_MESSAGES';
export const POST_MESSAGE = 'POST_MESSAGE';
export const POST_SINGLE_MESSAGE = 'POST_SINGLE_MESSAGE';
export const ASSIGN_CONVO = 'ASSIGN_CONVO';
export const MSG_POPUP = 'MSG_POPUP';
export const MSG_CLOSE = 'MSG_CLOSE';
export const DM_POPUP = 'DM_POPUP';
export const DM_CLOSE = 'DM_CLOSE';

export const getMessages = ({userId}) => dispatch => {
    fetch('/api/messages/' + userId)
        .then( res => res.json() )
        .then( data => {
            dispatch({ type: GET_MESSAGES, payload: data })
        } )
}

export const postMessage = ({senderEmail, email, message}) => dispatch => {
    fetch('/api/messages/', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            emails: [senderEmail, email],
            message: message,
            email: senderEmail
        })
    })
      .then(res => res.json())
      .then(res => {
        dispatch({type: POST_MESSAGE, payload: res})
        dispatch({type: POST_SINGLE_MESSAGE, payload: res})
      })
      .catch(function(err) {
          console.log("something went wrong", err)
      })
}

export const getSingleConvo = (convoId) => dispatch => {
    console.log(convoId)
    fetch('/api/messages/' + convoId)
        .then( res => res.json() )
        .then(res => {
            console.log(res);
        })
}

export const assignSingletoStore = (newConvoArray) => dispatch => {
    dispatch({type: ASSIGN_CONVO, payload: newConvoArray})
}

export const createMsgPopup = () => dispatch => {
    dispatch({ type: MSG_POPUP })
}

export const exitMsgPopup = () => dispatch => {
    dispatch({ type: MSG_CLOSE })
}

export const createDmPopup = () => dispatch => {
    dispatch({ type: DM_POPUP })
}

export const exitDmPopup = () => dispatch => {
    dispatch({ type: DM_CLOSE })
}