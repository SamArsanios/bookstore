import { combineReducers, createStore } from 'redux';
import booksReducer from './booksReducer';

const rootReducer = combineReducers({ booksReducer });
const store = createStore(rootReducer);

export default store;
