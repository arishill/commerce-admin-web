// definitions
Aristotle = (_.isUndefined(Aristotle)) ? {} : Aristotle;
Aristotle.events = (_.isUndefined(Aristotle.events)) ? {} : Aristotle.events;

/* ARISTOTLE FORM EVENTS
.................................................*/

// save (create or upate) data to database
Aristotle.events.save = function(event, template, options) {

  // the form object
  var form_obj = {},
      insert_obj = {},

      // get the time (UTC)
      now = moment().valueOf();

  // prevent the form from posting
  event.preventDefault();

  // serialize form data
  form_obj = Forms.utils.serializeObject(options.form);

  // set timestamps with now
  form_obj.date = {
    modified: now
  };

  if (options.action === 'create') {
    form_obj.date.created = now;
  }

  // clean order to schema
  form_obj = Forms.utils.clean(form_obj);

  Schemas.collections[options.collection].default.clean(form_obj, { filter: false});

  if (_.isFunction(options.addTo)) {
    form_obj = options.addTo(form_obj);
  }

  insert_obj = {
    draft: form_obj
  };

  // validate order against schema
  if (Schemas.collections[options.collection].context.validate(form_obj)) {

    if (options.action === 'create') {
      // create
      Aristotle.events._create(insert_obj, options);
    }

    else if (options.action === 'update') {
      insert_obj.draft = Forms.cleanModifier(insert_obj.draft);

      // update
      Aristotle.events._update(insert_obj, options);
    }
  }
  else {
    // otherwise handle errors
    console.log('fail!');
    console.log(Schemas.collections[options.collection].context.invalidKeys());
  }
};

// delete data from database
Aristotle.events.delete = function(event, template, options) {
  event.preventDefault();

  Collections[options.collection].remove(options.params, function(error) {
    if (error) {
      console.log('error');
    }
    else {
      // redirect after success
      Router.go(options.redirect);
    }
  });
};

// add (item, variant, etc) to schema array
Aristotle.events.addToModel = function(event, template, options) {
  event.preventDefault();

  var session_obj = Session.get(options.doc);

  session_obj[options.arr].push({});

  Session.set(options.doc, session_obj);
  console.log(Session.get(options.doc));
};

// remove (item, variant, etc) from schema array
Aristotle.events.removeFromModel = function(event, template, options) {
  var session_obj = Session.get(options.doc);

  Forms.utils.serializeHelpers.parseStringToObject(options.arr, session_obj).splice(options.index, 1);
  Session.set(options.doc, session_obj);
};

// on change store items to session
Aristotle.events.onChange = function(event, template, options) {
  var form_obj = Forms.utils.serializeObject(options.form),
      session_obj;

  session_obj = Session.get(options.doc);

  Session.set(options.doc, _.extend({}, session_obj, form_obj));
};

Aristotle.events._create = function(insert_obj, options) {
  // call create method
  Collections[options.collection].insert(insert_obj, function() {
    if (error) {
      console.log('error');
    }
    else {
      // redirect after success
      Router.go(options.redirect);
    }
  });
};

Aristotle.events._update = function(insert_obj, options) {
  // update method
  Collections.orders.update({_id: options.id}, {$set: insert_obj.draft}, function(error) {
    if (error) {
      console.log('error');
    }
    else {
      // redirect after success
      Router.go(options.redirect);
    }
  });
}