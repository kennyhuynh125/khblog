import React, { Component } from 'react';
import { Container, Form, FormGroup, Input, Label } from 'reactstrap';
import TextEditor from '../TextEditor';
import { EditorState } from 'draft-js';
import { connect } from 'react-redux';

class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
            title: '',
        };
        this.onChange = this.onChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
    }

    onChange = (editorState) => {
        this.setState({
            editorState: editorState,
        });
    }

    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value,
        });
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
