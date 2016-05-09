'use strict';

(function(coupons, c, m) {

  coupons.container = {
    controller: function() {
      A.coupons.list();
    },
    view: function() {
      return m('section#shop-coupons-index', [
        m.component(c.header, {
          title: 'Coupons',
          icon: 'icon-coupon-site',
          buttons: {
            has_add: true
          }
        }),
        m.component(coupons.table)
      ]);
    }
  };

  coupons.table = {
    view: function() {
      if (app.model.coupons.list()) {
        return m('table.table', [
          m('thead', [
            m('tr', [
              m('th.text-center.set-20'),
              m('th.text-center.small-1-16', 'Status'),
              m('th.text-left.small-4-16', 'Title'),
              m('th.text-left.set-30', 'Code'),
              m('th.text-center.small-3-16', 'Discount'),
              m('th.text-center.small-1-16', 'Redeemed'),
              m('th.text-center.small-1-16', 'Limit'),
              m('th.text-center.set-30.padding-horz-small')
            ]),
          ]),
          m('tbody', [
            app.model.coupons.list().map(function(item, index) {
              return m.component(coupons.row, item, index);
            })
          ])
        ]);
      }
      else {
        return m('.text-center.text-gray.padding-medium', 'Loading...');
      }
    }
  };

  coupons.row = {
    view: function(ctrl, item, index) {
      return m('tr.has-cursor', {
        onclick: function(event) {
          event.preventDefault();
          m.route('/shop/coupons/'+ item.id);
        }
      }, [
        m('td.text-center', [
          m.component(c.checkbox, { checked: false, name: item.id, index: index})
        ]),
        m('td.text-center', [
          m('form', [
            m('input[type=hidden]', { value: '0', name: 'flags[is_active]' }),
            m('input.btn-' + (item.flags.is_active ? 'green' : 'gray') + '.btn--fill.btn--small[type=submit]', { value: item.flags.is_active ? 'Active' : 'Inactive' })
          ])
        ]),
        m('td.text-left', item.title),
        m('td.text-center', m.trust('<span class="text--small text--wide">' + item.ticket.code.toUpperCase() + '</span>')),
        m('td.text-center', m.trust('<span class="text-yellow text--italic">' + coupons.helpers.getDiscount(item.discount) + '</span>')),
        m('td.text-center', item.count.used),
        m('td.text-center', item.count.limit ? item.count.limit : m.trust('<i class="icon-infinity-black icon--small"></i>')),
        m('td.text-center.border-gray.border--left.border--bottom.padding-horz-small.btn-block', [
          m('form', [
            m('div.bg-white.box-shadow.arrow-right-middle.padding-small.is-hidden[data-confirm]', [
              m('h5.is-inline.margin-right-small', 'Are you sure?'),
              m('a[href=#][data-cancel]btn-gray.btn--small.margin-right-xsmall', 'Cancel'),
              m('a[href=#][data-ok].btn-red.btn--small', 'Delete')
            ]),
            m('input.btn.icon-trash-red.icon--center[type=submit]', { value: 'Delete '})
          ])
        ])
      ]);
    }
  };

  coupons.helpers = {
    getDiscount: function(discount) {
      if (discount.type === 'amount') {
        return accounting.formatMoney(discount.amount_cents/100) + ' OFF';
      }

      if (discount.type === 'percentage') {
        return (discount.percentage * 100) + '% OFF';
      }

      if (discount.type === 'free') {
        return 'FREE';
      }
    }
  };

})(app.component.shop.coupons.index, app.component, m);
