import React, { Component } from 'react';
import { Route } from 'react-router';

import Home from '../Home';
import Login from '../LogIn';
import Post from '../Post';
import AddPost from '../AddPost';

class Main extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/post/:postid" component={Post} />
                <Route exact path="/addpost" component={AddPost} />
            </div>
        )
    }
}

export default Main;
