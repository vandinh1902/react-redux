import React, { Component } from 'react'

export default class ProductDetail extends Component {
   
    render() {
        const {product} = this.props;

        if(!product) return null
        return <div className="row">
            <div className="col-sm-4">
                <img src={product.hinhAnh} width="100%"/>   
            </div>
            <div className="col-sm-8">
                <h3>Thông số</h3>
                <p>Màn hình: {product.manHinh}</p>
                <p>Camera: {product.cameraTruoc}</p>
                <p>Hệ điều hành: {product.heDieuHanh}</p>
                <p>Màn hình: {product.heDieuHanh}</p>
                <p>Màn hình: {product.heDieuHanh}</p>
            </div>
        </div>
    }
}
