import React, { useState, useEffect } from "react";
import UseWindowResize from "./UseWindowResize";
import useForm from "./useForm";

export default function DemoHook() {
  const { values, errors, handleChange, handleBlur } = useForm({ username: "" });

  // const [size, setSize] = useState({width: 0, heght: 0});

  // useEffect(() => {
  //    window.addEventListener("resize", handleResive)
  //   }, []);

  //   const handleResive = () => {
  //       const {innerWidth, innerHight} = window;
  //       console.log(innerWidth, innerHight);

  //       setSize({
  //           width: innerWidth,
  //           heght: innerHight,
  //       })
  //   }

  const { width, hieght } = UseWindowResize();
  return (
    // <div>
    //     {width > 500 ? (<p>width lon hon 500</p>) : (<p>width nho hon bang  500</p>) }
    // </div>

    <>
      <div className="form-group">
        <label htmlFor>Username</label>
        <input
          type="text"
          name="username"
          className="form-control"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="username"
         
        />
        {errors.username ? (
            <div className="alert alert-success">{errors.username}</div>
        ):null} 
      </div>
    </>
  );
}
