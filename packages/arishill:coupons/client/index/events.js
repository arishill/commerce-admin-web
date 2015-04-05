// definitions

/* EVENTS
.................................................*/

// index
Template.aristotle__coupons__table.events({
  // remove coupons from DB
  'click [data-action="delete"]': function(event, template) {
    Aristotle.events.delete(event, template, {
      collection: 'coupons',
      redirect: 'sales_index',
      params: {
        '_id': $(event.target).parents('form').data('id')
      }
    });
  }
});

// // form
// Template.aristotle__coupons__form.events({
//   // add items to coupon
//   'click [data-action="add"]': function(event, template) {
//     Aristotle.events.addToModel(event, template, {
//       arr: $(event.target).data('arr'),
//       collection: 'coupons',
//       doc: 'coupon'
//     });
//   },

//   // remove items from coupon
//   'click [data-action="remove"]': function(event, template) {
//     Aristotle.events.removeFromModel(event, template, {
//       arr: $(event.target).data('arr'),
//       collection: 'coupons',
//       index: $(event.target).data('index'),
//       doc: 'coupon'
//     });
//   },

//   // on coupon form change
//   'change form': function(event, template) {
//     Aristotle.events.onChange(event, template, {
//       doc: 'coupon',
//       form: $(event.target).parents('form')
//     });
//   },

//   // on submission of new coupon form
//   'submit [data-action="create"]': function(event, template) {
//     Aristotle.events.save(event, template, {
//       redirect: 'sales_index',
//       action: 'create',
//       collection: 'coupons',
//       form: $(event.target)
//     });
//   },

//   // on submission of edit coupon form
//   'submit [data-action="update"]': function(event, template) {
//     Aristotle.events.save(event, template, {
//       redirect: 'sales_index',
//       action: 'update',
//       collection: 'coupons',
//       form: $(event.target),
//       id: $(event.target).data('id')
//     });
//   },

//   // remove coupons from DB
//   'click [data-action="delete"]': function(event, template) {
//     Aristotle.events.delete(event, template, {
//       collection: 'coupons',
//       redirect: 'sales_index',
//       params: {
//         '_id': $(event.target).parents('form').data('id')
//       }
//     });
//   }
// });