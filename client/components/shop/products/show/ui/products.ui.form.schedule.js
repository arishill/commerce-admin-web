Admin.components.shop.products.show.ui.form.schedule = {
  controller: function() {},
  view: function() {
    return m('section#products-form-schedule', [
      m('h3.form-title', [
        m('span', 'Schedule', [
          // m('a.form-title---icon', { href: '#' }, 'Help with this section')
        ])
      ]),
      m('div.row', [
        m('fieldset.col.small-1-2.padding-right-small', [
          m('input#schedule-start.fill-width', {
            type: 'text',
            placeholder: 'Schedule Start',
            value: Admin.models.products.data.single().scheduled.start
          })
          //error
        ]),
        m('fieldset.col.small-1-2.padding-left-small', [
          m('input#schedule-end.fill-width', {
            type: 'text',
            placeholder: 'Schedule End',
            value: Admin.models.products.data.single().scheduled.end
          })
          //error
        ]),
      ])
    ]);
  }
};
