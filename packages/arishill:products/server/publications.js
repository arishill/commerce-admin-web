/* PUBLICATIONS
.................................................*/
Meteor.publish('products', function(options, search) {

  check(options, {
    sort: Object,
    limit: Number
  });

  if (Meteor.settings.env === 'development') {
    Meteor._sleepForMs(500);
  }

  if (search && search.length) {
    return Collections.products.find({ $text: { $search: search } }, {
      fields: {
        score: { $meta: "textScore" }
      },
      sort: {
        score: { $meta: "textScore" }
      }
    });
  }
  else {
    return Collections.products.find({}, options);
  }
});

Meteor.publish('productsByUrl', function(url) {
  return Collections.products.find({url: url});
});

// { $text: { $search: <string>, $language: <string> } }

Collections.products._ensureIndex('url', { unique: 1 });
Collections.products._ensureIndex('variants.sku', { unique: 1 });
Collections.products._ensureIndex({
  'id': 'text',
  'title': 'text',
  'categories': 'text',
  'description': 'text'
});