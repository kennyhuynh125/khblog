import React, {Component} from 'react';
import {Editor, EditorState} from 'draft-js';

class TextEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange = (editorState) => {
        this.setState({
            editorState: editorState,
        })
    }

    render() {
        console.log(this.state);
        return (
            <Editor editorState={this.state.editorState} onChange={this.onChange} />
        )
    }
}

export default TextEditor;
