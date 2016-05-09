Admin.models.products.data = {
  all: m.prop(null),
  single: m.prop(null)
};

Admin.models.products.all = function() {
  Admin.models.products.data.all(Admin.data.products.all);
};

Admin.models.products.retrieve = function() {
};
