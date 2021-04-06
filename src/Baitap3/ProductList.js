import React, { Component } from 'react'
import ProductDetail from './ProductDetail'
import ProductItem from './ProductItem'


export default class ProductList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             productDetail: null
        }
    }
    
    getProduct = (product) => {
        console.log(product)
        this.setState({productDetail:product});

    }

    addToCart = (product) => {
        // Trung gian để tiếp tục truyền product len component BaiTap3
        // console.log(product)
        this.props.addToCart(product);
    }


    render() {
        const {products} = this.props;
        return (
            <>
            <div className="row">

                {products.map((product) => {
                    return(
                        <div className="col-sm-4" key={product.maSP}>
                            <ProductItem 
                            product={product} 
                            getProduct={this.getProduct} 
                            addToCart={this.addToCart}/>
                            
                        </div>
                    )
                })}
                
            </div>
            <ProductDetail product ={this.state.productDetail}/>
            </>
        )
    }
}
