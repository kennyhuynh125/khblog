import React, { Component } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import axios from 'axios';
import TextEditor from '../TextEditor';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { Container, Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { connect } from 'react-redux';


class EditPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            editorState: EditorState.createEmpty(),
            id: 0,
        }
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.onChange = this.onChange.bind(this);
        this.editPost = this.editPost.bind(this);
    }

    // when component mountrs, get post to be edited and set title/editorState to what is currently used
    componentDidMount = () => {
        console.log(this.props.match.params.postid);
        fetch(`/api/posts/${this.props.match.params.postid}`)
        .then((resp) => resp.json())
        .then((data) => {
            const post = htmlToDraft(data[0].post);
            const contentState = ContentState.createFromBlockArray(post.contentBlocks);
            this.setState({
                title: data[0].title,
                editorState: EditorState.createWithContent(contentState),
                id: data[0].id,
            });
        })
        .catch(error => {
          console.log(error);
        });
    }

    // sets title state to user input
    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value,
        })
    }

    // sets editorState to user input
    onChange = (editorState) => {
        this.setState({
            editorState: editorState,
        })
    }

    // calls api to update post
    editPost = () => {
        const htmlString = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()));
        if (this.state.title.length === 0) {
            alert('Post must have title!');
            return;
        }
        // call post method to add to database
        axios.post('/api/updatepost', {
            title: this.state.title,
            post: htmlString,
            id: this.state.id,
        })
        .then((response) => {
            console.log(response);
            alert('Post successfully updated.');
        })
        .catch((error) => {
            console.log(error);
        })
    }

    render() {
        console.log(this.state);
        return (
            <Container>
            {
                this.props.isAuthenticated && (
                    <div>
                         <h1>Edit Post</h1>
                        <Form>
                            <FormGroup>
                                <Label for="title">Title</Label>
                                <Input type="text" name="title" onChange={this.handleTitleChange} value={this.state.title} />
                                <TextEditor editorState={this.state.editorState} onChange={this.onChange} />
                                <Button onClick={() => { if (window.confirm('Are you sure you want to edit?'))  this.editPost() }}>Submit</Button>
                            </FormGroup>
                        </Form>
                    </div>
                )   
            }
            {
                !this.props.isAuthenticated && (
                    <p>You don't have access to this page!</p>
                )
            }
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.users.isAuthenticated,
    }
}
export default connect(mapStateToProps)(EditPost);
