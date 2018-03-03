import React, { Component } from 'react';
import FormElement from './FormElement';

export default class Signup extends Component {

    constructor(props){
        super(props);
        this.state = {
            emailError: ''
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();        
        console.log(this.state);
        if(!this.state.email) {
            this.setState({
                'emailError': 'Please enter a valid email address'
            })
        }
        else {
            this.setState({
                emailError: ''
            })
        }
    }

    handleChange = (event) => {        
        const name = event.target.name;
        const value = event.target.value;
        //computed property ES6 []
        this.setState( {
            [name]: value
        });
    }


    render() {
        return (
        <div>
            <form name="registerform" onSubmit={this.handleSubmit}>
            <div>                
                <FormElement name="email" label="Email" handleChange={this.handleChange} error={this.state.emailError}/>
                <FormElement name="firstname" label="First Name" handleChange={this.handleChange} />
                <FormElement name="lastname" label="Last Name" handleChange={this.handleChange} />
                <FormElement name="password" label="password" type="password" handleChange={this.handleChange} />
                <FormElement name="birthdate" label="BirthDate" type="date" handleChange={this.handleChange} />
                <input type="submit" onChange={this.handleSubmit}/>
            </div>
            </form>
        </div>
        );
    }
}
