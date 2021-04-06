import React from "react";

export default function Card(props) {
    const {student} = props
  return (
    <div className="card">
      <div className="card-header">Sinh Vien</div>
      <div className="card-body">
        <h4 className="card-title">Name: {student.name}</h4>
        <p className="card-text">Age: {student.age}</p>
      </div>
      <div className="abc"><button className="btn btn-success">Chi tiết</button></div>
    </div>
  );
}
