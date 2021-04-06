// Reducer tong quan ly tat ca cac Reducer con

import {combineReducers} from 'redux';
import countReducer from './CountReducer'

import colorReducer from './colorReducer'

import todosReducer from './todosReducer'

import coursesReducer from './coursesReducer' 
const rootReducer = combineReducers({
    count: countReducer,
    color: colorReducer,
    todos: todosReducer,
    courses: coursesReducer,
})



export default rootReducer