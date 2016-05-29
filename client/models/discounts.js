Admin.models.discounts.data = {
  all: m.prop(null),
  single: m.prop(null),
  search: m.prop(null)
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
      "id": "204661de-9bf9-490b-bdd8-3fb2b7849e58",
      "object": "discount",
      "date": {
        "created": "2016-04-28T05:31:57Z",
        "modified": "2016-04-29T02:52:57Z"
      },
      "title": "50% Off Swimming Suits",
      "type": "sale",
      "ticket": null,
      "scope": {
        "match": "all"
      },
      "markdown": {
        "type": "percentage",
        "percentage": 0.5
      },
      "flags": {
        "is_active": false,
        "is_scheduled": true
      },
      "count": {
        "limit": false,
        "used": 0
      },
      "scheduled": {
        start: "2016-08-21T00:00:57Z",
        end: "2016-09-15T00:00:57Z"
      }
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
