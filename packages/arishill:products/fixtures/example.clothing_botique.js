// definitions
Fixtures = (_.isUndefined(Fixtures)) ? {} : Fixtures;
Fixtures.products = (_.isUndefined(Fixtures.products)) ? [] : Fixtures.products;

// timestamps
var now = moment().valueOf();

/* PRODUCTS EXAMPLE — CLOTHING BOTIQUE
.................................................*/
Fixtures.products['clothing-boutique'] = [
  {
    flags: {
      is_sale: true,
      is_active: true
    },
    title: 'Black Camp Boot',
    descripton: 'Exclusive /  Horween Chromexel Camp Boot from Oak Street Bootmakers / Hand-stitched moccasin construction / Vibram Sole / Form-fitting inner / waxed stitching / Rawhide laces / Made in the USA\r\n\r\nWe recommend sizing down one half size for a snug fit, as natural leather shoes will stretch to conform to your foot.',
    url: 'black-camp-boot',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 33600,
      sale_cents: 25200
    },
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/clothing-boutique/01-product.jpg'
    },
    variant_options: {
      thing: 'some'
    },
    variants: [
      {
        sku: 'f230ajf',
        price: {
          regular_cents: 25000,
          sale_cents: 20000
        },
        stock: 1,
        options: {

        }
      }
    ]
  },
  {
    flags: {
      is_sale: true,
      is_active: true
    },
    title: 'Trousse de Toilette Homme',
    description: 'French cotton toile. Zip closure on top. Side strap for hand carrying / Two interior patch pockets. Interior plastic lining / Case: 25 x 15 x 10 cm / 100% Cotton',
    url: 'f13-trousse-de-toilette-homme',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 15000,
      sale_cents: 0
    },
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/clothing-boutique/02-product.jpg'
    },
    variants: [
      {
        stock: 1,
        sku: '1230ajf',
        price: {
          regular_cents: 25000,
          sale_cents: 20000
        },
        options: {

        }
      },
      {
        stock: 2,
        sku: '1230ajf',
        price: {
          regular_cents: 25000,
          sale_cents: 20000
        },
        options: {

        }
      }
    ]
  },
  {
    title: 'Ladbroke Grove Slim Tapered Jean',
    description: 'Slim, tapered fit jean in thicker 14.74 oz denim / Cone Mills White Oak raw selvage denim / Heavy cotton pocket bags / Bottom half of back pockets lined for extra durability / btn fly / 100% cotton / Graduated inseams from 33.5” to 35” / Made in San Francisco',
    url: 'f13-ladbrok-grove-slim-tapered-jean',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 22000,
      sale_cents: 0
    },
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/clothing-boutique/03-product.jpg'
    },
    variants: [
      {
        sku: 'x237gyf',
        price: {
          regular_cents: 25000,
          sale_cents: 20000
        },
        options: {

        }
      }
    ]
  },
  {
    title: 'John Graham Mellor Slim Straight Jean',
    description: 'Slim, straight fit jean in thicker 14.74 oz denim / Cone Mills White Oak raw selvage denim / Heavy cotton pocket bags / Bottom half of back pockets lined for extra durability / btn fly / 100% cotton / Graduated inseams from 33.5” to 35” / Made in San Francisco',
    url: 'john-graham-mellor-slim-strait-jean-1475oz-denim',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 22000,
      sale_cents: 0
    },
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/clothing-boutique/04-product.jpg'
    },
    variants: [
      {
        sku: 'b230ajf',
        price: {
          regular_cents: 25000,
          sale_cents: 20000
        },
        options: {

        }
      }
    ]
  },
  {
    title: 'Jean New Standard',
    description: 'Medium rise slim, straight leg 5 pocket raw denim jean / Slightly fitted at bottom to give the appearance of a straight leg / btn fly / Narrow leg / Red selvedge / 100% cotton\r\n\r\nSizing Guidance - We recommend ordering one size down for a snug fit, which will relax in time with wear',
    url: 'jean-new-tandard-raw-denim',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 18500,
      sale_cents: 0
    },
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/clothing-boutique/05-product.jpg'
    },
    variants: [
      {
        sku: 'a230ajf',
        price: {
          regular_cents: 25000,
          sale_cents: 20000
        },
        options: {

        }
      }
    ]
  },
  {
    flags: {
      is_sale: true,
      is_active: false
    },
    title: 'Jean New Petit Standard',
    description: 'Slim, tapered 5 pocket raw denim jean / Cut narrower than the New Standard / Slightly higher rise than the original Petit Standard / Narrow leg, slightly fitted at bottom to give the appearance of a straight leg / btn fly / Raw japanese selvedge denim / 100% Cotton\r\n\r\nSizing Guidance - We recommend ordering one size down for a snug fit, which will relax in time with wear',
    url: 'jean-new-petit-standard-raw-denim',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 18500,
      sale_cents: 0
    },
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/clothing-boutique/06-product.jpg'
    },
    variants: [
      {
        sku: 'l350ajf',
        price: {
          regular_cents: 25000,
          sale_cents: 20000
        },
        options: {

        }
      }
    ]
  },
  {
    title: 'High Waist Looker',
    description: 'Slim tapered stretch jean with a 9\" rise / 31\" inseam / Fantastic retention / Made in the USA / 98% cotton, 2% elasthane',
    url: 'high-waist-looker-ctm',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 21300,
      sale_cents: 0
    },
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/clothing-boutique/07-product.jpg'
    },
    variants: [
      {
        sku: 'x230ajb',
        price: {
          regular_cents: 25000,
          sale_cents: 20000
        },
        options: {

        }
      }
    ]
  },
  {
    flags: {
      is_sale: true,
      is_active: false
    },
    title: 'Drop Out Jean',
    description: 'Copped jean with a 9 1/2\" rise / 25\" inseam (un-cuffed - 27\") / Made in the USA / 98% cotton, 2% elasthane',
    url: 'f13-drop-out-jean-indigo',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 21000,
      sale_cents: 0
    },
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/clothing-boutique/08-product.jpg'
    },
    variants: [
      {
        sku: 'j230ajf',
        price: {
          regular_cents: 25000,
          sale_cents: 20000
        },
        options: {

        }
      }
    ]
  },
  {
    title: 'Key Fob',
    description: 'Hand wrapped and stitched leather key fob / Brass hardware / Handmade in Brooklyn, NY',
    url: 'F13-leather-key-fob-ebony',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 6500,
      sale_cents: 0
    },
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/clothing-boutique/09-product.jpg'
    },
    variants: [
      {
        sku: 'q230ajf',
        price: {
          regular_cents: 25000,
          sale_cents: 20000
        },
        options: {

        }
      }
    ]
  },
  {
    title: 'Kennedy Money Clip',
    description: 'All leather construction / Card slots feather a protective snap closure / Money clip on the reverse / 2 1/2\" x 4 1/2\"\r\n\r\nAvailable in Black and Cognac',
    url: 'f13-kennedy-money-clip',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 12500,
      sale_cents: 0
    },
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/clothing-boutique/10-product.jpg'
    },
    variants: [
      {
        sku: 'e230ajf',
        price: {
          regular_cents: 25000,
          sale_cents: 20000
        },
        options: {

        }
      }
    ]
  },
  {
    title: 'Kenyatta Dopp Kitt',
    description: 'Textured leather dopp kit / Fully lined with protective nylon lining / Interior pockets / Signature gold/silver zipper closure / 10\" x 6\" x 5\" deep',
    url: 'f13-kenyatta-dopp-kitt',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 36500,
      sale_cents: 0
    },
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/clothing-boutique/11-product.jpg'
    },
    variants: [
      {
        sku: 'r230ajf',
        price: {
          regular_cents: 25000,
          sale_cents: 20000
        },
        options: {

        }
      }
    ]
  },
  {
    title: 'O\'Hare Shopper Tote',
    description: 'Leather trimmed organic cotton shopper / Detachable & adjustable shoulder strap / 4 deep internal pockets / Zip top closure / 18\" x 14\" x 4\" deep\r\n\r\nAvailable in Black (with Black leather trim) or Beige (with Cognac leather trim)',
    url: 'f13-ohare-shopper-tote',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 23500,
      sale_cents: 0
    },
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/clothing-boutique/12-product.jpg'
    },
    variants: [
      {
        sku: 't230ajf',
        price: {
          regular_cents: 25000,
          sale_cents: 20000
        },
        options: {

        }
      }
    ]
  },
  {
    title: 'Heathrow Commuter Bag',
    description: 'Leather trimmed organic cotton canvas / lightweight construction with multiple interior pockets and compartments / Detachable & adjustable shoulder strap / 16\" x 14\" x 1\" deep\r\n\r\nAvailable in Beige (with Cognac leather trim)',
    url: 'f13-heathrow-commuter-bag',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 45000,
      sale_cents: 0
    },
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/clothing-boutique/13-product.jpg'
    },
    variants: [
      {
        sku: 'y230ajf',
        price: {
          regular_cents: 25000,
          sale_cents: 20000
        },
        options: {

        }
      }
    ]
  },
  {
    title: 'Zeal Pant',
    description: 'High waisted crepe pant / Cropped with a 26\" inseam / Two front slash pockets and one rear welt / Invisible side zip closure / 100% poly / Made in NYC',
    url: 'ss14-black-zeal-pant',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 39100,
      sale_cents: 19600
    },
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/clothing-boutique/14-product.jpg'
    },
    variants: [
      {
        sku: 'x235ajf',
        price: {
          regular_cents: 25000,
          sale_cents: 20000
        },
        options: {

        }
      }
    ]
  },
  {
    title: 'Port Dress',
    description: 'Optional strapless dress with bandeau style crepe bodice and pleated skirt underlay / Two side pockets / Pulls-on with elastic banding across the back / Falls 42\" from shoulder / 100% polyester / Made in NYC',
    url: 'ss14-black-port-dress',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 50600,
      sale_cents: 25300
    },
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/clothing-boutique/15-product.jpg'
    },
    variants: [
      {
        sku: '3450ajf',
        price: {
          regular_cents: 25000,
          sale_cents: 20000
        },
        options: {

        }
      }
    ]
  },
  {
    title: 'City Trench',
    description: 'Water resistant blue contrasting double face collarless jacket / Wide and loose silhouette with cropped and cuffed sleeves / Front Zip closure / Two front patch pockets / Interior waistband drawstring / Fully bound interior seam finishing / 88% polyester, 12% cotton / Made in NYC',
    url: 'ss14-multi-city-trench',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 65500,
      sale_cents: 32800
    },
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/clothing-boutique/16-product.jpg'
    },
    variants: [
      {
        sku: 'x238ajf',
        price: {
          regular_cents: 25000,
          sale_cents: 20000
        },
        options: {

        }
      }
    ]
  },
  {
    title: 'Petra Pant',
    description: 'Printed cotton and silk blend pleated pant / Two side pockets / Zip fly with hook and eye closure / Two side vents on pant cuffs / 11\" rise, 28.5\" inseam / 57% cotton poplin, 43% silk / Made in NYC',
    url: 'ss14-vino-block-petra-skinny-pant',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 39500,
      sale_cents: 15000
    },
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/clothing-boutique/17-product.jpg'
    },
    variants: [
      {
        sku: 'x2jjijf',
        price: {
          regular_cents: 25000,
          sale_cents: 20000
        },
        options: {

        }
      }
    ]
  },
  {
    title: 'Lace 3/4 Sleeve Sheath Dress',
    description: 'Fitted lace sheath dress / Fully lined body / Raglan sleeve construction / Exposed back zip closure / Frayed cotton trim detail on neck, sleeve cuff and bottom hem / Falls about 36\" from shoulder point / Lace - 80% nylon, 20% cotton  Lining - 95% silk, 5% spandex / Made in NYC',
    url: 'ss14-black-long-sleeve-sheath-dress',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 51500,
      sale_cents: 25800
    },
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/clothing-boutique/18-product.jpg'
    },
    variants: [
      {
        sku: 'x230ijf',
        price: {
          regular_cents: 25000,
          sale_cents: 20000
        },
        options: {

        }
      }
    ]
  },
  {
    title: 'Fighter Short',
    description: 'Cotton voile and silk blend printed shorts / Elasticized waist with cotton drawstring tie at front / Two front pockets / Fully lined in solid black / 57% cotton, 43% silk / Made in NYC',
    url: 'ss14-multi-fighter-short',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 24500,
      sale_cents: 12000
    },
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/clothing-boutique/19-product.jpg'
    },
    variants: [
      {
        sku: 'x230ppl',
        price: {
          regular_cents: 25000,
          sale_cents: 20000
        },
        options: {

        }
      }
    ]
  },
  {
    title: 'Lace Tank',
    description: 'Lace tank with cotton frayed trim at neckline / Rounded hemline / 80% nylon, 20% cotton / Made in NYC',
    url: 'ss14-black-lace-tank',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 28000,
      sale_cents: 14000
    },
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/clothing-boutique/20-product.jpg'
    },
    variants: [
      {
        sku: 'x230qjf',
        price: {
          regular_cents: 25000,
          sale_cents: 20000
        },
        options: {

        }
      }
    ]
  },
  {
    title: 'Pintuck Tank',
    description: 'Wide and loose cotton gauze tank with pintucked yoke detail / Keyhole closure at back neck with btn closure / 100% cotton / Made in NYC',
    url: 'ss14-white-pintucked-tank',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 22500,
      sale_cents: 11300
    },
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/clothing-boutique/21-product.jpg'
    },
    variants: [
      {
        sku: 'x781ajf',
        price: {
          regular_cents: 25000,
          sale_cents: 20000
        },
        options: {

        }
      }
    ]
  },
  {
    title: 'Popover Blouse',
    description: 'Printed cotton voile and silk pullover short sleeve top / Keyhole detail on back neck with btn closure / 57% cotton voile, 43% silk / Made in NYC',
    url: 'ss14-multi-popover-blouse',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 24000,
      sale_cents: 12000
    },
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/clothing-boutique/22-product.jpg'
    },
    variants: [
      {
        sku: 'x230alf',
        price: {
          regular_cents: 25000,
          sale_cents: 20000
        },
        options: {

        }
      }
    ]
  },
  {
    title: 'Lace Combo T Shirt Dress',
    description: 'Jersey front dress with lined lace contrast back / Zip closure at back neck / Falls about 35\" from shoulder point / Self - 100% cotton  Lace - 80% nylon, 20% cotton / Made in NYC',
    url: 'ss14-grey-lace-combo-tshirt-dress',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 38000,
      sale_cents: 22800
    },
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/clothing-boutique/23-product.jpg'
    },
    variants: [
      {
        sku: 'x2a29jf',
        price: {
          regular_cents: 25000,
          sale_cents: 20000
        },
        options: {

        }
      }
    ]
  },
  {
    title: 'Linen Blazer',
    description: 'Lightweight single btn blazer with incredible drape / Fully lined sleeves, half lined body / Slight shoulder pad / 30% linen, 70% tencel / Made in Los Angeles',
    url: 'ss14-white-linen-blazer',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 52900,
      sale_cents: 26500
    },
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/clothing-boutique/24-product.jpg'
    },
    variants: [
      {
        sku: 'xmmvajf',
        price: {
          regular_cents: 25000,
          sale_cents: 20000
        },
        options: {

        }
      }
    ]
  },
  {
    title: 'Tisso Top',
    description: 'Black silk crepe pullover top / Wide neckline with a slight cowl / Working placket draped into the bottom on the top / Short sleeve dolman dropped shoulder / Clean seam finishing throughout / 100% silk crepe de chine / Made in EU',
    url: 'ss14-black-tisso-top',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 49500,
      sale_cents: 24800
    },
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/clothing-boutique/25-product.jpg'
    },
    variants: [
      {
        sku: 'x230vvc',
        price: {
          regular_cents: 25000,
          sale_cents: 20000
        },
        options: {

        }
      }
    ]
  },
  {
    title: 'Zip Skirt',
    description: 'Reversed raw denim skirt / Two side pockets / Exposed metal zip front closure / 27\" length / Taped interior seams / 100% cotton / Made in NYC',
    url: 'ss14-denim-zip-skirt',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 36800,
      sale_cents: 18400
    },
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/clothing-boutique/26-product.jpg'
    },
    variants: [
      {
        sku: 'y130ajf',
        price: {
          regular_cents: 25000,
          sale_cents: 20000
        },
        options: {

        }
      }
    ]
  },
  {
    title: 'Chambray btndown',
    description: 'Classic Gitman btn down in light weight green cotton chambray / 2 1/2\" btn down collar / Single needle tailoring / 100% cotton / Made in Ashland, Pennsylvania\r\n\r\n*small note - all of our Gitman Vintage shirts are made exclusively for us with a 2 1/2\" btn down collar - an slight update from their Classic 3\"\r\n',
    url: 's14-green-chambray-btndown',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 16800,
      sale_cents: 8400
    },
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/clothing-boutique/27-product.jpg'
    },
    variants: [
      {
        sku: 'u830ajf',
        price: {
          regular_cents: 25000,
          sale_cents: 20000
        },
        options: {

        }
      }
    ]
  },
  {
    title: 'Bandanna btndown',
    description: 'Classic Gitman btn down in light weight printed cotton shirting / 2 1/2\" btn down collar / Single needle tailoring / 100% cotton / Made in Ashland, Pennsylvania\r\n\r\n*small note - all of our Gitman Vintage shirts are made exclusively for us with a 2 1/2\" btn down collar - an slight update from their Classic 3\"\r\n',
    url: 'ss14-blue-bandanna-btndown',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 18000,
      sale_cents: 9000
    },
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/clothing-boutique/28-product.jpg'
    },
    variants: [
      {
        sku: 'p730ajf',
        price: {
          regular_cents: 25000,
          sale_cents: 20000
        },
        options: {

        }
      }
    ]
  },
  {
    title: 'Chemise Casual A Poches',
    description: 'Clean styled cotton btn up / Slim fit / Minimal interfacing on placket, cuff  and collar / 100% cotton ',
    url: 'ss14-bleu-gris-chemise-casual-poches',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 20500,
      sale_cents: 10300
    },
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/clothing-boutique/29-product.jpg'
    },
    variants: [
      {
        title: 'Gray',
        description: 'Silky gray',
        sku: 'bv30ajf',
        price: {
          regular_cents: 25000,
          sale_cents: 20000
        },
        options: {

        }
      }
    ]
  },
  {
    title: 'Point Twill Jacquard Classic Trouser',
    description: 'Straight wool suiting trouser in a point twill jacquard / Easy tailored fit with a slightly tapered leg / Zip fly / Two side pockets / Two back welt pockets with btn closure / 100% italian virgin wool\r\n\r\n*coordinates with the 3 btn Rolling Blazer for a full suit',
    url: 'ss14-navy-classic-trouser',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 28300,
      sale_cents: 14200
    },
    images: {
      thumb: 'https://storage.googleapis.com/aristotle/fixtures/clothing-boutique/30-product.jpg'
    },
    variants: [
      {
        sku: 'x770ajf',
        price: {
          regular_cents: 25000,
          sale_cents: 20000
        },
        options: {

        }
      }
    ]
  }
];