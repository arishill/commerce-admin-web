/* CONTROLLERS
.................................................*/

// index
ProductsIndex = RouteController.extend({
  template: 'aristotle__products__index',
  layoutTemplate: 'app_layout',
  waitOn: function() {
    Session.set('products_count', 0);

    Meteor.call('api/products/count', function(error, count) {
      Session.set('products_count', count)
    });

    return;
  },
  action: function() {
    this.render();
  }
});

// create
ProductsCreate = RouteController.extend({
  template: 'aristotle__products__create',
  layoutTemplate: 'app_layout',
  waitOn: function () {
    return Session.set('product', { variants: [{}] });
  },
  data: function() {
    return {
      product: Session.get('product'),
      schema: 'products',
      page: {
        btn: 'Create Product',
        action: 'create'
      }
    };
  },
  action: function () {
    this.render();
  }
});

// edit
ProductsEdit = RouteController.extend({
  template: 'aristotle__products__edit',
  layoutTemplate: 'app_layout',
  waitOn: function () {
    return Meteor.subscribe('productsByUrl', this.params.url);
  },
  data: function() {
    return {
      product: Collections.products.findOne({}),
      schema: 'products',
      site: {
        domain: 'http://spinanyc.com'
      },
      page: {
        btn: 'Save Product',
        action: 'update',
        drawer: true
      }
    }
  },
  action: function() {
    this.render();
  }
});

// arrange
ProductsArrange = RouteController.extend({
  template: 'aristotle__products__arrange',
  layoutTemplate: 'app_layout',
  waitOn: function () {},
  data: function() {},
  action: function () {
    this.render();
  }
});