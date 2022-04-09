import React from "react";
import './Login.css'
import { user } from '../dummy'

const initialState = {
    email: "",
    password: "",
    emailError: "",
    passwordError: ""
};

const userdata = user

console.log(userdata)

export default class ValiationForm extends React.Component {
    state = initialState;

    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox
                ? event.target.checked
                : event.target.value
        });
    };

    validate = () => {
        let emailError = "";
        let passwordError = "";

        if (!this.state.password) {
            passwordError = "password cannot be blank";
        }

        if (!this.state.email.includes("@")) {
            emailError = "invalid email";
        }

        if (emailError || passwordError) {
            this.setState({ emailError, passwordError });
            return false;
        }

        return true;
    };

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            window.location.replace('/Profile');
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="vmain">
                    <h1 className="h1">Login</h1>
                    <input
                        className="input"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <div className="errormgs">
                        {this.state.emailError}
                    </div>
                    <input
                        className="input"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <div className="errormgs">
                        {this.state.passwordError}
                    </div>
                    <button className="submit" type="submit">Sign In</button>
                    <div className="row">
                        <text className="for">Forgot Password?</text>
                        <text className="new">New User? Sign Up</text>
                    </div>
                </div>
            </form>
        );
    }
}