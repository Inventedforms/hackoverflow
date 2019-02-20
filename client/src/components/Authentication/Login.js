import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import "./Login.css";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    samlLogin = () => {
        return true;
    }

    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <Button
                        block
                        size="lg"
                        disabled={!this.samlLogin()}
                        type="submit"
                    >
                        Login with SAML
                    </Button>
                </form>
            </div>
        );
    }
}
