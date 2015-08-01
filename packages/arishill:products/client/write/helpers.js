
Template.aristotle__products__form_price.helpers({
  getSaleToggle: function(index, checked) {
    return {
      css: 'js-sale-toggle',
      options: {},
      index: index,
      name: 'flags[is_sale]',
      checked: checked
    }
  },

  getBulkMarkdownsToggle: function(index, checked) {
    return {
      css: 'js-sale-toggle',
      options: {},
      index: index,
      name: 'flags[ignore_bulk_markdowns]',
      checked: checked
    }
  },

});

Template.aristotle__products__edit.helpers({
  getStatusToggle: function(index, checked) {
    return {
      css: 'js-status-toggle checkbox--large',
      options: {},
      index: index,
      name: 'flags[is_active]',
      checked: checked
    }
  },
  getDropdownOptions: function() {
    return {
      css: 'dropdown--bottom dropdown--fill js-jumpto',
      anchor: {
        css: 'btn-dropdown-white btn--small btn--borderless text-left',
        text: 'Jump to Section'
      },
      options: {
        close_on_click: true,
        select_input: true,
        name: 'jumpto'
      },
      list: {
        css: 'text-center fill-width text-small border-gray-light border--all arrow-top-right',
        items: [
          { text: 'Info', value: '#products-form-info' },
          { text: 'Pricing', value: '#products-form-pricing' },
          { text: 'Images', value: '#products-form-images' },
          { text: 'Variants', value: '#products-form-variants' },
          { text: 'Categories', value: '#products-form-categories' }
        ]
      }
    };
  }
});

Template.aristotle__products__form_variants.helpers({
  getProductStock: function(product) {
    var stock = 0;
    _.each(product.variants, function(variant, index) {
      stock = stock + variant.stock;
    });

    return stock;
  }
});