Admin.components.shop.products.show.ui.form.info = {
  controller: function() {},
  view: function() {
    return m('section#products-form-info', [
      m('h3.form-title', [
        m('span', 'Title & Description', [
          // m('a.form-title---icon', { href: '#' }, 'Help with this section')
        ])
      ]),
      m('fieldset', [
        m('label.form-label', { for: 'text-title' }, 'Title'),
        m('input#text-title.fill-width', {
          type: 'text',
          value: Admin.models.products.data.single().title
        })
        //error
      ]),
      m('fieldset', [
        m('label.form-label', { for: 'text-url' }, 'Handle'),
        m('input#text-url.fill-width', {
          type: 'text',
          value: Admin.models.products.data.single().handle
        })
        // error
      ]),
      m('fieldset', [
        m('label.form-label', { for: 'text-subtitle' }, 'Subtitle'),
        m('textarea#text-description.fill-width.input-xmedium', {
          type: 'text',
          name: 'description',
          value: Admin.models.products.data.single().description
        })
        // error
      ])
    ]);
  }
};
