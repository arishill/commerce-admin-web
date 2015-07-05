/* CONTROLLERS
.................................................*/

// index
ContentIndex = RouteController.extend({
  template: 'aristotle__content__index',
  layoutTemplate: 'app_layout',
  // waitOn: function() {
  //   return Meteor.subscribe('products');
  // },
  // data: function() {
  //   return {
  //     products: Collections.products.find({}, { sort: { 'date.modified': -1 } })
  //   };
  // },
  action: function() {
    this.render();
  }
});

// edit
ContentEdit = RouteController.extend({
  template: 'aristotle__content__edit',
  layoutTemplate: 'app_layout',
  waitOn: function() {
    return Meteor.subscribe('contentByKey', this.params.key);
  },
  data: function() {
    return {
      content: Collections.content.findOne({}),
      page: {
        drawer: true
      }
    };
  },
  action: function() {
    this.render();
  }
});