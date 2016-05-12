Admin.models.products.data = {
  all: m.prop(null),
  single: m.prop(null)
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
