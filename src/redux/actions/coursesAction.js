import {GET_COURSES} from '../constants/coursesContant'
import axios from "axios";

export const getCourses = () => {
    return async(dispatch) => {
        const {data} = await axios({
            method: "GET",
        url:
          "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
        })
        dispatch({
            type:GET_COURSES,
            payload:{data}
        })
    }
   




    // return{
    //     type: GET_COURSES,
    //     payload:{
    //         data,
    //     },
    // }
}