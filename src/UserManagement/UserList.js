import React, { Component } from 'react'

export default class UserList extends Component {
    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>FullName</th>
                    <th>AddRress</th>
                    <th>Acction</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {this.props.users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.fullName}</td>
                            <td>{user.address}</td>
                            <td>{user.acction}</td>
                            <td className="btn btn-success mr-4 ml-4" 
                            data-toggle="modal" 
                            data-target="#modelId"
                            onClick={() => this.props.onGetUser(user.id)} >Update</td>
                            {/* <td className="btn btn-danger" onClick={this.handleDetele}>Delete</td> */}
                            {/* Truc tiep */}
                            <td className="btn btn-danger" onClick={() => this.props.onDelete(user.id)}>Delete</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}
