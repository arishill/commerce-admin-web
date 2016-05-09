'use strict';

Admin.components.shared.dropdown.ui.container = {
  controller: function() {
    let self = this;

    self.isOpen = m.prop(false);
    self.isChanged = m.prop(false);
  },
  view: function(ctrl, data) {
    return m('div.dropdown.dropdown--bottom.dropdown--fill.fill-width', [
      m('a[href=#].btn-dropdown-gray-light.text-left.fill-width', {
        onclick: function(event) {
          event.preventDefault();
          if (ctrl.isOpen()) {
            ctrl.isOpen(false);
          }
          else {
            ctrl.isOpen(true);
          }
        }
      }, data.selectedVal() ? data.selectedVal().label : data.label),
      data.input ? m('input[type=hidden]', { name: ctrl.isChanged() ? data.name : '', value: data.selectedVal().name}) : '',
      m('ul.dropdown-list.text-center.text-small.arrow-top-right.box-shadow' + (ctrl.isOpen() ? '.is-active' : ''), [
        data.items.map(function(item){
          return m('li', [
            m('a', { href: item.link ? item.link : '#', onclick: function(event) {
              event.preventDefault();
              data.selectedVal({
                name: item.name,
                label: item.label
              });
              ctrl.isChanged(true);
              ctrl.isOpen(false);
            } }, item.label)
          ]);
        })
      ])
    ]);
  }
};
