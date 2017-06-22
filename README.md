# Boilerplate CodeMirror editor with Tern.js autocomplete
This is a simple boilerplate to get up and running quickly with CodeMirror, Tern, and Webpack.

## Get started

1.  Clone the repo
1.  Run `$ npm install`
1.  Start the dev server with `$ webpack-dev-server`
1.  Navigate to `localhost:8080` in your browser
1.  Copy and paste code from this Tern.js demo into the editor at `localhost:8080`: http://ternjs.net/doc/demo/index.html#ES6
1.  Try out some of the Tern.js functions listed underneath the editor

## CodeMirror editor component

The `editor.js` file is an Editor component that creates an instance of CodeMirror. This file is where CodeMirror modes are set and addons are imported, like:

- `codemirror/mode/javascript/javascript`
- `codemirror/addon/selection/active-line`
- `codemirror/addon/comment/comment`
- `codemirror/addon/hint/show-hint`

You can find more documentation on these addons at CodeMirror.

## Tern plugins and defs

This boilerplate loads a few Tern plugins and a single Tern defs file via installTern.js:

- `tern/plugin/doc_comment`
- `tern/plugin/complete_strings`
- `tern/defs/ecmascript.json`

The ecmascript.json file, which supplies code hints, autocomplete, etc. for ES6, is called/loaded with this line:

`const tern = new CodeMirror.TernServer({ defs: [ecma] });`

You can import additional defs files and load them into the defs array, like this:

```import ecma from 'tern/defs/ecmascript.json';
import browser from 'tern/defs/browser.json';
import underscore from 'tern/defs/underscore.json';

const tern = new CodeMirror.TernServer({ defs: [ecma, browser, underscore] });
```

You can find more documentation on defs and plugins at Tern.js.
