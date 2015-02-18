/* CONTROLLERS
.................................................*/

// orders create
OrdersCreate = RouteController.extend({
  template: 'aristotle__orders__create',
  layoutTemplate: 'app_layout',
  waitOn: function () {
    return Session.set('order', { items: [], receipt: { amount: {} } });
  },
  data: function() {
    return {
      order: Session.get('order'),
      schema: 'orders',
      page: {
        btn: 'Create Order',
        action: 'create'
      }
    }
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
    Meteor.subscribe('ordersByID', this.params.id);
    return Session.set('order', Collections.orders.findOne({_id: this.params.id}));
  },
  data: function() {
    return {
      order: Session.get('order'),
      schema: 'orders',
      page: {
        btn: 'Edit Order',
        action: 'update'
      }
    }
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
      sales: Collections.orders.find({  }, { sort: { 'date.modified': -1 } })
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
      invoices: Collections.orders.find({ type: 'invoice' }, { sort: { 'date.modified': -1 } })
    };
  },
  action: function () {
    this.render();
  }
});