import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

export default function DemoRedux() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.count);
    const color = useSelector((state) => state.color);


    const tangBienDem = () => {
        // De thay doi state trong store ta can goi toi 1 action
        const action = {
            type: "TANG_BIEN_DEM"
        }

        // Day action vao store de thay doi state su dung useDispatch
        // useDispatch()(action)
        dispatch(action)
    }
    const changeColor = (evt) => {
        // De thay doi state trong store ta can goi toi 1 action
        const action = {
            type: "CHANGER_COLOR",
            payload: evt.target.value 
        }

        // Day action vao store de thay doi state su dung useDispatch
        // useDispatch()(action)
        dispatch(action)
    }

    return <div>
            <h1>Demo Redux</h1>
            <p>Count: {count}</p>
            
            <button className="btn btn-primary" onClick={tangBienDem}>Tang Bien Dem</button>
            <p>Color: {color}</p>
            <select value={color} onChange={changeColor} className="">
                <option value="Blue">Blue</option>
                <option value="Red">Red</option>
                <option value="Green">Green</option>
            </select>
        </div>
    
}
