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
          m('p.margin-vert-medium', 'Thanks for visiting. This demo is in progress. Sections and functionality will be added as it is built, so we ask you not get upset for parts that do not work just yet :)'),
          m('p.margin-vert-medium', m.trust('This demo is meant to give an idea of what is to come, as well as a means for us to start getting feedback. Let us know your thoughts at <a class="text-green" href="mailto:hello@arishill.com">hello@arishill.com</a>.')),
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
        m('.text-center', [
          m('.img-placeholder-sq.img--large.margin-vert-medium')
        ]),
        m('.head-black.text--large.text-center.margin-bottom-medium', 'Coming Soon'),
        m('p.text-gray-dark.text--medium.text-center.padding-horz-large', 'The UI Demo for this section is still in progress. Stay up to date on our progress with the Arishill Commerce Admin and API platforms by entering your email below.')
      ],
      Admin.components.shared.modal.state.intro() ? '' :
        Admin.components.shared.modal.state.emailSuccess() ?
          m.component(Admin.components.shared.modal.ui.email.success) :
          m.component(Admin.components.shared.modal.ui.email.form)
    ]);
  }
};

Admin.components.shared.modal.ui.email = {
  form: {
    view: function() {
      return m('form.form.margin-vert-medium.text-center', {
        action: 'https://arishill.us8.list-manage.com/subscribe/post-json?u=a23c9648e76232fcc138eb842&amp;id=180ffcee75&amp;c=?',
        method: 'post',
        autocomplete: 'off'
      }, [
        m('div', {
            style: { position: 'absolute', left: '-5000px' },
            'aria-hidden': true
          }, [
          m('input', {
            type: 'text',
            name: 'b_a23c9648e76232fcc138eb842_180ffcee75',
            tabindex: '-1',
            value: ''
          })
        ]),
        m('input.inline.margin-right-xsmall', {
          type: 'text',
          name: 'EMAIL',
          placeholder: 'Enter your email'
        }),
        m('button.btn.btn--wide.btn-green', {
          type: 'submit'
        }, 'Submit')
      ]);
    }
  },
  success: {
    view: function() {
      return m('.text-1.padding-medium.text-center', [
        m('i.icon-smile')
      ]);
    }
  },
  error: {
    view: function() {
      return m('p.padding-medium.text-center');
    }
  }
};
