// definitions
Fixtures = (_.isUndefined(Fixtures)) ? {} : Fixtures;
Fixtures.products = (_.isUndefined(Fixtures.products)) ? [] : Fixtures.products;

var now = new Date().getTime();

Fixtures.products['spina'] = [
  // Spina No. 2
  {
    title: 'Spina No. 2',
    url: 'spina-no-2',
    description: 'Large optic vase filled with white hydrangeas and crystel blush mini callalilies.',
    date: {
      created: now,
      modified: now
    },
    // item_options: {
    //   size: ['Small', 'Large']
    // },
    price: {
      regular_cents: 25000,
      sale_cents: 22500
    },
    variants: [
      {
        sku: 'dis89kj',
        price: {
          regular_cents: 25000,
          sale_cents: 22500
        },
        options: {
          size: 'Large'
        }
      },
      {
        sku: 'r4ft68l',
        price: {
          regular_cents: 17500,
          sale_cents: 15000
        },
        options: {
          size: 'Samll'
        }
      }
    ]
  },
  // Spina No. 4
  {
    title: 'Spina No. 4',
    url: 'spina-no-4',
    description: 'White glass vase filled with coral charm peonies accented with coral colored feathers.',
    date: {
      created: now,
      modified: now
    },
    // item_variants: {},
    price: {
      regular_cents: 25000,
      sale_cents: 22500
    },
    variants: [
      {
        sku: 'dif892j',
        price: {
          regular_cents: 25000,
          sale_cents: 22500
        },
        options: { }
      }
    ]
  },

  // Spina No. 5
  {
    title: 'Spina No. 5',
    description: 'Pave arrangement of Buttercream callalilies.',
    url: 'spina-no-5',
    date: {
      created: now,
      modified: now
    },
    // item_variants: {
    //   size: ['Small', 'Large']
    // },
    price: {
      regular_cents: 25000,
      sale_cents: 22500
    },
    variants: [
      {
        sku: 'abf562j',
        price: {
          regular_cents: 25000,
          sale_cents: 22500
        },
        options: {
          size: 'Large'
        }
      },
      {
        sku: '8ajok20',
        price: {
          regular_cents: 10000,
          sale_cents: 8000
        },
        options: {
          size: 'Small'
        }
      }
    ]
  },

  // Spina No. 43
  {
    title: 'Spina No. 43',
    url: 'spina-no-43',
    description: 'Arrangement of Bi Colored Lavender Roses, Fuchsia Rananculus and Blue Thistles in a bed of Dianthus and Sedum.',
    date: {
      created: now,
      modified: now
    },
    // item_variants: {
    //   size: ['Small', 'Medium', 'Large']
    // },
    price: {
      regular_cents: 15000,
      sale_cents: 12500
    },
    variants: [
      {
        sku: '34fo62l',
        price: {
          regular_cents: 15000,
          sale_cents: 12500
        },
        options: {
          size: 'Large'
        }
      },
      {
        sku: '04go67l',
        price: {
          regular_cents: 10000,
          sale_cents: 8000
        },
        options: {
          size: 'Medium'
        }
      },
      {
        sku: '21fo82l',
        price: {
          regular_cents: 7000,
          sale_cents: 5000
        },
        options: {
          size: 'Small'
        }
      }
    ]
  },

  // Spina No. 28
  {
    title: 'Spina No. 28',
    url: 'spina-no-28',
    description: 'Orange Gloriosa and Tulip Blossoms in a ruffled bud vase.',
    date: {
      created: now,
      modified: now
    },
    // item_variants: {},
    price: {
      regular_cents: 6500,
      sale_cents: 4500
    },
    variants: [
      {
        sku: 'alkdf38',
        price: {
          regular_cents: 6500,
          sale_cents: 4500
        },
        options: { }
      }
    ]
  }
];