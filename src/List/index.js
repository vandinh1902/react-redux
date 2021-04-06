import React, { Component } from 'react'

export default class ListClass extends Component {

    products = [
        {id: 1, name: "Iphone 12", price: 30000000},
        {id: 2, name: "Iphone 12 mini", price: 30000000},
        {id: 3, name: "Iphone 12 pro max", price: 30000000},
    ]



    render() {
        return (
            <div>
                {/* {this.products.map((item) => {
                    return (

                        <p key={item.id}>
                            {item.id} - {item.name} - {item.price}
                        </p>
                    );  
                })} */}

                {this.products.map((item, index) => (
                    <p key={item.id}>
                    {item.id} - {item.name} - {item.price}
                   </p>
                )
                     
                )}
            </div>
        );
    }
}
