Template.component_checkbox.events({
  'click label': function(event, template) {
      var options = $(template.firstNode).data('checkbox')

      if (!_.isUndefined(options.select_all)) {
        $('[data-checkbox] input').filter('[name^="' + options.select_all + '"]').trigger('click');
      }

      if (_.isFunction(options.onchange)) {
        options.onchange();
      }
  }
});

Template.component_toggle.events({
  'click label': function(event, template) {
    var options = $(template.firstNode).data('checkbox')
  }
});