/* CONTROLLERS
.................................................*/

// invoices index
InvoicesIndex = RouteController.extend({
  template: 'aristotle__invoices__index',
  layoutTemplate: 'app_layout',
  waitOn: function () {
    return Meteor.subscribe('invoices');
  },
  data: function() {
    return {
      invoices: [{},{},{},{},{},{},{},{},{}]
      // invoices: Collections.invoices.find({}, { sort: { 'date.modified': -1 } })
    };
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
  return {
      invoice: {},
      schema: 'invoices',
      page: {
        btn: 'Save Invoice',
        action: 'update',
        drawer: true
      }
    }
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