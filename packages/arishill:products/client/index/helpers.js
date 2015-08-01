Template.aristotle__products__index.helpers({
  products: function() {
    return Template.instance().products();
  },
  hasMoreProducts: function() {
    return Template.instance().products().count() < Session.get('products_count');
  },
  productsLoaded: function() {
    return Template.instance().loaded.get();
  }
});

Template.aristotle__products__table_head.helpers({
  getProductSelectAll: function() {
    return {
      css: '',
      options: {
        select_all: 'product_row'
      },
      index: null,
      name: 'select_all',
      checked: false
    }
  }
});

Template.aristotle__products__table_row.helpers({
  getProductStock: function(product) {
    var stock = 0;
    _.each(product.variants, function(variant, index) {
      stock = stock + variant.stock;
    });

    return stock;
  },

  getProductSelect: function(index) {
    return {
      css: '',
      options: {},
      index: index,
      name: 'product_row',
      checked: false
    }
  },

  getSaleToggle: function(index, checked) {
    return {
      css: 'js-sale-toggle',
      options: {},
      index: index,
      name: 'flags[is_sale]',
      checked: checked
    }
  },

  getProductFilter: function() {
    return {
      css: 'dropdown--bottom dropdown--small',
      anchor: {
        css: 'icon-filter-gray icon--center',
        text: 'Filter'
      },
      options: {
        close_on_click: true,
        select_input: true,
        name: 'pagination'
      },
      list: {
        css: 'text-center text-small arrow-top-middle box-shadow',
        items: [
          { text: 'Popular', value: '1' },
          { text: 'Featured', value: '2' },
          { text: 'Men\'s', value: '3' },
          { text: 'Women\'s', value: '4' }
        ]
      }
    };
  }
});