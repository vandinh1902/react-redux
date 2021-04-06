import {ADD_TODO,FILTER_TODO,DELETE_TODO,CHANGE_STATUS} from '../constants/todosConstant'


export const filterTodo = (status) => {
    return{
        type: FILTER_TODO,
        payload: {
            status,
        },
    }
}


export const addTodo = (todo) =>{
    return{
        type: ADD_TODO,
        payload: {
            todo,
        },
    }
}


export const DeleteTodo = (id) =>{
    return{
        type: DELETE_TODO,
        payload: {
            id,
        },
    }
}


export const changeStatus = (id) =>{
    return{
        type: CHANGE_STATUS,
        payload: {
            id,
        },
    }
}