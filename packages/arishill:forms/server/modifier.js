// definitions
Forms = (_.isUndefined(Forms)) ? {} : Forms;

/* FORMS MODIFIER (PREP FOR UPDATE)
.................................................*/
Forms.cleanModifier = function(obj) {
  _.each(obj, function(item, index, list) {
    if (_.isObject(item)) {
      _.each(item, function(sub_item, sub_index, sub_list) {
        delete obj[index];
        obj[index + '.' + sub_index] = sub_item;
      });
    }
  });
  return obj;
}
