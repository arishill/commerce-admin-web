Template.aristotle__reports__show.helpers({
  getDropdownOptions: function(value) {
    return {
      css: 'dropdown--bottom dropdown--xsmall',
      anchor: {
        css: 'btn-dropdown-white btn--small',
        text: value
      },
      options: {
        close_on_click: true,
        select_input: true,
        name: 'quantity'
      },
      list: {
        css: 'text-center text-small border-gray-light border--all arrow-top-middle',
        items: [
          { text: '1', value: '1' },
          { text: '2', value: '2' },
          { text: '3', value: '3' }
        ]
      }
    };
  }
});