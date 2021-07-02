import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import booksReducer from './booksReducer';
import changeFilterReducer from './filterReducer';

const rootReducer = combineReducers({ booksReducer, changeFilterReducer });
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

export default store;
