'use strict';

Admin.components.shared.modal.state = {
  wip: m.prop(false),
  intro: m.prop(true),
  emailError: m.prop(false),
  emailSuccess: m.prop(false),
  isOpen: m.prop(false),
  inBetween: m.prop(true)
};
