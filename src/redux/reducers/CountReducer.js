// Reducer nhan vao 2 tham so
// Tham so thu nhat la state cua no
// Tham so thu 2 la action de thay doi state cua no
// Action la 1 object and 1 property bat buoc la type
// Type la hanh dong de reducer biet duoc can phai thay doi state ntn

function countReducer(state = 0, action) {
    console.log(action);
    switch (action.type) {
      case "TANG_BIEN_DEM":
        return state + 1;
        
      case "GIAM_BIEN_DEM":
        return state - 1;
      default:
        return state;
    }
    // return state;
  }


  export default countReducer