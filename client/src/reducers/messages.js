import { GET_MESSAGES } from "../actions/messages";

const initialState = { convos: [] };

const messages = (state = initialState, action) => {
    switch (action.type) {
        case GET_MESSAGES:
            return {
                ...state,
                convos: action.convos
            }
        default:
            return state
    }
}

export default messages;