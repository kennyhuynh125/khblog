import React, { Component } from 'react';
import { Route } from 'react-router';

import Home from '../Home';
import Login from '../LogIn';

class Main extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
            </div>
        )
    }
}

export default Main;
