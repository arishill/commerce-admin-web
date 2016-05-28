Admin.models.orders.data = {
  all: m.prop(null),
  single: m.prop(null),
  search: m.prop(null)
};

Admin.models.orders.all = function() {
  Admin.models.orders.data.all(Admin.data.orders.all);
};

Admin.models.orders.create = function(obj) {
  Admin.data.orders.all.push(obj);
};

Admin.models.orders.retrieve = function(id, callback) {
  let doc = null;

  if (id === 'new') {
    doc = {
    };
  }
  else {
    Admin.data.orders.all.map(function(item) {
      if (item.id === id) {
        doc = item;
      }
    });
  }

  Admin.models.orders.data.single(doc);

  if (callback) {
    callback(); 
  }
};

Admin.models.orders.update = function(id, params) {
  Admin.data.orders.all.map(function(item) {
    if (item.id === id) {
      item = _.extend({}, item, params);
    }
  });
};

Admin.models.orders.delete = function(id, callback) {
  let doc;

  Admin.data.orders.all.map(function(item, index) {
    if (item.id === id) {
      doc = index;
    }
  });

  setTimeout(function() {
    Admin.models.orders.data.all().splice(doc, 1);
    Admin.models.orders.data.search().splice(doc, 1);
    if (callback) {
      callback();
      m.endComputation();
    }
  }, 500);
};
