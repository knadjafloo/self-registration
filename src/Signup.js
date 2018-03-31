import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import FormElement from "./FormElement";
import { Alert } from "react-bootstrap";
import { Auth } from "aws-amplify";
import { withFederated } from "aws-amplify-react";
import google_icon from "./google.png";
import facebook_icon from "./facebook.png";
import config from "./config";

const Buttons = props => (
  <div>
    <img
      onClick={props.googleSignIn}
      src={google_icon}
      height="80"
      width="150"
    />
    <img
      onClick={props.facebookSignIn}
      src={facebook_icon}
      height="80"
      width="150"
    />
  </div>
);

const Federated = withFederated(Buttons);

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formError: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    console.log(this.state);
    if (!this.validate()) {
      this.setState({
        formError: "Please enter a valid info"
      });
    } else {
      this.setState({
        formError: ""
      });
    }

    try {
      const newUser = await Auth.signUp({
        username: this.state.email,
        password: this.state.password,
        attributes: {
          name: this.state.firstname + " " + this.state.lastname,
          email: this.state.email, // optional
          birthdate: this.state.birthdate
        },
        validationData: [] //optional
      });
      this.setState({
        newUser
      });
    } catch (e) {
      console.log("error happened: ", e);
    }
  };

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    //computed property ES6 []
    this.setState({
      [name]: value
    });
  };

  validate = () => {
    return;
    this.state.email.length > 0 &&
      this.state.firstname.length > 0 &&
      this.state.password.length > 0;
  };

  renderError = () => {
    if (this.state.emailError) {
      return <Alert bsStyle="warning"> {this.state.formError} </Alert>;
    } else {
      return <span />;
    }
  };

  handleAuthStateChange = state => {
    if (state === "signedIn") {
      /* GO TO Main Page */
      console.log("successfully logged in");
      this.props.history.push(`/homepage`);
    }
  };
  render() {
    const federated = {
      google_client_id:
        "81630869668-cpd5r0vo0uaeifnm0358s8mgcis2b5uc.apps.googleusercontent.com",
      facebook_app_id: "1280370222068893"
    };
    return (
      <div>
        <span>
          <form name="registerform" onSubmit={this.handleSubmit}>
            <div>
              {this.renderError()}
              <FormElement
                name="email"
                type="email"
                label="Email"
                placeholder="jane.doe@example.com"
                handleChange={this.handleChange}
                autoFocus
              />
              <FormElement
                name="firstname"
                label="First Name"
                handleChange={this.handleChange}
              />
              <FormElement
                name="lastname"
                label="Last Name"
                handleChange={this.handleChange}
              />
              <FormElement
                name="password"
                label="password"
                type="password"
                handleChange={this.handleChange}
              />
              <FormElement
                name="birthdate"
                label="BirthDate"
                type="date"
                handleChange={this.handleChange}
              />
              <input type="submit" onChange={this.handleSubmit} />
            </div>
          </form>
        </span>
        <span>
          <Federated
            federated={federated}
            onStateChange={this.handleAuthStateChange}
          />
        </span>
      </div>
    );
  }
}

export default withRouter(Signup);
