import React,{useState} from 'react'


import {Input, Button} from 'reactstrap'


import {useDispatch} from 'react-redux'
import {addTodo} from '../redux/actions/TodoAction'
export default function AddTodo() {
    const[todo,setTodo] = useState("");
    const dispatch = useDispatch();
    const handleChange = (evt) => {
        setTodo(evt.target.value);
    }
    const handleAddTodo = () =>{
        // const action = {
        //     type: ADD_TODO,
        //     payload:  {
        //         todo,
        //     },
        // }
        // dispatch(action)

        dispatch(addTodo(todo))
    }
    return (
        <div className="d-flex mb-3">
            <Input className="mr-4" value={todo} onChange={handleChange}></Input>
            <Button color="primary" onClick={handleAddTodo}>Add</Button>
            
        </div>
    )
}
