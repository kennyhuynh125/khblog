import React, { Component } from 'react';
import * as types from './actions/action-types';
import store from './store';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    fetch(`/api/posts/1`)
    .then((resp) => resp.json())
    .then((data) => {
      store.dispatch({
        type: types.GET_POST_SUCCESS,
        post: data,
      });
    })
    .catch(error => {
      console.log(error);
    });
  }
  render() {
    console.log(this.props.posts);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
       {
         this.props.posts.map(post => {
           return (
            <div key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.post}</p>
            </div>
           )
         })
       }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
  }
}
export default connect(mapStateToProps)(App);
