import React from 'react'
import Laptopitem from './Laptopitem'

export default function Laptoplist() {
    return (
<section id="laptop" className="container-fluid pt-5 pb-5 bg-light text-dark">
  <h1 className="text-center">BEST LAPTOP</h1>
  <div className="row">
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
      <div className="container">
       <Laptopitem/>
      </div>
    </div>
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
      <div className="container">
      <Laptopitem/>
      </div>
    </div>
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
      <div className="container">
      <Laptopitem/>
      </div>
    </div>
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
      <div className="container">
      <Laptopitem/>
      </div>
    </div>
  </div>
</section>

    )
}
