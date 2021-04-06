import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from "reactstrap";

export default class UserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: {
        username: "",
        email: "",
        phone: "",
        fullName: "",
        address: "",
      },
    };
  }

  handleChange = (event) => {
    // this.setState({
    //     values: {
    //         username: event.target.value,
    //     }
    // })

    const { name, value } = event.target;
    // console.log("name:", name, "value:", value);

    this.setState((state) => {
      return {
        values: {
          ...state.values,
          // username: event.target.value
          [name]: value,
        },
      };
    });
  };

  handleSubmit = () => {
    if (this.state.values.id) {
      this.props.onUpdateUser(this.state.values);
    } else {
      this.props.onUpdateUser(this.state.values);
    }
    this.setState({
      values: {
        username: "",
        email: "",
        phone: "",
        fullName: "",
        address: "",
      },
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.user.id && prevProps.user.id !== this.props.user.id) {
      this.setState({
        values: this.props.user,
      });
    }
  }
  
  render() {
    return (
      <div>
        {/* Modal */}
        <Modal isOpen={this.props.isOpen} toggle={this.props.onToggle}>
          <ModalHeader>Add User Form
          </ModalHeader>
          <ModalBody>
              <FormGroup>
              <Label for="username">Username</Label>
              <Input
                  name="username"
                  type="text"
                  id="username"
                  value={this.state.values.username}
                  onChange={this.handleChange}
                  placeholder
                  aria-describedby="helpId"
                />
              </FormGroup>
              

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  type="text"
                  className="form-control"
                  id="email"
                  value={this.state.values.email}
                  onChange={this.handleChange}
                  placeholder
                  aria-describedby="helpId"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  name="phone"
                  type="text"
                  className="form-control"
                  id="phone"
                  value={this.state.values.phone}
                  onChange={this.handleChange}
                  placeholder
                  aria-describedby="helpId"
                />
              </div>

              <div className="form-group">
                <label htmlFor="fullName">FullName</label>
                <input
                  name="fullName"
                  type="text"
                  className="form-control"
                  id="fullName"
                  value={this.state.values.fullName}
                  onChange={this.handleChange}
                  placeholder
                  aria-describedby="helpId"
                />
              </div>
            
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.handleSubmit}>Them</Button>
            <Button color="danger" onclick={this.props.onToggle}>Xoa</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
