import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../store';
import * as types from '../../actions/action-types';
import { Container, Button } from 'reactstrap';
import Parser from 'html-react-parser';

class Post extends Component {
    // when component mounts, make api call to get post then dispatch it
    // to store in store
    componentDidMount() {
        fetch(`/api/posts/${this.props.match.params.postid}`)
        .then((resp) => resp.json())
        .then((data) => {
          store.dispatch({
            type: types.GET_POST_SUCCESS,
            posts: data,
          });
        })
        .catch(error => {
          console.log(error);
        });
    }

    render() {
       let post = this.props.post !== undefined ? this.props.post[0] : undefined;
        return (
            <div>
                <Container>
                    {
                        post !== undefined && (
                            <div>
                                <h1>{post.title}</h1>
                                <p>{post.created_at}</p>
                                <div>
                                    {Parser(post.post)}
                                </div>
                            </div>
                        )
                    }
                    {
                        this.props.isAuthenticated && (
                            <Button color="primary">Edit</Button>
                        )
                    }
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        post: state.posts.posts,
        isAuthenticated: state.users.isAuthenticated,
    }
}
export default connect(mapStateToProps)(Post);
