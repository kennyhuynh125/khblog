import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Container
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
        axios.post(`/api/login`, {
            username: this.props.username,
            password: this.props.password
        })
        .then((response) => {
            // if response is true, dispatch login request/success
            // and send back to home page
            if (response.data === true) {
                store.dispatch({
                    type: types.LOGIN_REQUEST,
                    isFetching: true,
                    isAuthenticated: false,
                });
                localStorage.setItem('id_token', 'logged');
                this.props.history.push('/');
                store.dispatch({
                    type: types.LOGIN_SUCCESS,
                    isFetching: false,
                    isAuthenticated: true,
                })
            } else {
                alert('Wrong username and password.');
            }
        })
    }

    render() {
        return (
            <Container>
                <Form>
                    <FormGroup>
                        <Label for="user">Username</Label>
                        <Input type="text" name="user" id="user" onChange={this.handleUsername} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="pass">Password</Label>
                        <Input type="password" name="pass" id="pass" onChange={this.handlePassword} />
                    </FormGroup>
                    <Button color="primary" onClick={this.login}>Login</Button>
                </Form>
            </Container>
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
