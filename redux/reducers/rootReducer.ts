import { combineReducers } from 'redux';

import modal from './components/modal';
import users from './users';

const rootReducer = combineReducers({
  modal,
  users,

});

export default rootReducer;
