'use strict';

Admin.components.shop.discounts.index.ui.container = {
  controller: function() {
    return new Admin.components.shop.discounts.index.controller({
      init: true
    });
  },
  view: function(ctrl) {
    return m('section#shop-orders-index', [
      m.component(Admin.components.shared.header.ui.container, {
        title: 'Discounts',
        icon: 'icon-coupon-site',
        buttons: {
          has_add: true
        },
        search: ctrl.search
      }),
      m.component(Admin.components.shop.discounts.index.ui.table)
    ]);
  }
};

Admin.components.shop.discounts.index.ui.table = {
  controller: function() {
    return new Admin.components.shop.discounts.index.controller();
  },
  view: function(ctrl) {
    if (ctrl.discounts()) {
      return m('table.table', [
        m('thead', [
          m('tr', [
            m('th.text-center.set-20'),
            m('th.text-center', 'Type'),
            m('th.text-left', 'Name / Scope'),
            m('th.text-center', 'Code'),
            m('th.text-center', 'Markdown'),
            m('th.text-center', 'End Date'),
            m('th.text-center', 'Redeemed / Limit'),
            m('th.text-center', 'Status')
          ]),
        ]),
        m('tbody', [
          ctrl.discounts().map(function(item, index) {
            return m.component(Admin.components.shop.discounts.index.ui.row, item, index);
          })
        ])
      ]);
    }
    else {
      return m('.text-center.text-gray.padding-medium', 'Loading...');
    }
  }
};

Admin.components.shop.discounts.index.ui.row = {
  controller: function() {
    return new Admin.components.shop.discounts.index.controller();
  },
  view: function(ctrl, item, index) {
    return m('tr.has-pointer' + (m.route.param('id') === item.id ? '.bg-gray-xxlight' : ''), {
      onclick: function(event) {
        let parent = event.target.parentElement ? event.target.parentElement.nodeName : null;
        if (parent && parent === 'TD' || event.target.nodeName === 'TD') {
          event.preventDefault();
          m.route('/shop/discounts/' + item.id);
        }
      }
    }, [
      m('td.text-center', [
        m.component(Admin.components.shared.checkbox.ui.container, { checked: false, name: item.id, index: index})
      ]),
      m('td.text-center', _.capitalizeFirstLetter(item.type)),
      m('td.text-left', [
        m('p', item.title),
        m('p.text-gray.text--small.text--italic', 'All Products'),
      ]),
      m('td.text-center', item.ticket ? item.ticket.code.toUpperCase() : m.trust('&mdash;')),
      m('td.text-center', [
        m('span.text-yellow', ctrl.getMarkdown(item))
      ]),
      m('td.text-center', item.scheduled && item.scheduled.end ? moment(item.scheduled.end).format('MM/DD/YYYY') : [
        m('i.icon-infinity-gray.icon--small')
      ]),
      m('td.text-center', m.trust(item.count.used + ' / ' +
        (item.count.limit ? item.count.limit : '&mdash;'))),
      m('td.text-center', [
        m('.contain' + (item.scheduled && item.scheduled.start ? '.padding-bottom-small' : ''), [
          m('div', [
            m('span.tag-' + ctrl.getDiscountStatus(item).color, {
              style: {
                minWidth: '90px'
              }
            }, ctrl.getDiscountStatus(item).text)
          ]),
          item.scheduled && item.scheduled.start ? m('span.text-gray.text--small.absolute.top.left.padding-top-medium.margin-top-small.fill-width.text-center', moment(item.scheduled.start).format('MM/DD/YYYY')) : ''
        ])
      ])
    ]);
  }
};
