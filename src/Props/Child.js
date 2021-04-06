import React, { Component } from 'react'

export default class Child extends Component {
    // Dữ liệu từ component cha truyền xuống được nằm trong obrject this.props
    // Props là read-only . chỉ dùng để render ra giao diện , không dược thay đổi nó
    // Props thay đổi , component render sẽ render lại
    render() {
        console.log(this.props)
        return (
            <div>
                <p>
                    Message: {this.props.message}
                </p>
            </div>
        )
    }
}
