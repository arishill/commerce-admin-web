
Template.registerHelper('isChecked', function(checkbox) {
  if (parseInt(checkbox)) {
    return 'checked';
  }
});

Template.registerHelper('isSelected', function(selected, value) {
  if (selected === value) {
    return 'selected';
  }
});

Template.registerHelper('isEdit', function(key, index) {
  var action = (_.isObject(Template.parentData())) ? Template.parentData().page.action : null;
  if (action === 'update') {
    return true;
  }
  return false;
});

Template.registerHelper('isCreate', function(key, index) {
  var action = (_.isObject(Template.parentData())) ? Template.parentData().page.action : null;
  if (action === 'create') {
    return true;
  }
  return false;
});

Template.registerHelper('formError', function(key, index) {
  // var schema = (_.isObject(Template.parentData())) ? Template.parentData().schema : null;

  // if (_.isNumber(index)) {
  //   key = key.replace('{i}', index);
  // }

  if (Forms.hasError(Template.instance().view.name, key)) {
    return 'is-error';
  } else {
    return false;
  }

  // if (!_.isUndefined(schema) && !_.isNull(schema)) {
  //   if (Schemas.collections[schema].context.keyIsInvalid(key)) {
  //     return 'is-error';
  //   } else {
  //     return false;
  //   }
  // }
});

Template.registerHelper('formErrorMsg', function(key, index) {
  // var schema = (_.isObject(Template.parentData())) ? Template.parentData().schema : null;

  // if (_.isNumber(index)) {
  //   key = key.replace('{i}', index);
  // }
  var template = Template.instance().view.name;

  if (Forms.hasError(template, key)) {
    return Forms.errors[template][key];
  }
  // else if (!_.isUndefined(schema) && !_.isNull(schema)) {
  //   return Schemas.collections[schema].context.keyErrorMessage(key);
  // }
});

Template.registerHelper('generateId', function(id) {
  if (_.isUndefined(id)) {
    return Random.id([7]);
  }
});

Template.registerHelper('hasMultiple', function(form_obj, key) {
  data = Template.parentData();

  if (_.isObject(data[form_obj]) && _.isArray(data[form_obj][key])) {
    return (data[form_obj][key].length > 1) ? true : false;
  }
  return false;
});
