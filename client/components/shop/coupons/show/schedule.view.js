'use strict';

(function(coupon, c, m) {

  coupon.edit.schedule = {
    view: function(ctrl, doc) {
      return m('section.box-shadow.row.margin-top-xlarge', [
        m('h3.form-title', 'Schedule', [
          // m('a[href=#].form-title---icon', 'Help with this section')
        ]),
        m('.padding-large', [])
      ]);
    }
  };

})(app.component.shop.coupons.show, app.component, m);
