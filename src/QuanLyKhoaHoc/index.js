import React, { useState, useEffect } from "react";
// import axios from "axios";
import {useSelector, useDispatch} from 'react-redux'
import {getCourses} from '../redux/actions/coursesAction'

// Lay danh sach khoa hoc tu API va hien thi ra giao dien
export default function QuanLyKhoaHoc() {
    const dispatch = useDispatch();
    const {data} = useSelector((state) => state.courses);

//   const [courses, setCourses] = useState([]);
  useEffect(() => {
    // async function handleGetCourses() {
    //   const { data } = await axios({
    //     method: "GET",
    //     url:
    //       "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
    //   });
    // //   setCourses(data);
    // dispatch(getCourses(data))
    // }
    // handleGetCourses();
    dispatch(getCourses()) //dispatch middleware action
  }, []);   



  return (
    <div className="container">
      <div className="row">
        {data.map((item) => (
          <div key={item.maKhoaHoc} className="card  col-sm-4">
            <img className="card-img-top" src={item.hinhAnh} alt />
            <div className="card-body">
              <h4 className="card-title">{item.tenKhoaHoc}</h4>
              <p className="card-text">{item.moTa}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
