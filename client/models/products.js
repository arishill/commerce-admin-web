Admin.models.products.data = {
  all: m.prop(null),
  single: m.prop(null)
  search: m.prop(null)
};

Admin.models.products.all = function() {
  Admin.models.products.data.all(Admin.data.products.all);
};

Admin.models.products.retrieve = function(id) {
  let doc = null;

  Admin.data.products.all.map(function(item) {
    if (item.id === id) {
      doc = item;
    }
  });

  Admin.models.products.data.single(doc);
};

Admin.models.products.update = function(id, params) {
  Admin.data.products.all.map(function(item) {
    if (item.id === id) {
      item = _.extend({}, item, params);
    }
  });
};

Admin.models.products.delete = function(id, callback) {
  let doc;

  Admin.data.products.all.map(function(item, index) {
    if (item.id === id) {
      doc = index;
    }
  });

  setTimeout(function() {
    Admin.models.products.data.all().splice(doc, 1);
    Admin.models.products.data.search().splice(doc, 1);
    if (callback) {
      callback();
      m.endComputation();
    }
  }, 500);
};
