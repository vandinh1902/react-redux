import { GET_COURSES } from "../constants/coursesContant";

const initialState = {
    data: [],
};


function coursesReducer(state= initialState, action){
    switch (action.type) {
        case GET_COURSES:{
            return{...state,data: action.payload.data}
        }
        default:
            return state;
    }
}

export default coursesReducer