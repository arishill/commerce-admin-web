'use strict';

Admin.components.shop.discounts.show.ui.form.notify = {
  controller: function() {
    return new Admin.components.shop.discounts.show.controller();
  },
  view: function(ctrl) {
    return m('section#discounts-form-notify', [
      m('h3.form-title', [
        m('span', 'Email Notification')
      ])
    ]);
  }
};
