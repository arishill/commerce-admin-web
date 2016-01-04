'use strict';

(function(c, m) {
  c.checkbox = {
    view: function(ctrl, checkbox) {
      return m('.checkbox', [
        m('input[type=checkbox]', {
          name: checkbox.name + (checkbox.index ? '[' + checkbox.index + ']' : ''),
          id: checkbox.name + (checkbox.index ? '_' + checkbox.index : ''),
          checked: checkbox.checked
        }),
        m('label', {
          for: checkbox.name + (checkbox.index ? '_' + checkbox.index : '')
        }, [
          m('i.icon-check-site')
        ])
      ]);
    }
  };

})(app.component, m);
