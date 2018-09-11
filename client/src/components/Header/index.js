import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../store';
import * as types from '../../actions/action-types';
import {
    Container,
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
        sessionStorage.removeItem('id_token');
        store.dispatch({
            type: types.LOGOUT_SUCCESS,
            isFetching: false,
            isAuthenticated: false,
        });
    }
    render() {
        return (
            <Container>
                <Navbar expand="md">
                <NavbarBrand href="/" className="mr-auto">KH Blog</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        {
                            this.props.isAuthenticated && (
                                <NavItem>
                                    <NavLink href="/addpost">Add Post</NavLink>
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
            </Container>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.users.isAuthenticated,
    }
}

export default connect(mapStateToProps)(Header);
