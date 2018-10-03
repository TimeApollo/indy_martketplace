import { combineReducers } from 'redux';
import authReducer from './auth';
import messages from './messages';
import artReducer from './art';
import tabReducer from './tab';
import artistReducer from './artist';

const rootReducer = combineReducers({
  auth: authReducer,
  messages: messages,
  art: artReducer,
  tabs: tabReducer,
  artist: artistReducer
})

export default rootReducer