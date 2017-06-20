import React, { PropTypes } from 'react';
import CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/selection/active-line';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/hint/show-hint';

class Editor extends React.Component {
  _cm: CodeMirror.Editor

  componentDidMount() {
    this._cm = CodeMirror(this.codemirrorContainer, {
      lineNumbers: true,
      styleActiveLine: true,
      mode: 'javascript'
    });

    this.tern = require('../utils/installTern')(this._cm)
  }

  render() {
    return (
      <div>
      <div ref={(element) => { this.codemirrorContainer = element; }}>
        </div>
      <ul>
        <li>Ctrl-Space: complete</li>
        <li>Ctrl-I: show type</li>
        <li>Ctrl-O: show docs</li>
        <li>Alt-.: jump to def</li>
        <li>Alt-,: jump back</li>
        <li>Ctrl-Q: rename</li>
        <li>Ctrl-.: select name</li>
      </ul>
      </div>
    );
  }
}

export default Editor;


