import React, {Component} from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
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
            <div>
                <Editor editorState={this.state.editorState} onEditorStateChange={this.onChange} />
            </div>
        )
    }
}

export default TextEditor;
