Template.aristotle__products__table_row.onCreated(function() {
  Imgix.addDefinitions({
    'thumb': {
      w: 100,
      h: 100,
      fit: 'clamp'
    }
  });
});

Template.aristotle__products__index.onCreated(function () {
  var instance = this,
      query = Iron.Location.get().queryObject.search || '';
      limit = parseInt(Iron.Location.get().queryObject.limit) || 10;

  instance.loaded = new ReactiveVar(0);
  instance.limit  = new ReactiveVar(limit);
  instance.query  = new ReactiveVar(query);

  instance.autorun(function () {
    var limit   = instance.limit.get(),
        query   = instance.query.get(),
        options = {
          sort: { 'date.modified': -1 },
          limit: limit
        },
        subscription;

    if (instance.query.get().length > 1) {
      query = instance.query.get();
    }

    subscription = instance.subscribe('products', options, query);

    if (subscription.ready()) {
      instance.loaded.set(limit);
      Meteor.call('api/products/count', query, function(error, count) {
        Session.set('products_count', count)
      });
    }
  });

  instance.products = function() {
    var options = {
          // sort: { 'date.modified': -1 },
          limit: instance.loaded.get()
        },
        query = '';

    if (instance.query.get().length > 1) {
      query = instance.query.get();
    }

    return Collections.products.find({}, options, query);
  }

  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 25) {
      $('.stage').addClass('scroll-offset');
    } else {
      $('.stage').removeClass('scroll-offset');
    }
  });
});