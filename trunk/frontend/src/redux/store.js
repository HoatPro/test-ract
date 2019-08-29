import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import appReducers from './_reducers/index';

export const initStore = () => {
  return createStore(
    appReducers,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
};
