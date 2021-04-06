import React, { Component } from 'react'

export default class StateClass extends Component {

    state = {
        isLogin: false,
        count: 0,
        doubleCount: 0
    };

    toggleLogin = () =>{
        // Khong duoc thay doi state truc tiep
        this.setState({
            isLogin: !this.state.isLogin
        },
        () => {
            console.log(this.state.isLogin);
        })
        // Không thể lấy kết quả mới sau khu setState ngay đây, bởi vì setState là 1 hàm bất đồng bộ
    }


    handleIncrement = () => {
        // Cách 1 : Dùng callback ở tham số thứ 2, để nhận giá trị state mới nhất
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     this.setState({
        //         doubleCount: this.state.count * 2
        //     });
        // });

        // Cách 2
        this.setState((state) => {
            return {
                count: state.count + 1,
            };
        });
        this.setState((state) => {
            return {
       doubleCount : state.count * 2,
            };
        });
    }
    render() {
        // if(this.state.isLogin){
        //     return <div>
        //         <p>Da Login</p>
        //         <button onClick={this.toggleLogin}>Dang xuat</button>
        //     </div>
        // }
        // return <div>
        //     <p>Chua Login</p>
        //     <button onClick={this.toggleLogin}>Dang Nhap</button>
        // </div>
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <p>DoubleCount: {this.state.doubleCount}</p>

                <button onClick={this.handleIncrement}>Click</button>
            </div>
        )
        
    }
}
