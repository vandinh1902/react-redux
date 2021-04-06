import {ADD_TODO,FILTER_TODO,DELETE_TODO,CHANGE_STATUS} from '../constants/todosConstant'
const initialState = {
  data: [
    { id: 1, name: "Play videos game", isCompleted: false },
    { id: 2, name: "Do homework", isCompleted: false },
    { id: 3, name: "Play", isCompleted: false },
  ],
  filter: "all",
  isLoading: false,
};

function todosReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_TODO: {
      const { id } = action.payload; // Lay ra id can xoa
      // // Cach 1: Dung slice
      // const data = [...state.data]  // clone array data
      // const index = data.findIndex((item) => item.id === id);
      // data.slice(index,1);

      const data = state.data.filter((item) => item.id !== id); // filter return ve 1 array moi

      return { ...state, data };
    }
    case CHANGE_STATUS: {
      const { id } = action.payload;

      // Cach 1
      // const data = [...state.data]
      // const index = data.findIndex((item) => item.id === id);
      // data[index].isCompleted = !data[index].isCompleted;

      // Cach 2
      const data = state.data.map((item) => {
        if (item.id === id) {
          return { ...item, isCompleted: !item.isCompleted };
        }
        return item;
      });
      return { ...state, data };
    }
    case ADD_TODO: {
      const id = Math.floor(Math.random() * 100); // ~~(Math.random()*100);
      // const todo = {name: action.payload.todo,isCompleted:false, id};
      // const data = [...state.data,todo];
      // return {...state,data}

      return {
        ...state,
        data: [
          ...state.data,
          { name: action.payload.todo, isCompleted: false, id },
        ],
      };
    }
    case FILTER_TODO: {
      const { status } = action.payload;
      return {...state, filter: status};
    }
    default:
      return state;
  }
}

export default todosReducer;
