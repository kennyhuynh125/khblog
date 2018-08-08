import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';
import store from '../../store';
import * as types from '../../actions/action-types';

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.login = this.login.bind(this);
    }

    // handles username change by dispatching action that changes username value
    handleUsername = (e) => {
        store.dispatch({
            type: types.USERNAME_INPUT,
            value: e.target.value 
        });
    }

    // handles password change by dispatching action that changes password value
    handlePassword = (e) => {
        store.dispatch({
            type: types.PASSWORD_INPUT,
            value: e.target.value 
        });
    }

    // calls api to fetch login success
    login = () => {
        console.log(this.props);
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <Form>
                    <FormGroup>
                        <Label for="user">Username</Label>
                        <Input type="text" name="user" id="user" onChange={this.handleUsername} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="pass">Password</Label>
                        <Input type="text" name="pass" id="pass" onChange={this.handlePassword} />
                    </FormGroup>
                    <Button color="primary" onClick={this.login}>Login</Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.users.username,
        password: state.users.password,
    }
}

export default connect(mapStateToProps)(Login);
