import { GET_MESSAGES, POST_MESSAGE, MSG_POPUP, MSG_CLOSE } from "../actions/messages";

const initialState = { allConvos: [], msgPopUp: false };

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_MESSAGES:
            return {
                ...state,
                allConvos: action.payload
            }
        case POST_MESSAGE:
            let sortedEmails = action.payload.emails.concat().sort();

            let newAllConvos = state.allConvos.map(convo => {
                let sortedConvoEmails = convo.emails.concat().sort()

                sortedEmails.forEach((email, index) => {
                    if (email !== sortedConvoEmails[index]) {
                        return convo
                    }
                });

                return action.payload;
            })

            return {
                ...state,
                allConvos: newAllConvos
            }
        case MSG_POPUP:
            return {
                ...state,
                msgPopUp: true
            }
        case MSG_CLOSE:
            return {
                ...state,
                msgPopUp: false
            }
        default:
            return state
    }
};