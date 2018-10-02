import { GET_MESSAGES, POST_MESSAGE, MSG_POPUP, MSG_CLOSE, DM_POPUP, DM_CLOSE } from "../actions/messages";

const initialState = { allConvos: [], singleConvo: [], msgPopUp: false, dmPopUp: false };

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_MESSAGES:
            return {
                ...state,
                allConvos: action.payload
            }
        case POST_MESSAGE:
            let sortedEmails = action.payload.emails.concat().sort();

            console.log("initial convo state: ", state.allConvos)

            let newAllConvos = state.allConvos.map(convo => {
                let sortedConvoEmails = convo.emails.concat().sort()
                
                const convoUpdate = sortedEmails.every((email, index) => {
                    if (email !== sortedConvoEmails[index]) {
                        return false;
                    } else {
                        return true;
                    }
                });

                if (convoUpdate === true) {
                    return action.payload;
                } else {
                    return convo;
                }
            })

            console.log("new convo array: ", newAllConvos)

            return {
                ...state,
                allConvos: newAllConvos.sort((a, b) => {
                    if (a.messages.timestamp > b.messages.timestamp) {
                        return -1;
                    }
                    if (a.messages.timestamp < b.messages.timestamp) {
                        return 1;
                    }

                    return 0;
                })
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
        case DM_POPUP:
            return {
                ...state,
                dmPopUp: true
            }
        case DM_CLOSE:
            return {
                ...state,
                dmPopUp: false
            }
        default:
            return state
    }
};