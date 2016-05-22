Admin.components.shop.products.show.ui.form.images = {
  controller: function() {},
  view: function() {
    return m('section#products-form-images', [
      m('h3.form-title', [
        m('span', 'Images', [
          // m('a.form-title---icon', { href: '#' }, 'Help with this section')
        ])
      ]),
      m('fieldset.image-multi', [
        m('label.form-label', { for: 'text-title' }, 'Cart/Catalog Image', [
          m('span.text--small.text--italic', '465 x 345 ratio')
        ]),
        m('ul.row.border-gray-light.border--top.border--bottom', [
          m('li.contain.col.small-1-4.bg-gray-light.text-middle.text-center', {
              style: {
                height: '150px'
              }
            }, [
            m('button.btn-black.icon--center.icon-camera-white', 'Add Images')
          ]),
          m('li.contain.col.small-1-4.image', [
            m('img', {
              src: Admin.models.products.data.single().skus[0].images.cascade
            }),
            m('a.btn-red.btn--circle.btn--small.icon--center.icon-trash-white.icon--medium', 'Delete')
          ])
        ])
        // m('input[type="file"]', {
        //  multiple: true
        // })
        //error
      ]),
      // m('fieldset', [
      //   m('label.form-label', { for: 'text-title' }, 'Gallery Images', [
      //     m('span.text--small.text--italic', '465 x 345 ratio')
      //   ]),
      //   m('ul.row.border-gray-light.border--top.border--bottom', [
      //     m('li.contain.col.small-1-4.bg-gray-light.text-middle.text-center', {
      //         style: {
      //           height: '150px'
      //         }
      //       }, [
      //       m('button.btn-black.icon--center.icon-camera-white', 'Add Images')
      //     ]),
      //     Admin.models.products.data.single().skus[0].images.gallery ?
      //       Admin.models.products.data.single().skus[0].images.gallery.map(function(image, index) {
      //         return m('li.contain.col.small-1-4', [
      //           m('img'),
      //           m('a.btn-red.btn--circle.btn--small.icon--center.icon-trash-white.icon--medium', 'Delete')
      //         ]);
      //       }) : ''
      //   ]),
        // m('input[type="file"]', {
        //  multiple: true
        // })
        //error
      // ])
    ]);
  }
};
