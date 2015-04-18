Template.aristotle__nav__secondary.helpers({
  navGroups: function() {
    var navGroups = [];
    var path = Iron.Location.get().path.replace(/\//, "").split('/')[0];

    _.each(Template.instance().sections().fetch()[0][path].nav, function(el, index, list) {
      if (el.is_available) {
        if (_.isUndefined(navGroups[el.group])) {
          navGroups[el.group] = { navItems: [] };
        }

        el.href = '/' + path + '/' + el.path;
        navGroups[el.group].navItems.push(el);
      }
    });

    return navGroups;
  }
});