Template.aristotle__pagination__table.helpers({
  'getDropdownOptions': function() {
    return {
      css: 'dropdown--top dropdown--xsmall',
      anchor: {
        css: 'link-gray-dark',
        text: 'Page 1'
      },
      options: {
        close_on_click: true,
        select_input: true,
        name: 'pagination'
      },
      list: {
        css: 'text-center text-small arrow-bottom-middle box-shadow',
        items: [
          { text: '1', value: '1' },
          { text: '2', value: '2' },
          { text: '3', value: '3' }
        ]
      }
    };
  }
});