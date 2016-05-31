'use strict';

Admin.components.shop.discounts.show.ui.form.schedule = {
  controller: function() {
    return new Admin.components.shop.discounts.show.controller();
  },
  view: function(ctrl) {
    return m('section#discounts-form-schedule', [
      m('h3.form-title', [
        m('span', 'Schedule')
      ])
    ]);
  }
};
