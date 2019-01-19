import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import uuid from "uuid";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    const newContact = {
      id: uuid(), //generates a unique id for us
      name, // same as name: name
      email,
      phone
    };

    dispatch({ type: "ADD_CONTACT", payload: newContact });

    // Clear state after submitting
    this.setState({
      name: "",
      email: "",
      phone: ""
    });
  };

  render() {
    const { name, email, phone } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">
                <h1>Add Contact</h1>
              </div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name..."
                    value={name}
                    onChange={this.onChange}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter Email..."
                    value={email}
                    onChange={this.onChange}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone..."
                    value={phone}
                    onChange={this.onChange}
                  />
                  {/* <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="name"
                      placeholder="Enter Name..."
                      value={name}
                      onChange={this.onChange}
                    />
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      name="email"
                      placeholder="Enter Email..."
                      value={email}
                      onChange={this.onChange}
                    />
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="phone"
                      placeholder="Enter Phone..."
                      value={phone}
                      onChange={this.onChange}
                    /> 
                  </div>*/}
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-block btn-light"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
