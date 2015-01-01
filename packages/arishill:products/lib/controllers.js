/* CONTROLLERS
.................................................*/

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
      product: ProductsCollection.findOne(),
      page: {
        btn: 'Save Product',
        action: 'update'
      }
    };
  },
  action: function () {
    this.render();
  }
});

// index
ProductsIndex = RouteController.extend({
  template: 'aristotle__products__index',
  layoutTemplate: 'app_layout',
  waitOn: function () {
    return Meteor.subscribe('products');
  },
  data: function() {
    return {
      products: ProductsCollection.find({}, { sort: { 'date.modified': -1 } })
    };
  },
  action: function () {
    this.render();
  }
});