import React, { PropTypes } from 'react';
import CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/selection/active-line';
import '../editor.scss'

class Editor extends React.Component {
  _cm: CodeMirror.Editor

  componentDidMount() {
    this._cm = CodeMirror(this.codemirrorContainer, {
      lineNumbers: true,
      styleActiveLine: true,
      mode: 'javascript'
    });
  }

  render() {
    return <div ref={(element) => { this.codemirrorContainer = element; }}>
        </div>;
  }
}

export default Editor;


