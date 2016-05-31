Admin.models.discounts.data = {
  all: m.prop(null),
  single: m.prop(null),
  search: m.prop(null),
  form: m.prop(null)
};

Admin.models.discounts.all = function() {
  Admin.models.discounts.data.all(Admin.data.discounts.all);
};

Admin.models.discounts.create = function(obj) {
  Admin.data.discounts.all.push(obj);
};

Admin.models.discounts.retrieve = function(id, callback) {
  let doc = null;

  if (id === 'new') {
    doc = {
      "title": null,
      "type": null,
      "ticket": null,
      "scope": {
        "match": "all"
      },
      "markdown": {
        "type": "percentage",
        "percentage": 0
      },
      "flags": {
        "is_active": false,
        "is_scheduled": false
      },
      "count": {
        "limit": false,
        "used": 0
      },
      "scheduled": null
    };
  }
  else {
    Admin.data.discounts.all.map(function(item) {
      if (item.id === id) {
        doc = item;
      }
    });
  }

  Admin.models.discounts.data.single(doc);
  Admin.models.discounts.populateForm(doc);

  if (callback) {
    callback();
  }
};

Admin.models.discounts.update = function(id, params) {
  Admin.data.discounts.all.map(function(item) {
    if (item.id === id) {
      item = _.extend({}, item, params);
    }
  });
};

Admin.models.discounts.delete = function(id, callback) {
  let doc;

  Admin.data.discounts.all.map(function(item, index) {
    if (item.id === id) {
      doc = index;
    }
  });

  setTimeout(function() {
    Admin.models.discounts.data.all().splice(doc, 1);
    Admin.models.discounts.data.search().splice(doc, 1);
    if (callback) {
      callback();
      m.endComputation();
    }
  }, 500);
};

Admin.models.discounts.populateForm = function(model) {
  Admin.models.discounts.data.form = m.prop({});

  _.each(model, function(item, prop) {
    Admin.models.discounts.data.form()[prop] = m.prop(item);
  });
};
