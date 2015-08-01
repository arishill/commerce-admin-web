Template.aristotle__products__edit.onRendered(function() {
  var dropdowns = Components.dropdown('[data-dropdown]', {
    onSelect: function(event, target, instance) {
      $('html, body').animate({
        scrollTop: $(target.data('value')).offset().top - 100
      }, 50);
    }
  });
});

Template.aristotle__products__edit.onCreated(function() {
  Uploader.setup('aristotle__products__form_images');
});