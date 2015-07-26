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

  // Schemas.collections[options.collection].default.clean(form_obj, { filter: false});

  if (_.isFunction(options.addTo)) {
    form_obj = options.addTo(form_obj);
  }

  insert_obj = {
    draft: form_obj
  };

  var event_schema = Schemas.collections[options.collection];

  if (options.action === 'update') {
    var form_arr = [];
    _.each(form_obj, function(item, index) {
      for (property in item) {
        form_arr.push(index + '.' + property);
      }
    });
    event_schema = Schemas.collections[options.collection].default.pick(form_arr);
    event_schema.context = event_schema.namedContext(options.collection + options.id);
  }

  // validate order against schema

  if (event_schema.context.validate(form_obj)) {

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

// confirm form event
Aristotle.events.confirm = function(event, form, callback) {
  event.preventDefault();

  var _confirm = form.find('[data-confirm]');

  _confirm.removeClass("is-hidden");

  _confirm.on('click', '[data-cancel]', function(){
    _confirm.addClass("is-hidden");
  });

  _confirm.on('click', '[data-ok]', function(){
    callback();
    _confirm.addClass("is-hidden");
  })
}

// delete data from database
Aristotle.events.delete = function(event, template, options) {
  event.preventDefault();

  Collections[options.collection].remove(options.params, function(error) {
    if (error) {
      console.log('error');
    }
    else {
      // redirect after success
      if (_.isString(options.redirect)) {
        Router.go(options.redirect);
      }
      if (_.isFunction(options.callback)) {
        options.callback();
      }
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
  Collections[options.collection].update({_id: options.id}, {$set: insert_obj.draft}, function(error) {
    if (error) {
      console.log('error');
    }
    else {
      if (options.redirect) {
        // redirect after success
        Router.go(options.redirect);
      }
    }
  });
}