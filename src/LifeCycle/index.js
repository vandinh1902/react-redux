import React, { Component } from 'react'
import Child from './Child';

export default class LifeCycle extends Component {

    constructor(props) {
        super(props)
    
        console.log("Run Constructor")
        this.state = {
            count: 0
        }
    }

    // Gọi API 
    // Tương tác với DOM
    //  Gọi nhưng hàm setTimeout, setInterval
    //  Chỉ chạy 1 lần duy nhất sau khi render lần đầu
    componentDidMount(){
        
        this.timmer = setTimeout(() => {}, 1000)
        console.log("Run componentDidMount")
    }

    // Chạy sau mỗi lần render từ lần render thứ 2
     
    componentDidUpdate (prevProps, prevState){
        console.log("Run componentUpdate")
        console.log('Gía trị trước đó:', prevState, prevProps)
        console.log('Gía trị hiện tại:', this.state, this.props)


        // Khi setState trong componentUpdate cần phải đặt điều kiện dừng dựa vào props hoặc state cũ với props hoặc state mới - tránh trường hợp bị lập vô tận.
    }
    //  Chạy trước khi componnent bị hủy
    // Làm những tác vụ dọn dẹp
    componentWillUnmount(){
        document.getElementById("demo").addEventListener("click",() =>{

        });
        clearTimeout(this.timmer)

    }

    increase = () => {
        this.setState(state => {
            return {
                count: state.count + 1
            }
        })
    }
    increase1 = () => {
        this.setState(state => {
            return {
                count: state.count + 1
            }
        })
    }
    render() {
        console.log("Run render")
        return (
            <div>
                <p>LifeCycle</p>
                <button onClick={this.increase}>Click</button>
                <button onClick={this.increase1}>Click</button>
                <Child count={this.state.count}/>
            </div>
            
        )
    }
}
