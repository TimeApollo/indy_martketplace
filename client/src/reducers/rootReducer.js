import { combineReducers } from 'redux';
import authReducer from './auth';
import messages from './messages';
import artReducer from './art';

const rootReducer = combineReducers({
  auth: authReducer,
  messages: messages,
  art: artReducer,
})

export default rootReducer