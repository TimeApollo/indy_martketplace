export const GET_MESSAGES = 'GET_MESSAGES';
export const POST_MESSAGE = 'POST_MESSAGE';
export const MSG_POPUP = 'MSG_POPUP';
export const MSG_CLOSE = 'MSG_CLOSE';

// export const getMessages = () => dispatch => {
//     fetch('/api/messages/69')
//         .then( res => res.json() )
//         .then( data => {
//             console.log(data.convos)
//             dispatch({ type: GET_MESSAGES, convos: data.convos })
//         } )
// }

export const postMessage = (recipient, message) => dispatch => {
    fetch('/api/messages/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            emails: ["tj@gmail.com", "rj@gmail.com"],
            message: "to see if anything happens",
            email: "tj@gmail.com"
        })
    })
      .then(res => res.text())
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