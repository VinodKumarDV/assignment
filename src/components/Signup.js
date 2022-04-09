import React from "react";
import './Signup.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const initialState = {
    firstname: "",
    lastname: "",
    phonenum: "",
    email: "",
    password: "",
    firstnameError: "",
    lastnameError: "",
    phonenumError: "",
    emailError: "",
    passwordError: ""
};

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
        let firstnameError = "";
        let lastnameError = "";
        let phonenumError = "";
        let emailError = "";
        let passwordError = "";

        if (!this.state.firstname) {
            firstnameError = "FirstName cannot be blank";
        }

        if (!this.state.lastname) {
            lastnameError = "lastname cannot be blank";
        }

        if (!this.state.phonenum) {
            phonenumError = "Phone number cannot be blank";
        } else if (this.state.phonenum.length != 10) {
            phonenumError = "Enter a valide phone number";
        }

        if (!this.state.password) {
            passwordError = "FirstName cannot be blank";
        }

        if (!this.state.email.includes("@")) {
            emailError = "invalid email";
        }

        if (emailError || passwordError || firstnameError || lastnameError || phonenumError) {
            this.setState({ emailError, passwordError, firstnameError, lastnameError, phonenumError });
            return false;
        }

        return true;
    };

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            // clear form
            this.setState(initialState);
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="smain">
                    <h1 className="h1">Signup</h1>
                    <input
                        className="input"
                        type="firstname"
                        name="firstname"
                        placeholder="Firstname"
                        value={this.state.firstname}
                        onChange={this.handleChange}
                    />
                    <div className="errormgs">
                        {this.state.firstnameError}
                    </div>
                    <input
                        className="input"
                        type="lastname"
                        name="lastname"
                        placeholder="Lastname"
                        value={this.state.lastname}
                        onChange={this.handleChange}
                    />
                    <div className="errormgs">
                        {this.state.lastnameError}
                    </div>
                    <input
                        className="input"
                        type="phonenum"
                        name="phonenum"
                        placeholder="Phone Number"
                        value={this.state.phonenum}
                        onChange={this.handleChange}
                    />
                    <div className="errormgs">
                        {this.state.phonenumError}
                    </div>
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
                    <button className="submit" type="submit">Sign up</button>

                    <text className="new">Already User? <Link className="link" to="/login">
                        Sign In</Link></text>
                </div>
            </form>
        );
    }
}