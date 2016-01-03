'use strict';

(function(categories, c, m) {

  categories.container = {
    view: function() {
      return m('section#shop-categories-index', [
        m.component(c.header, {
          title: 'Categories',
          icon: 'icon-product-site'
        })
      ]);
    }
  };

})(app.component.shop.categories.index, app.component, m);
