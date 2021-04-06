import React, { Component } from 'react'

export default class CarClass extends Component {
    state = {
        imgUrl: "./img/imgRedCar.jpg",
    }
    changeCar = (value) =>{
        // switch (value) {
        //     case 'red':
        //         this.setState({imgUrl: "./img/imgRedCar.jpg"});
        //         break;
        //     case 'sliver':
        //         this.setState({imgUrl: "./img/imgSilverCar.jpg"});
        //         break;
        //     case 'black':
        //         this.setState({imgUrl: "./img/imgBlackCar.jpg"});
        //         break;
        //     default:
        //         break;
        // }
        const mapping = {
            red: "./img/imgRedCar.jpg",
            black: "./img/imgBlackCar.jpg",
            sliver: "./img/imgSilverCar.jpg"
        }

        this.setState({
            imgUrl: mapping[value]
        })
    }
    render() {
        return (
            <div>
                <div className="d-flex">
                    <div className="imglist col-6">
                        <img src={this.state.imgUrl} alt="Car" width="100%" height="500px" />
                    </div>
                    <div className="buttonimg col-6 ">
                        <button class="btn btn-danger mr-5 " onClick={() => this.changeCar("red")}>Red Color</button>
                        <button class="btn btn-secondary mr-5" onClick={() => this.changeCar("sliver")}>Sliver Color</button>
                        <button class="btn btn-dark " onClick={() => this.changeCar("black")}>Black Color</button>
                    </div>
                </div>
            </div>
        )
    }
}
