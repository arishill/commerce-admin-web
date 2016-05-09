'use strict';

(function(coupon, c, m) {

  coupon.edit.notify = {
    view: function(ctrl, doc) {
      return m('section.box-shadow.row.margin-top-xlarge', [
        m('h3.form-title', 'Email Notification', [
          // m('a[href=#].form-title---icon', 'Help with this section')
        ]),
        m('.padding-large', [])
      ]);
    }
  };

})(app.component.shop.coupons.show, app.component, m);
