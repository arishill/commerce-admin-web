// definitions
Fixtures = (_.isUndefined(Fixtures)) ? {} : Fixtures;
Fixtures.orders = (_.isUndefined(Fixtures.orders)) ? [] : Fixtures.orders;

// set timestamps
var now         = moment(),
    now_value   = now.valueOf(),
    before      = now.subtract(1, 'days').valueOf(),
    ship_date   = now.add(5, 'days').valueOf();

/* SPINA ORDERS
.................................................*/
Fixtures.orders['spina'] = [
  // order #1
  {
    'type': 'online',
    'date': {
      created: now_value,
      modified: now_value
    },
    'customer': {
      id: 'skaj854',
      is_saved_card: false
    },
    'billing': {
      email: 'scottusrobus@arishill.com',
      phone: '5768943456',
      name: { first: 'Scott', last: 'Robertson' },
      address: {
        line_1: '7140 112th St',
        line_2: 'Apt 203',
        city: 'Forest Hills',
        province: 'NY',
        postal_code: '11375',
        country_code: 'USA'
      }
    },
    'receipt': {
      currency: 'usd',
      amount: {
        subtotal_cents: 4000,
        shipping_cents: 1000,
        discount_cents: 0,
        tax_cents:  410,
        total_cents: 5410,
      },
      fees: {
        gateway_cents: 123,
        arishill_cents: 343
      }
    },
    'items': [
      {
        product_id: 'adsk324',
        title: 'Spina No. 20',
        variant_sku: 'a0dkj13',
        quantity: 1,
        item_cents: 1500,
        subtotal_cents: 1500
      },
      {
        product_id: 'rds5324',
        title: 'Spina No. 19',
        variant_sku: 'q0dk913',
        quantity: 1,
        item_cents: 2000,
        subtotal_cents: 2000
      }
    ],
    'delivery': {
      is_physical: true,
      is_digital: false
    },
    'shipment': {
      status: 'pre_transit',
      name: 'Junko Robertson',
      address: {
        line_1: '7140 112th St',
        line_2: 'Apt 203',
        city: 'Forest Hills',
        province: 'NY',
        postal_code: '11375',
        country_code: 'USA'
      },
      delivery: {
        phone: '5768943456',
        instructions: 'Leave it on the porch.',
        date: ship_date
      },
      tracking: {
        carrier: 'ups',
        number: 'alskdjf023jrlskjafj023',
        status: 'pre_transit',
        estimated_delivery: ship_date
      }
    },
    'payment': {
      status: 'success',
      transactions: [
        {
          status: 'approved',
          date: now_value,
          method: 'credit',
          gateway: {
            provider: 'braintree',
            charge_id: 'alsdkf44lkj2'
          },
          card: {
            type: 'amex',
            last_4: 1241,
            expiry: {
              month: 11,
              year: 2016
            }
          }
        },
        {
          status: 'failed',
          date: before,
          method: 'credit',
          gateway: {
            provider: 'braintree',
            charge_id: 'al3dkal12lkj2'
          },
          card: {
            type: 'amex',
            last_4: 7635,
            expiry: {
              month: 11,
              year: 2014
            }
          }
        }
      ]
    }
  },

  // order #2
  {
    'type': 'online',
    'date': {
      created: now_value,
      modified: now_value
    },
    'customer': {
      id: 'skaj854',
      is_saved_card: false
    },
    'billing': {
      email: 'scottusrobus@arishill.com',
      phone: '5768943456',
      name: { first: 'Scott', last: 'Robertson' },
      address: {
        line_1: '7140 112th St',
        line_2: 'Apt 203',
        city: 'Forest Hills',
        province: 'NY',
        postal_code: '11375',
        country_code: 'USA'
      }
    },
    'receipt': {
      currency: 'usd',
      amount: {
        subtotal_cents: 4000,
        shipping_cents: 1000,
        discount_cents: 0,
        tax_cents:  410,
        total_cents: 5410,
      },
      fees: {
        gateway_cents: 123,
        arishill_cents: 343
      }
    },
    'items': [
      {
        product_id: 'adsk324',
        title: 'Spina No. 9',
        variant_sku: 'a0dkj13',
        quantity: 1,
        item_cents: 1500,
        subtotal_cents: 1500
      },
      {
        product_id: 'rds5324',
        title: 'Spina No. 17',
        variant_sku: 'q0dk913',
        quantity: 1,
        item_cents: 2000,
        subtotal_cents: 2000
      }
    ],
    'delivery': {
      is_physical: true,
      is_digital: false
    },
    'shipment': {
      status: 'pre_transit',
      name: 'Junko Robertson',
      address: {
        line_1: '7140 112th St',
        line_2: 'Apt 203',
        city: 'Forest Hills',
        province: 'NY',
        postal_code: '11375',
        country_code: 'USA'
      },
      delivery: {
        phone: '5768943456',
        instructions: 'Leave it on the porch.',
        date: ship_date
      },
      tracking: {
        carrier: 'ups',
        number: 'alskdjf023jrlskjafj023',
        status: 'pre_transit',
        estimated_delivery: ship_date
      }
    },
    'payment': {
      status: 'success',
      transactions: [
        {
          status: 'approved',
          date: now_value,
          method: 'credit',
          gateway: {
            provider: 'braintree',
            charge_id: 'alsdkf44lkj2'
          },
          card: {
            type: 'amex',
            last_4: 1241,
            expiry: {
              month: 11,
              year: 2016
            }
          }
        },
        {
          status: 'failed',
          date: before,
          method: 'credit',
          gateway: {
            provider: 'braintree',
            charge_id: 'al3dkal12lkj2'
          },
          card: {
            type: 'amex',
            last_4: 7635,
            expiry: {
              month: 11,
              year: 2014
            }
          }
        }
      ]
    }
  },

  // order #3
  {
    'type': 'online',
    'date': {
      created: now_value,
      modified: now_value
    },
    'customer': {
      id: 'skaj854',
      is_saved_card: false
    },
    'billing': {
      email: 'scottusrobus@arishill.com',
      phone: '5768943456',
      name: { first: 'Scott', last: 'Robertson' },
      address: {
        line_1: '7140 112th St',
        line_2: 'Apt 203',
        city: 'Forest Hills',
        province: 'NY',
        postal_code: '11375',
        country_code: 'USA'
      }
    },
    'receipt': {
      currency: 'usd',
      amount: {
        subtotal_cents: 4000,
        shipping_cents: 1000,
        discount_cents: 0,
        tax_cents:  410,
        total_cents: 5410,
      },
      fees: {
        gateway_cents: 123,
        arishill_cents: 343
      }
    },
    'items': [
      {
        product_id: 'adsk324',
        title: 'Spina No. 1',
        variant_sku: 'a0dkj13',
        quantity: 1,
        item_cents: 1500,
        subtotal_cents: 1500
      },
      {
        product_id: 'rds5324',
        title: 'Spina No. 8',
        variant_sku: 'q0dk913',
        quantity: 1,
        item_cents: 2000,
        subtotal_cents: 2000
      }
    ],
    'delivery': {
      is_physical: true,
      is_digital: false
    },
    'shipment': {
      status: 'pre_transit',
      name: 'Junko Robertson',
      address: {
        line_1: '7140 112th St',
        line_2: 'Apt 203',
        city: 'Forest Hills',
        province: 'NY',
        postal_code: '11375',
        country_code: 'USA'
      },
      delivery: {
        phone: '5768943456',
        instructions: 'Leave it on the porch.',
        date: ship_date
      },
      tracking: {
        carrier: 'ups',
        number: 'alskdjf023jrlskjafj023',
        status: 'pre_transit',
        estimated_delivery: ship_date
      }
    },
    'payment': {
      status: 'success',
      transactions: [
        {
          status: 'approved',
          date: now_value,
          method: 'credit',
          gateway: {
            provider: 'braintree',
            charge_id: 'alsdkf44lkj2'
          },
          card: {
            type: 'amex',
            last_4: 1241,
            expiry: {
              month: 11,
              year: 2016
            }
          }
        },
        {
          status: 'failed',
          date: before,
          method: 'credit',
          gateway: {
            provider: 'braintree',
            charge_id: 'al3dkal12lkj2'
          },
          card: {
            type: 'amex',
            last_4: 7635,
            expiry: {
              month: 11,
              year: 2014
            }
          }
        }
      ]
    }
  },

  // order #4
  {
    'type': 'online',
    'date': {
      created: now_value,
      modified: now_value
    },
    'customer': {
      id: 'skaj854',
      is_saved_card: false
    },
    'billing': {
      email: 'scottusrobus@arishill.com',
      phone: '5768943456',
      name: { first: 'Scott', last: 'Robertson' },
      address: {
        line_1: '7140 112th St',
        line_2: 'Apt 203',
        city: 'Forest Hills',
        province: 'NY',
        postal_code: '11375',
        country_code: 'USA'
      }
    },
    'receipt': {
      currency: 'usd',
      amount: {
        subtotal_cents: 4000,
        shipping_cents: 1000,
        discount_cents: 0,
        tax_cents:  410,
        total_cents: 5410,
      },
      fees: {
        gateway_cents: 123,
        arishill_cents: 343
      }
    },
    'items': [
      {
        product_id: 'adsk324',
        title: 'Spina No. 4',
        variant_sku: 'a0dkj13',
        quantity: 1,
        item_cents: 1500,
        subtotal_cents: 1500
      },
      {
        product_id: 'rds5324',
        title: 'Spina No. 2',
        variant_sku: 'q0dk913',
        quantity: 1,
        item_cents: 2000,
        subtotal_cents: 2000
      }
    ],
    'delivery': {
      is_physical: true,
      is_digital: false
    },
    'shipment': {
      status: 'pre_transit',
      name: 'Junko Robertson',
      address: {
        line_1: '7140 112th St',
        line_2: 'Apt 203',
        city: 'Forest Hills',
        province: 'NY',
        postal_code: '11375',
        country_code: 'USA'
      },
      delivery: {
        phone: '5768943456',
        instructions: 'Leave it on the porch.',
        date: ship_date
      },
      tracking: {
        carrier: 'ups',
        number: 'alskdjf023jrlskjafj023',
        status: 'pre_transit',
        estimated_delivery: ship_date
      }
    },
    'payment': {
      status: 'success',
      transactions: [
        {
          status: 'approved',
          date: now_value,
          method: 'credit',
          gateway: {
            provider: 'braintree',
            charge_id: 'alsdkf44lkj2'
          },
          card: {
            type: 'amex',
            last_4: 1241,
            expiry: {
              month: 11,
              year: 2016
            }
          }
        },
        {
          status: 'failed',
          date: before,
          method: 'credit',
          gateway: {
            provider: 'braintree',
            charge_id: 'al3dkal12lkj2'
          },
          card: {
            type: 'amex',
            last_4: 7635,
            expiry: {
              month: 11,
              year: 2014
            }
          }
        }
      ]
    }
  }
];