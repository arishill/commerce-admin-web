'use strict';

Admin.components.shared.dropdown.ui.container = {
  controller: function(data) {
    let self = this;

    self.selected = m.prop(data.selectedVal());
    self.isOpen = m.prop(false);
    self.isChanged = m.prop(false);
  },
  view: function(ctrl, data) {
    return m('div.dropdown.dropdown--bottom.dropdown--' + (data.width ? data.width : 'fill') +'.fill-width', [
      m('a[href=#].btn-dropdown-' + (data.color ? data.color : 'gray-light') + '.text-left.fill-width' + (data.size ? ('.btn--' + data.size) : '') + (data.icon_only ? '.icon--center' : ''), {
        onclick: function(event) {
          event.preventDefault();
          if (ctrl.isOpen()) {
            ctrl.isOpen(false);
          }
          else {
            ctrl.isOpen(true);
          }
        }
      }, ctrl.selected() ? ctrl.selected().label : data.label),
      data.input ? m('input[type=hidden]', {
        name: ctrl.isChanged() ? data.name : '',
        value: ctrl.selected() ? ctrl.selected().name : null
      }) : '',
      m('ul.dropdown-list.text-center.text-small.arrow-top-right.box-shadow' + (ctrl.isOpen() ? '.is-active' : ''), {
        style: {
          top: data.size === 'small' ? '38px' : '48px'
        }
      }, [
        data.items.map(function(item){
          return m('li' + (item.is_disabled ? '.is-transparent-high' : ''), [
            m('a' + (item.icon ? '.icon--small.icon--left.icon-' + item.icon + '-gray' : ''), { href: item.link ? item.link : '#', onclick: function(event) {
              event.preventDefault();
              ctrl.selected({
                name: item.name,
                label: item.label
              });
              ctrl.isChanged(true);
              ctrl.isOpen(false);
              if (data.onselect) {
                data.onselect(ctrl.selected());
              }
            } }, item.label)
          ]);
        })
      ])
    ]);
  }
};
