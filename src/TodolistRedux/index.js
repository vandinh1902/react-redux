import React from 'react'

import {useSelector} from 'react-redux'

import {ListGroup, ListGroupItem }from 'reactstrap';
import AddTodo from './AddTodo';

import FilterTodo from './FilterTodo';

import TodoItem from './TodoItem'

export default function TodoList() {
    const {data,filter,isLoading} = useSelector(state => state.todos)
    const filterData = filter === "all" ? data: data.filter((item) =>{
        // if(filter === "completed"){
        //     return item.isCompleted === true
        // }
        // if(filter === "uncompleted"){
        //     return item.isCompleted === false;

        // }


        return filter === "completed" ? item.isCompleted === true : item.isCompleted === false;
    })
    return (
        <div className="container">
            <h1 className="text-primary">ToDoList</h1>
            <AddTodo/>
            <ListGroup>
            {filterData.map((todo) =>(
                // <ListGroupItem>{todo.name}</ListGroupItem>
                <TodoItem key={todo.id} todo={todo}/>
            ))}
            </ListGroup>
            <FilterTodo/>
        </div>
    )
}
