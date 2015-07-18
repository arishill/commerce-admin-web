// definitions
Fixtures = (_.isUndefined(Fixtures)) ? {} : Fixtures;
Fixtures.products = (_.isUndefined(Fixtures.products)) ? [] : Fixtures.products;

// timestamps
var now = moment().valueOf();

/* PRODUCTS EXAMPLE — FLOWER BOTIQUE
.................................................*/
Fixtures.products['flower-boutique'] = [

  // Spina No. 1
  {
    title: 'Spina No. 1',
    url: 'spina-no-1',
    description: 'Large optic vase filled with pink, white and magenta feathered peonies.',
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
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/flower-boutique/01-product.jpg'
    },
    variants: [
      {
        sku: 'di5s89kj',
        price: {
          regular_cents: 25000,
          sale_cents: 22500
        },
        options: {
          size: 'Large'
        }
      },
      {
        sku: 'r04ft68l',
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

  // Spina No. 2
  {
    title: 'Spina No. 2',
    url: 'spina-no-2',
    description: 'Large optic vase filled with white hydrangeas and crystel blush mini callalilies.',
    date: {
      created: now,
      modified: now
    },
    // item_variants: {},
    price: {
      regular_cents: 25000,
      sale_cents: 22500
    },
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/flower-boutique/02-product.jpg'
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

  // Spina No. 3
  {
    title: 'Spina No. 3',
    description: 'Group of three retro bud vases filled with crystel blush miniature callalilies accented with variegated lily grass.',
    url: 'spina-no-3',
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
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/flower-boutique/03-product.jpg'
    },
    variants: [
      {
        sku: 'aqbf562j',
        price: {
          regular_cents: 25000,
          sale_cents: 22500
        },
        options: {
          size: 'Large'
        }
      },
      {
        sku: '8ajwok20',
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

  // Spina No. 4
  {
    title: 'Spina No. 4',
    url: 'spina-no-4',
    description: 'White glass vase filled with coral charm peonies accented with coral colored feathers.',
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
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/flower-boutique/04-product.jpg'
    },
    variants: [
      {
        sku: '3z4fo62l',
        price: {
          regular_cents: 15000,
          sale_cents: 12500
        },
        options: {
          size: 'Large'
        }
      },
      {
        sku: '042go67l',
        price: {
          regular_cents: 10000,
          sale_cents: 8000
        },
        options: {
          size: 'Medium'
        }
      },
      {
        sku: '21fol82l',
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

  // Spina No. 5
  {
    title: 'Spina No. 5',
    url: 'spina-no-5',
    description: 'Pave arrangement of Buttercream callalilies.',
    date: {
      created: now,
      modified: now
    },
    // item_variants: {},
    price: {
      regular_cents: 6500,
      sale_cents: 4500
    },
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/flower-boutique/05-product.jpg'
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
  },

  // Spina No. 6
  {
    title: 'Spina No. 6',
    url: 'spina-no-6',
    description: 'Small arrangement of mondial roses, cream lissianthus, cremme de la cremme roses and accented with feathered peonies.',
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
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/flower-boutique/06-product.jpg'
    },
    variants: [
      {
        sku: '4dis8a9kj',
        price: {
          regular_cents: 25000,
          sale_cents: 22500
        },
        options: {
          size: 'Large'
        }
      },
      {
        sku: 'r14ft68l',
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

  // Spina No. 8
  {
    title: 'Spina No. 8',
    url: 'spina-no-8',
    description: 'Optic vase lined with a monsera leaf and filled with white roses, white dahlias, white lissianthus and white freesias in a bed of white hydrangeas.',
    date: {
      created: now,
      modified: now
    },
    // item_variants: {},
    price: {
      regular_cents: 25000,
      sale_cents: 22500
    },
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/flower-boutique/07-product.jpg'
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

  // Spina No. 14
  {
    title: 'Spina No. 14',
    description: 'Clustered Phalaneospis Orchids in mercury vase . Colors vary by seasonal availability.',
    url: 'spina-no-14',
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
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/flower-boutique/08-product.jpg'
    },
    variants: [
      {
        sku: 'ab1f562j',
        price: {
          regular_cents: 25000,
          sale_cents: 22500
        },
        options: {
          size: 'Large'
        }
      },
      {
        sku: '8ajkok20',
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

  // Spina No. 16
  {
    title: 'Spina No. 16',
    url: 'spina-no-16',
    description: 'Miniature White Phalaenopsis in a White Glass vase.',
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
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/flower-boutique/09-product.jpg'
    },
    variants: [
      {
        sku: '34fon62l',
        price: {
          regular_cents: 15000,
          sale_cents: 12500
        },
        options: {
          size: 'Large'
        }
      },
      {
        sku: '04gio67l',
        price: {
          regular_cents: 10000,
          sale_cents: 8000
        },
        options: {
          size: 'Medium'
        }
      },
      {
        sku: '21fob82l',
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

  // Spina No. 18
  {
    title: 'Spina No. 18',
    url: 'spina-no-18',
    description: 'Set of 3 Golden Calla lilies in Nuveau Budvases.',
    date: {
      created: now,
      modified: now
    },
    // item_variants: {},
    price: {
      regular_cents: 6500,
      sale_cents: 4500
    },
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/flower-boutique/10-product.jpg'
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
  },

  // Spina No. 21
  {
    title: 'Spina No. 21',
    url: 'spina-no-21',
    description: 'Pave arrangement of Mont Blanc Roses and Crystel Blush Calla lilies accented with White Cymbidium Orchids in a bed of White Stock Blossoms.',
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
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/flower-boutique/11-product.jpg'
    },
    variants: [
      {
        sku: 'dios89kja',
        price: {
          regular_cents: 25000,
          sale_cents: 22500
        },
        options: {
          size: 'Large'
        }
      },
      {
        sku: 'r4vft68l',
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

  // Spina No. 22
  {
    title: 'Spina No. 22',
    url: 'spina-no-22',
    description: 'Sunflowers and Summer Hydrangeas in a Mercury Vase.',
    date: {
      created: now,
      modified: now
    },
    // item_variants: {},
    price: {
      regular_cents: 25000,
      sale_cents: 22500
    },
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/flower-boutique/12-product.jpg'
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

  // Spina No. 23
  {
    title: 'Spina No. 23',
    description: 'Burgundy Roses, Allium, Brunia and Eggplant Stocks accented with Green Succulents and Red Cymbidium Orchids.',
    url: 'spina-no-23',
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
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/flower-boutique/13-product.jpg'
    },
    variants: [
      {
        sku: 'abf5y62j',
        price: {
          regular_cents: 25000,
          sale_cents: 22500
        },
        options: {
          size: 'Large'
        }
      },
      {
        sku: '8ajok2801',
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

  // Spina No. 24
  {
    title: 'Spina No. 24',
    url: 'spina-no-24',
    description: 'Pink Spray Roses and Pink Peonies in a bed of Dusty Miller and Chartreuse Hydrangeas.',
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
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/flower-boutique/14-product.jpg'
    },
    variants: [
      {
        sku: '34fo632l',
        price: {
          regular_cents: 15000,
          sale_cents: 12500
        },
        options: {
          size: 'Large'
        }
      },
      {
        sku: '04go67ol',
        price: {
          regular_cents: 10000,
          sale_cents: 8000
        },
        options: {
          size: 'Medium'
        }
      },
      {
        sku: '21fo829l',
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
    url: 'spina-no-286',
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
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/flower-boutique/15-product.jpg'
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
  },
  // Spina No. 2
  {
    title: 'Spina No. 2',
    url: 'spina-no-27',
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
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/flower-boutique/16-product.jpg'
    },
    variants: [
      {
        sku: 'dis899kqj',
        price: {
          regular_cents: 25000,
          sale_cents: 22500
        },
        options: {
          size: 'Large'
        }
      },
      {
        sku: 'r4fxt68lk',
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
    url: 'spina-no-47',
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
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/flower-boutique/17-product.jpg'
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
    url: 'spina-no-58',
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
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/flower-boutique/18-product.jpg'
    },
    variants: [
      {
        sku: 'abft562j',
        price: {
          regular_cents: 25000,
          sale_cents: 22500
        },
        options: {
          size: 'Large'
        }
      },
      {
        sku: '8ajcok20',
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
    url: 'spina-no-439',
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
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/flower-boutique/19-product.jpg'
    },
    variants: [
      {
        sku: '34foc62l',
        price: {
          regular_cents: 15000,
          sale_cents: 12500
        },
        options: {
          size: 'Large'
        }
      },
      {
        sku: '04xgo67l',
        price: {
          regular_cents: 10000,
          sale_cents: 8000
        },
        options: {
          size: 'Medium'
        }
      },
      {
        sku: '2r1fo82l',
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
    url: 'spina-no-283',
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
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/flower-boutique/20-product.jpg'
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
  },
  // Spina No. 2
  {
    title: 'Spina No. 2',
    url: 'spina-no-27',
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
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/flower-boutique/21-product.jpg'
    },
    variants: [
      {
        sku: 'dris89kj',
        price: {
          regular_cents: 25000,
          sale_cents: 22500
        },
        options: {
          size: 'Large'
        }
      },
      {
        sku: 'r4fbt68l',
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
    url: 'spina-no-46',
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
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/flower-boutique/22-product.jpg'
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
    url: 'spina-no-50',
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
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/flower-boutique/23-product.jpg'
    },
    variants: [
      {
        sku: 'abf562kj',
        price: {
          regular_cents: 25000,
          sale_cents: 22500
        },
        options: {
          size: 'Large'
        }
      },
      {
        sku: '8ajokh20',
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
    url: 'spina-no-430',
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
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/flower-boutique/24-product.jpg'
    },
    variants: [
      {
        sku: '34fo6h2l',
        price: {
          regular_cents: 15000,
          sale_cents: 12500
        },
        options: {
          size: 'Large'
        }
      },
      {
        sku: '04go687l',
        price: {
          regular_cents: 10000,
          sale_cents: 8000
        },
        options: {
          size: 'Medium'
        }
      },
      {
        sku: '21fxo82l',
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
    url: 'spina-no-280',
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
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/flower-boutique/25-product.jpg'
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