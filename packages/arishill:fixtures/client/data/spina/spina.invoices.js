// definitions
Fixtures = (_.isUndefined(Fixtures)) ? {} : Fixtures;
Fixtures.invoices = (_.isUndefined(Fixtures.invoices)) ? [] : Fixtures.invoices;

// set timestamps
var now = moment().valueOf(),
    before = now.subtract(1, 'days'),
    ship_date = moment().add(5, 'days').valueOf();

/* SPINA INVOICES
.................................................*/
Fixtures.invoices['spina'] = [
  {
    'type': 'invoice',
    'invoice': {
      id: '32jskd9',
      status: 'pending'
    },
    'date': {
      created: now,
      modified: now
    },
    'customer': {
      id: 'skaj854',
      is_saved_card: false
    },
    'billing': {
      email: 'scottusrobus@arishill.com',
      phone: '5768943456',
      name: 'Scott Robertson',
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
      }
    },
    'line_items': [
      {
        title: 'Services rendered',
        description: 'Build a house',
        quantity: 1,
        item_cents: 45000,
        subtotal_cents: 45000,
        tax:  {
          'key': 'non-taxable',
          'id': 'skdj832',
          'rate': 0.875,
          'cents': 39375
        }
      }
    ],
    'delivery': {
      is_physical: false,
      is_digital: false
    },
    'payment': {
      status: 'pending'
    }
  }
];