'use strict';

Admin.components.shared.toggle.ui.container = {
  view: function(ctrl, checkbox) {
    return m('.checkbox-alt', [
      m('input[type=checkbox]', {
        name: checkbox.name + (checkbox.index ? '[' + checkbox.index + ']' : ''),
        id: checkbox.name + (checkbox.index ? '_' + checkbox.index : ''),
        checked: checkbox.checked,
        onchange: checkbox.onchange
      }),
      m('label', {
        for: checkbox.name + (checkbox.index ? '_' + checkbox.index : '')
      }, [
        m('span.disc')
      ])
    ]);
  }
};
