import React, { Component } from 'react'

export default class EventClass extends Component {
    constructor(props){
        super(props);
        this.showMessage = this.showMessage.bind(this);
    }
    showMessage () {
        console.log(this);
        // Để sử dụng this ở đây . showMessage phải viết vtheo kiểu arrow function
        alert("Hello")
    }
    // showMessage = () => {
    //     // Để sử dụng this ở đây . showMessage phải viết vtheo kiểu arrow function
    //     alert("Hello")
    // }
    showFullName = (name) => {
        alert(`Hello ${name}`)
    }
    handelChange = (event) => {

        alert(event.target.value)
    }
    render() {
        return (
            <div>
                <button onClick={this.showMessage}>Click</button>
                <button onClick={() => this.showFullName("Dinh")}>Click Name</button>
                <button onClick={this.showFullName.bind(null,"Dinh")}>Click Name</button>
                <input  onChange={this.handelChange}/>
                <input  onChange={(event)  => this.handelChange(event)}/>
                
            </div>
        )
    }
}
