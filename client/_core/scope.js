'use strict';

window.Admin = {
  data: {
    products: {}
  },
  models: {
    products: {},
    orders: {}
  },
  components: {
    shared: {
      checkbox: {
        ui: {}
      },
      toggle: {
        ui: {}
      },
      header: {
        ui: {}
      },
      dropdown: {
        ui: {}
      }
    },
    nav: {
      primary: {
        ui: {}
      },
      secondary: {
        ui: {}
      }
    },
    content: {
      dashboard: {
        ui: {
          index: {}
        }
      }
    },
    shop: {
      dashboard: {
        index: {
          ui: {}
        }
      },
      products: {
        index: {
          ui: {}
        },
        show: {
          ui: {
            form: {}
          }
        }
      },
      categories: {
        index: {},
        show: {}
      },
      coupons: {
        index: {},
        show: {}
      },
      sales: {
        index: {},
        show: {}
      },
      orders: {
        index: {
          ui: {}
        },
        show: {
          ui: {
            form: {}
          }
        }
      }
    },
    settings: {
      dashboard: {
        index: {}
      }
    }
  },
  layouts: {
    standard: {
      ui: {},
      state: {},
      constants: {}
    }
  }
};
