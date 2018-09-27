export const GET_MESSAGES = 'GET_MESSAGES';
export const POST_MESSAGE = 'POST_MESSAGE';
export const MSG_POPUP = 'MSG_POPUP';
export const MSG_CLOSE = 'MSG_CLOSE';

export const getMessages = ({userId}) => dispatch => {
    fetch('/api/messages/' + userId)
        .then( res => res.json() )
        .then( data => {
            console.log(data)
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
            emails: ["aj@gm", email],
            message: message,
            email: "aj@gm"
        })
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
      })
      .catch(function(err) {
          console.log("something went wrong", err)
      })
}

export const createMsgPopup = () => dispatch => {
    dispatch({ type: MSG_POPUP })
}

export const exitMsgPopup = () => dispatch => {
    dispatch({ type: MSG_CLOSE })
}