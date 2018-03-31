import React, { Component } from "react";
import FormElement from "./FormElement";
import { FormGroup, Button } from "react-bootstrap";

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      submitted: false
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    //computed property ES6 []
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <FormGroup>
          <form name="loginform" onSubmit={this.handleSubmit}>
            <FormElement
              type="email"
              label="Email"
              name="email"
              placeholder="jane.doe@example.com"
              handleChange={this.handleChange}
            />
            <FormElement
              type="password"
              label="Password"
              name="password"
              handleChange={this.handleChange}
            />
            <div>
              <Button type="submit" onChange={this.handleSubmit}>
                Submit
              </Button>
            </div>
          </form>
        </FormGroup>
      </div>
    );
  }
}
