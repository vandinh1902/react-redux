import React, { Component } from 'react'

export default class ConditionClass extends Component {

    isLogin = true

    toggleLogin = () =>{
        this.isLogin = !this.isLogin
        console.log(this.toggleLogin)
    }


    render() {

        if(this.isLogin){
            return <div>
                <p>Da Login</p>
                <button onClick={this.toggleLogin}>Dang xuat</button>
            </div>
        }
        return <div>
            <p>Chua Login</p>
            <button onClick={this.toggleLogin}>Dang Nhap</button>
        </div>
        // return (
        //     <div>
        //         {this.isLogin ? <p>Da login</p> : <p>Chua Login</p>}
        //     </div>
        // )
    }
}


function ConditionFunction (){
    let isLogin = false
    if(isLogin){
        return <p>Da Dang Nhap</p>
    }
    return <p>Chua Dang Nhap</p>
    // return(
    //     <div>
    //         {isLogin ? <p>Da login</p>: <p>Chua login</p>}
    //     </div>
    // )
}

