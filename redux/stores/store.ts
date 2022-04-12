import { createStore, applyMiddleware, compose, AnyAction } from 'redux';
import thunk from 'redux-thunk';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import rootReducer from '../reducers/rootReducer';

const middleware = [thunk];

const store = () => createStore(rootReducer, {}, compose(applyMiddleware(...middleware)));

export const wrapper = createWrapper(store);
