# Boilerplate CodeMirror with Tern.js autocomplete
This is meant to be a bare bones boilerplate to get up and running quickly with CodeMirror, Tern, and Webpack.

## Getting started
1.  Clone the repo
1.  Run `$ npm install`
1.  Start the dev server with `$ webpack-dev-server`
1.  Navigate to `localhost:8080` in your browser
1.  Copy and paste the code from this Tern.js demo and test some of the commands that appear underneath the editor: http://ternjs.net/doc/demo/index.html#ES6

## CodeMirror 
The `editor.js` is an Editor component that instantiates a CodeMirror editor. This is where the following CodeMirror addons and modes are imported:

- `codemirror/addon/selection/active-line`
- `codemirror/addon/comment/comment'`
- `codemirror/addon/hint/show-hint`

You can find more documentation on these addons at CodeMirror.

## Tern.js plugins and defs
The `installTern.js` file imports the following plugins and `defs` files:

- `tern/plugin/doc_comment`
- `tern/plugin/complete_strings`
- `tern/defs/ecmascript.json`

The ES6 defs file is loaded in this line:

`const tern = new CodeMirror.TernServer({ defs: [ecma] });`

Other defs files can be imported and added to the defs array, like this:

```
import ecma from 'tern/defs/ecmascript.json';
import browser from 'tern/defs/browser.json';
import underscore from 'tern/defs/underscore.json';

...
const tern = new CodeMirror.TernServer({ defs: [ecma, browser, underscore] });
...
```

You can find more documentation on defs and plugins at Tern.js.
