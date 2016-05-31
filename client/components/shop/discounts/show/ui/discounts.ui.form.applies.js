'use strict';

Admin.components.shop.discounts.show.ui.form.applies = {
  controller: function() {
    return new Admin.components.shop.discounts.show.controller();
  },
  view: function(ctrl) {
    return m('section#discounts-form-applies', [
      m('h3.form-title', [
        m('span', 'Applies to')
      ])
    ]);
  }
};
