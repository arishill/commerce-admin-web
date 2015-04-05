Template.aristotle__coupons__form_email.helpers({
  getDropdownOptions: function(value) {
    return {
      css: 'dropdown--bottom dropdown--fill fill-width',
      anchor: {
        css: 'btn-dropdown-gray-light text-left fill-width',
        text: value
      },
      options: {
        close_on_click: true,
        select_input: true,
        name: 'date_due'
      },
      list: {
        css: 'text-center fill-width text-small border-gray-light border--all arrow-top-right',
        items: [
          { text: '7 days',   value: 'seven_days' },
          { text: '14 days',  value: 'fourteen_days' },
          { text: '30 days',  value: 'thirty_days' },
          { text: '60 days',  value: 'sixty_days' }
        ]
      }
    };
  }
});

Template.aristotle__coupons__form_applies.helpers({
  appliesOptions: function(value) {
    return {
      css: 'dropdown--bottom dropdown--fill fill-width',
      anchor: {
        css: 'btn-dropdown-gray-light text-left fill-width',
        text: value
      },
      options: {
        close_on_click: true,
        select_input: true,
        name: 'date_due'
      },
      list: {
        css: 'text-center fill-width text-small border-gray-light border--all arrow-top-right',
        items: [
          { text: '7 days',   value: 'seven_days' },
          { text: '14 days',  value: 'fourteen_days' },
          { text: '30 days',  value: 'thirty_days' },
          { text: '60 days',  value: 'sixty_days' }
        ]
      }
    };
  }
});

Template.aristotle__coupons__form_discount.helpers({
  generatedEmail: function() {
    return true;
  },

  customCode: function() {
    return false;
  },

  generatedCode: function() {
    return false;
  },

  markdownOptions: function(value) {
    return {
      css: 'dropdown--bottom dropdown--fill fill-width',
      anchor: {
        css: 'btn-dropdown-gray-light text-left fill-width',
        text: value
      },
      options: {
        close_on_click: true,
        select_input: true,
        name: 'date_due'
      },
      list: {
        css: 'text-center fill-width text-small border-gray-light border--all arrow-top-right',
        items: [
          { text: '7 days',   value: 'seven_days' },
          { text: '14 days',  value: 'fourteen_days' },
          { text: '30 days',  value: 'thirty_days' },
          { text: '60 days',  value: 'sixty_days' }
        ]
      }
    };
  },

  codeOptions: function(value) {
    return {
      css: 'dropdown--bottom dropdown--fill fill-width',
      anchor: {
        css: 'btn-dropdown-gray-light text-left fill-width',
        text: value
      },
      options: {
        close_on_click: true,
        select_input: true,
        name: 'date_due'
      },
      list: {
        css: 'text-center fill-width text-small border-gray-light border--all arrow-top-right',
        items: [
          { text: '7 days',   value: 'seven_days' },
          { text: '14 days',  value: 'fourteen_days' },
          { text: '30 days',  value: 'thirty_days' },
          { text: '60 days',  value: 'sixty_days' }
        ]
      }
    };
  }
});