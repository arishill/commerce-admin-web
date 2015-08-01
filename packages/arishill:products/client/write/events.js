Template.aristotle__products__form.events({
  // upload complete
  'upload:complete [data-action=upload]': function(event, template, data) {
    var image_name = $(event.target).data('name') + '[0]',
        image_obj = Forms.utils.serializeHelpers.handleMultiDimen(image_name, null, data.url, {}),
        key = image_name.split(/[[\]]{1,2}/);

    // key.length--;
    // obj.images = (_.isUndefined(obj.images)) ? {} : obj.images;
    // obj.images[key[1]] = (_.isUndefined(obj.images[key[1]])) ? [] : obj.images[key[1]];

    // _.each(image_obj.images[key[1]], function(item, index, list) {
    //   obj.images[key[1]].push(item);
    // });
  }
});