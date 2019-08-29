import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import appReducers from './_reducers/index';
const middleware = [thunk];

export const store = createStore(
    appReducers,
    composeWithDevTools(applyMiddleware(...middleware))
);
