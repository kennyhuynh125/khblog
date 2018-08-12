import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../store';
import * as types from '../../actions/action-types';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }
    logout() {
        store.dispatch({
            type: types.LOGOUT_REQUEST,
            isFetching: true,
            isAuthenticated: true,
        });
        alert('You have successfully logged out!');
        localStorage.removeItem('id_token');
        store.dispatch({
            type: types.LOGOUT_SUCCESS,
            isFetching: false,
            isAuthenticated: false,
        });
    }
    render() {
        console.log(this.props.isAuthenticated);
        console.log(localStorage.getItem('id_token'));
        return (
            <Navbar expand="md">
            <NavbarBrand href="/" className="mr-auto">KH Blog</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                    {
                        !this.props.isAuthenticated && (
                            <NavItem>
                                <NavLink href="/login">Log In</NavLink>
                            </NavItem>
                        )
                    }
                    {
                        this.props.isAuthenticated && (
                            <NavItem>
                                <NavLink href='#' onClick={this.logout}>Logout</NavLink>
                            </NavItem>
                        )
                    }
                </Nav>
            </Navbar>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.users.isAuthenticated,
    }
}

export default connect(mapStateToProps)(Header);
