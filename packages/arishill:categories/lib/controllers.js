/* CONTROLLERS
.................................................*/

// categories index
CategorysIndex = RouteController.extend({
  template: 'aristotle__categories__index',
  layoutTemplate: 'app_layout',
  waitOn: function () {
    return Meteor.subscribe('categories');
  },
  data: function() {
    return {
      categories: Collections.categories.find({}, { sort: { 'date.modified': -1 } })
    };
  },
  action: function () {
    this.render();
  }
});

// categories create
CategorysCreate = RouteController.extend({
  template: 'aristotle__categories__create',
  layoutTemplate: 'app_layout',
  waitOn: function () {
  },
  data: function() {
  },
  action: function () {
    this.render();
  }
});

// categories edit
CategorysEdit = RouteController.extend({
  template: 'aristotle__categories__edit',
  layoutTemplate: 'app_layout',
  waitOn: function () {
    return Meteor.subscribe('categoriesByUrl', this.params.url);
  },
  data: function() {
  },
  action: function () {
    this.render();
  }
});