
 function colorReducer(state = "red", action) {
  switch (action.type) {
    case "CHANGER_COLOR":
      return action.payload;
   
    default:
      return state;
  }
}



export default colorReducer
