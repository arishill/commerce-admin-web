/* CONTROLLERS
.................................................*/

// orders create
OrdersCreate = RouteController.extend({
  template: 'aristotle__orders__create',
  layoutTemplate: 'app_layout',
  waitOn: function () {
  },
  data: function() {
  },
  action: function () {
    this.render();
  }
});

// orders edit
OrdersEdit = RouteController.extend({
  template: 'aristotle__orders__edit',
  layoutTemplate: 'app_layout',
  waitOn: function () {
    return Meteor.subscribe('ordersByUrl', this.params.url);
  },
  data: function() {
  },
  action: function () {
    this.render();
  }
});


// invoices create
InvoicesCreate = RouteController.extend({
  template: 'aristotle__invoices__create',
  layoutTemplate: 'app_layout',
  waitOn: function () {
  },
  data: function() {
  },
  action: function () {
    this.render();
  }
});

// invoices edit
InvoicesEdit = RouteController.extend({
  template: 'aristotle__invoices__edit',
  layoutTemplate: 'app_layout',
  waitOn: function () {
    return Meteor.subscribe('invoicesByUrl', this.params.url);
  },
  data: function() {
  },
  action: function () {
    this.render();
  }
});

// index
SalesIndex = RouteController.extend({
  template: 'aristotle__sales__index',
  layoutTemplate: 'app_layout',
  waitOn: function () {
    return Meteor.subscribe('orders');
  },
  data: function() {
    return {
      sales: OrdersCollection.find({}, { sort: { 'date.modified': -1 } })
    };
  },
  action: function () {
    this.render();
  }
});

// invoices index
InvoicesIndex = RouteController.extend({
  template: 'aristotle__invoices__index',
  layoutTemplate: 'app_layout',
  waitOn: function () {
    return Meteor.subscribe('orders');
  },
  data: function() {
    return {
      invoices: OrdersCollection.find({}, { sort: { 'date.modified': -1 } })
    };
  },
  action: function () {
    this.render();
  }
});