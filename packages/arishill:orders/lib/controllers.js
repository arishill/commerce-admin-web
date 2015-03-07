/* CONTROLLERS
.................................................*/

// index
OrdersIndex = RouteController.extend({
  template: 'aristotle__orders__index',
  layoutTemplate: 'app_layout',
  waitOn: function () {
    return Meteor.subscribe('orders');
  },
  data: function() {
    return {
      orders: Collections.orders.find({ }, { sort: { 'date.modified': -1 } })
    };
  },
  action: function () {
    this.render();
  }
});

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
  onBeforeAction: function() {
    GoogleMaps.load({key: 'AIzaSyAhDhqWSbqeCWa1kgmZhMvCL00GBegMmrE'});
    this.next();
  },
  waitOn: function () {
    return Meteor.subscribe('ordersByID', this.params._id);
  },
  data: function() {
    return {
      order: Collections.orders.findOne({}),
      schema: 'orders',
      page: {
        btn: 'Save Order',
        action: 'update',
        drawer: true
      }
    }
  },
  action: function () {
    this.render();
  }
});