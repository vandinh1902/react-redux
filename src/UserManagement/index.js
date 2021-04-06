import React, { Component } from 'react';
import axios from 'axios'
import UserList from './UserList';
import UserForm from './UserForm';
import {Button} from 'reactstrap'

export default class UserManagement extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             users:[],
            selectedUser: {},
            isOpen: false
        }
    }
    

    async componentDidMount(){
        // try {
        //     const result = await axios({
        //         method: "GET",
        //     url:"https://6056f9de055dbd0017e844e2.mockapi.io/api/user"
        //     });
        //     this.setState({users:result.data});
            
           
        // } catch (error) {
        //     console.log(error);
        // }
        this.fetchUsers()
    }

    fetchUsers = async () =>{
        try {
            const result = await axios({
                method: "GET",
            url:"https://6056f9de055dbd0017e844e2.mockapi.io/api/user"
            });
            this.setState({users:result.data});
            
           
        } catch (error) {
            console.log(error);
        }
    }

    handleDelete = async(userId) => {
        try {
            await axios({
                method: "DELETE",
                url:`https://6056f9de055dbd0017e844e2.mockapi.io/api/user/${userId}`
            })
            this.fetchUsers()
        } catch (error) {
            console.log(error)
        }
        
    }

    handleAdd = async (user) =>{
        try {
            await axios({
                method: "POST",
                url:`https://6056f9de055dbd0017e844e2.mockapi.io/api/user/`,
                data: user
            })
            this.fetchUsers();
            this.handleToggleModal();
        } catch (error) {
            console.log(error)
        }
    }


    handleGetUser = async (userId) => {
        try {
            const result = await axios({
                method: "GET",
                url:`https://6056f9de055dbd0017e844e2.mockapi.io/api/user/${userId}`,
                
            })
            this.setState({
                selectedUser: result.data
            })
        } catch (error) {
            console.log(error)
        }
    }

    handleUpdateUser = async(user) =>{
        const {id, ...data} = user;
        try {
            await axios({
                method: "PUT",
                url:`https://6056f9de055dbd0017e844e2.mockapi.io/api/user/${id}`,
                data,
                
            })
            this.fetchUsers();
            this.handleToggleModal();
        } catch (error) {
            console.log(error)
        }
    }
    handleToggleModal = () =>{
        this.setState((state) => ({
            isOpen: !state.isOpen,
        }))
    }
    render() {
        return (
            <div className="container">
                <h1 className="text-center">Username</h1>
                <div className="text-right my-4">
                    <Button color="primary" onClick={this.handleToggleModal}>AddUser</Button>
                    
                </div>
                <UserList
                 users={this.state.users} 
                onDelete={this.handleDelete} 
                onGetUser={this.handleGetUser}
                />
                <UserForm 
                user={this.state.selectedUser} 
                onAdd={this.handleAdd} 
                onUpdateUser={this.handleUpdateUser}
                onToggle = {this.handleToggleModal}
                isOpen ={this.state.isOpen}
                />
            </div>
        )
    }
}
