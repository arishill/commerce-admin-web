'use strict';

Admin.components.shared.modal.ui.container = {
  controller: function(opts) {
    opts = opts ? opts : {};
    opts.init = true;

    return new Admin.components.shared.modal.controller(opts);
  },
  view: function(ctrl, opts) {
    return m('.modal' + (Admin.components.shared.modal.state.inBetween() ? '' : '.is-active'), [
      Admin.components.shared.modal.state.wip() ?
        m.component(Admin.components.shared.modal.ui.wip) : ''
    ]);
  }
};

Admin.components.shared.modal.ui.overlay = {
  view: function(ctrl, opts) {
    return m('.modal-overlay' + (Admin.components.shared.modal.state.inBetween() ? '' : '.is-active'));
  }
};

Admin.components.shared.modal.ui.wip = {
  view: function(ctrl, opts) {
    return m('.contain.padding-large', [
      Admin.components.shared.modal.state.intro() ?
      [
        m('.head-black.text--large.text-center.margin-bottom-medium.margin-top-large', 'Arishill Admin Demo'),
        m('div.text-gray-dark.text--medium.text-left.padding-horz-large', [
          m('p.margin-vert-medium', 'Thanks for visiting. This demo is in progress. Sections and functionality will be added as it is built, so we ask that you not get upset for parts that do not work just yet :)'),
          m('p.margin-vert-medium', m.trust('This demo is meant to give you an idea of what is to come, as well as a means for us to start getting feedback. If you have any thoughts to share, let us know at <a class="text-green" href="mailto:hello@arishill.com">hello@arishill.com</a>.')),
          m('div.text-center.margin-vert-large', [
            m('button.btn.btn--wide.btn-green', {
              onclick: function(event) {
                event.preventDefault();
                Admin.components.shared.modal.state.intro(false);
                Admin.components.shared.modal.state.isOpen(false);
              }
            }, 'Start Browsing')
          ])
        ])
      ] :
      [
        m('.head-black.text--large.text-center.margin-bottom-medium.margin-top-xlarge', 'Coming Soon'),
        m('p.text-gray-dark.text--medium.text-center.padding-horz-large', 'The UI Demo for this section is still in progress. Stay up to date on our progress with the Arishill Commerce Admin and API platforms by entering your email below.')
      ],
      Admin.components.shared.modal.state.intro() ? '' :
        m('div.c-newsletter', [
          Admin.components.shared.modal.state.emailSuccess() ?
            m.component(Admin.components.shared.modal.ui.email.success) :
            m.component(Admin.components.shared.modal.ui.email.form)
        ])
    ]);
  }
};

Admin.components.shared.modal.ui.email = {
  form: {
    controller: function() {
      return new Admin.components.shared.modal.controller();
    },
    view: function(ctrl) {
      return m('form.form.margin-vert-medium.text-center.c-newsletter-form', {
        autocomplete: 'off',
        config: function(el) {
          setTimeout(function() { _.addClass(el, 'is-active'); }, 0);
        },
        onsubmit: function(event) {
          event.preventDefault();
          Admin.components.shared.modal.state.emailProcessing(true);
          m.endComputation();
          ctrl.sendEmail();
        }
      }, [
        m('input.inline.margin-right-xsmall' + (Admin.components.shared.modal.state.emailProcessing() ? '.is-transparent-mid' : ''), {
          type: 'text',
          disabled: (Admin.components.shared.modal.state.emailProcessing() ? true : false),
          value: ctrl.email(),
          onkeypress: ctrl.handleKey,
          onkeydown: ctrl.handleKey,
          oninput: m.withAttr('value', ctrl.email),
          placeholder: 'Enter your email'
        }),
        m('button.btn.btn--wide.btn-green' + (Admin.components.shared.modal.state.emailProcessing() ? '.is-processing' : ''), {
          type: 'submit'
        }, 'Submit'),
        Admin.components.shared.modal.state.emailError() ?
        m('p.padding-medium.text-center.text-red', Admin.components.shared.modal.state.emailError()) : ''
      ]);
    }
  },
  success: {
    view: function() {
      return m('.text-1.padding-medium.text-center.c-newsletter-success', {
        config: function(el) {
          setTimeout(function() { _.addClass(el, 'is-active'); }, 0);
        }
      }, [
        m('i.icon-smile'),
        m('p.padding-top-xsmall.text-gray-dark', 'Thanks! Please check your inbox to confirm.')
      ]);
    }
  }
};
