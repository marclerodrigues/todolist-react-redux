import todos from './todos';
import visibilityFilter from './visibilityFilter';
import { combineReducers } from 'redux';

const todoReducer = combineReducers({ todos, visibilityFilter });

export default todoReducer;
