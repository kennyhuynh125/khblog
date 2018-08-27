import React, { Component } from 'react';
import { Container, Form, FormGroup, Input, Label, Button } from 'reactstrap';
import TextEditor from '../TextEditor';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { connect } from 'react-redux';
import axios from 'axios';

class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
            title: '',
        };
        this.onChange = this.onChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.addPost = this.addPost.bind(this);
    }

    // on change method for changing editor state
    onChange = (editorState) => {
        this.setState({
            editorState: editorState,
        });
    }

    // method for changing title state
    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value,
        });
    }

    // adds post to database
    addPost() {
        const htmlString = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()));
        if (this.state.title.length === 0) {
            alert('Post must have title!');
            return;
        }
        // call post method to add to database
        axios.post('/api/insertpost', {
            title: this.state.title,
            post: htmlString,
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    render() {
        return (
            <Container>
                {
                    this.props.isAuthenticated && (
                        <div>
                             <h1>Add Post</h1>
                            <Form>
                                <FormGroup>
                                    <Label for="title">Title</Label>
                                    <Input type="text" name="title" onChange={this.handleTitleChange} />
                                    <TextEditor editorState={this.state.editorState} onChange={this.onChange} />
                                    <Button onClick={() => { if (window.confirm('Are you sure you want to add?'))  this.addPost() }}>Submit</Button>
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
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.users.isAuthenticated,
    }
}
export default connect(mapStateToProps)(AddPost);
