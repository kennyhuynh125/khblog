import React, { Component } from 'react';
import { Route } from 'react-router';

import Home from '../Home';
import Login from '../LogIn';
import Post from '../Post';
import AddPost from '../AddPost';
import EditPost from '../EditPost';

class Main extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/post/:postid" component={Post} />
                <Route exact path="/addpost" component={AddPost} />
                <Route exact path="/edit/:postid" component={EditPost} />
            </div>
        )
    }
}

export default Main;
