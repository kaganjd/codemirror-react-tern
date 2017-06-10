// github.com/wonderstudio/src/editor/installTern.js
import CodeMirror from 'codemirror';
import 'imports-loader?tern=tern!codemirror/addon/tern/tern';

// TODO: figure out why in example code -- http://ternjs.net/doc/demo/#ES6 -- 
// 'elt' at line 12 doesn't register as a number on ctrl-i
import ecma from 'tern/defs/ecmascript.json';

module.exports = function (cm) {
  const tern = new CodeMirror.TernServer({ defs: [ecma] });
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
