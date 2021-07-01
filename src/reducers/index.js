import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import booksReducer from './booksReducer';

const rootReducer = combineReducers({ booksReducer });
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

export default store;
