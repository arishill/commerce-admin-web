/* ERRORS
.................................................*/
Forms.addError = function(params) {
  params.element.removeClass('is-valid').parent().removeClass('is-valid');
  Forms.errors['Template.'+params.template][params.key] = params.message;

  params.element.closest('form').trigger('forms:error');
  Forms.tracker.changed();
};

Forms.removeError = function(params) {
  params.element.addClass('is-valid').parent().addClass('is-valid');
  delete Forms.errors['Template.'+params.template][params.key];
  Forms.tracker.changed();
};

Forms.hasError = function(template, key) {
  Forms.tracker.depend();

  if (_.isObject(Forms.errors[template])) {
    return _.isString(Forms.errors[template][key]) ? Forms.errors[template][key] : false;
  }

  return false;
}