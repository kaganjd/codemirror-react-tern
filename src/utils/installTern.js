// github.com/wonderstudio/src/editor/installTern.js
import CodeMirror from 'codemirror';
import 'codemirror/addon/dialog/dialog';
import 'codemirror/addon/hint/show-hint';
import 'imports-loader?tern=tern!codemirror/addon/tern/tern';

import 'codemirror/addon/dialog/dialog';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/tern/tern.css';

// import 'tern/lib/signal';
// import 'tern/lib/tern';
// import 'tern/lib/def';
// import 'tern/lib/comment';
// import 'tern/lib/infer';
// import 'tern/plugin/doc_comment';

import es6 from 'tern/defs/ecmascript.json';

module.exports = function (cm) {
  const tern = new CodeMirror.TernServer({ defs: es6 });
  cm.setOption('extraKeys', {
    'Ctrl-Space': cm => tern.complete(cm),
    'Ctrl-I': cm => tern.showType(cm),
    'Ctrl-O': cm => tern.showDocs(cm),
    'Alt-.': cm => tern.jumpToDef(cm),
    'Alt-,': cm => tern.jumpBack(cm),
    'Ctrl-Q': cm => tern.rename(cm),
    'Ctrl-.': cm => tern.selectName(cm)
  })
  cm.on('cursorActivity', cm => tern.updateArgHints(cm))
  cm.on('change', (instance, change) => {
    if (change.text.length === 1 && change.text[0] === '.') {
      tern.complete(cm)
    }
  })
  return tern
}
