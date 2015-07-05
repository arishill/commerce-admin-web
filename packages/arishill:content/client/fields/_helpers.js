Template.aristotle__content__fields_dropdown.helpers({
  getDropdownOptions: function() {
     return {
      css: 'dropdown--bottom dropdown--fill fill-width',
      anchor: {
        css: 'btn-dropdown-gray-light text-left fill-width',
        text: 'Page 1'
      },
      options: {
        close_on_click: true,
        select_input: true,
        name: 'pagination'
      },
      list: {
        css: 'text-center fill-width text-small border-gray-light border--all arrow-top-right',
        items: [
          { text: '1', value: '1' },
          { text: '2', value: '2' },
          { text: '3', value: '3' }
        ]
      }
    };
  }
});

Template.aristotle__content__fields_image_multi.helpers({
  getImageMultiOptions: function() {
    var options = {};

    options[this.name] = {
      w: this.width,
      h: this.height,
      fit: this.fit
    };

    Imgix.addDefinitions(options);

    return {
      options: {
        size: this.size,
        ratio: this.width / this.height
      },
      name: this.name,
      title: this.label,
      field: 'images[' + this.name + ']',
      helper: this.width + ' x ' + this.height + ' ratio',
      images: [
        {src: 'http://storage.googleapis.com/fgc-images/products/site.feature.sm.02.jpg'},
        {src: 'http://storage.googleapis.com/fgc-images/products/site.feature.sm.01.jpg'}
      ]
    };
  }
});