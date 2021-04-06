import React from 'react'

import {Button} from 'reactstrap'

import {useDispatch} from 'react-redux'
import {filterTodo} from '../redux/actions/TodoAction'

export default function FilterTodo() {
    const dispatch = useDispatch();
    const FilterTodo = status => {
        // const action = {
        //     type: FILTER_TODO,
        //     payload: {
        //         s
        dispatch(filterTodo(status))
    }
    return (
        <div className="d-flex mt-4">
            <Button color="primary" className="mr-4" onClick={()=> FilterTodo("all")}>All</Button>
            <Button color="success" className="mr-4" onClick={()=> FilterTodo("completed")}>Completed</Button>
            <Button color="warning" className="mr-4" onClick={()=> FilterTodo("uncompleted")}>Uncompleted</Button>
            
        </div>
    )
}
