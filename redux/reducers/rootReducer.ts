import { combineReducers } from 'redux';

import modal from './components/modal';
import users from './users';
import comments from './comments';

const rootReducer = combineReducers({
  modal,
  users,
  comments,

});

export default rootReducer;
