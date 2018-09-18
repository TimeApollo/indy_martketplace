import { combineReducers } from 'redux';
import authReducer from './auth';
import messages from './messages';

const rootReducer = combineReducers({
  auth: authReducer,
  messages: messages
})

export default rootReducer