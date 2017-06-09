import React from 'react';
import { render } from 'react-dom';
import Editor from 'components/editor';

require('editor.scss');
// i think putting this here is wrong, but webpack not resolving css for some reason :(
require('../node_modules/codemirror/addon/tern/tern.scss');

class App extends React.Component {
  render() {
    return (
      <div>
        <Editor />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));
