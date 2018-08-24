import React, {Component} from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
class TextEditor extends Component {
    render() {
        return (
            <div>
                <Editor editorState={this.props.editorState} onEditorStateChange={this.props.onChange} />
            </div>
        )
    }
}

export default TextEditor;
