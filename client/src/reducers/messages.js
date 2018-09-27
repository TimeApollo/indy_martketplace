import { GET_MESSAGES, MSG_POPUP, MSG_CLOSE } from "../actions/messages";

const initialState = { convos: [], msgPopUp: false };

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_MESSAGES:
            return {
                ...state,
                convos: action.payload
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