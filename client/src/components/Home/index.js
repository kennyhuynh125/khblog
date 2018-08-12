import React, { Component } from 'react';
import * as types from '../../actions/action-types';
import store from '../../store';
import { connect } from 'react-redux';

import PostIntro from '../PostIntro';
import { Container, Row } from '../../../node_modules/reactstrap';

class Home extends Component {
  componentDidMount() {
    fetch(`/api/posts`)
    .then((resp) => resp.json())
    .then((data) => {
      store.dispatch({
        type: types.GET_POSTS_SUCCESS,
        posts: data,
      });
    })
    .catch(error => {
      console.log(error);
    });
  }
  render() {
    console.log(this.props.posts);
    return (
      <div>
        <Container>
          <Row>
          {
            this.props.posts.map(post => {
              return (
                <PostIntro key={post.id}
                  id={post.id}
                  title={post.title}
                  post={post.post.substring(0,50)}
                  date={post.created_at}
                />
              )
            })
          }
        </Row>
       </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
  }
}
export default connect(mapStateToProps)(Home);
