import {TAB_CHANGE} from "../actions/tab"

const initialState = {value: '/'}

const tabReducer = (state = initialState, action) => {
    switch (action.type) {
        case TAB_CHANGE:
            return {
                ...state,
                value: action.payload
            }
        default: return state
    }
}

export default tabReducer