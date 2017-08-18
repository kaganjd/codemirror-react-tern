import React from 'react';
import { render } from 'react-dom';
import Editor from 'components/editor';

require('editor.scss');

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
