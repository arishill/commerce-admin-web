/* CONTROLLERS
.................................................*/

// coupons index
CouponsIndex = RouteController.extend({
  template: 'aristotle__coupons__index',
  layoutTemplate: 'app_layout',
  waitOn: function () {
    return Meteor.subscribe('coupons');
  },
  data: function() {
    return {
      coupons: [{},{},{},{},{},{},{},{},{}]
      // coupons: Collections.coupons.find({}, { sort: { 'date.modified': -1 } })
    };
  },
  action: function () {
    this.render();
  }
});

// coupons create
CouponsCreate = RouteController.extend({
  template: 'aristotle__coupons__create',
  layoutTemplate: 'app_layout',
  waitOn: function () {
  },
  data: function() {
    return {
      page: {
        drawer: true
      }
    }
  },
  action: function () {
    this.render();
  }
});

// coupons edit
CouponsEdit = RouteController.extend({
  template: 'aristotle__coupons__edit',
  layoutTemplate: 'app_layout',
  waitOn: function () {
    return Meteor.subscribe('couponsByUrl', this.params.url);
  },
  data: function() {
  },
  action: function () {
    this.render();
  }
});