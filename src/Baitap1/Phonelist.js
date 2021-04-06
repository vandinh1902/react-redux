import React from "react";
import Phoneitem from "./Phoneitem";

export default function Phonelist() {
  return (
    <section id="smartphone" className="container-fluid pt-5 pb-5">
      <h1 className="text-white text-center">BEST SMARTPHONE</h1>
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
          <div className="container">
            <Phoneitem />
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
          <div className="container">
            <Phoneitem />
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
          <div className="container">
            <Phoneitem />
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
          <div className="container">
            <Phoneitem />
          </div>
        </div>
        
        
        
      </div>
    </section>
  );
}
