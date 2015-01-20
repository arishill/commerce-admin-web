// definitions
Fixtures = (_.isUndefined(Fixtures)) ? {} : Fixtures;
Fixtures.products = (_.isUndefined(Fixtures.products)) ? [] : Fixtures.products;

var now = new Date().getTime();

Fixtures.products['fgc'] = [
  {
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
    variants: [
      {
        sku: 'f230ajf',
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
    variants: [
      {
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
    description: 'Slim, tapered fit jean in thicker 14.74 oz denim / Cone Mills White Oak raw selvage denim / Heavy cotton pocket bags / Bottom half of back pockets lined for extra durability / Button fly / 100% cotton / Graduated inseams from 33.5” to 35” / Made in San Francisco',
    url: 'f13-ladbrok-grove-slim-tapered-jean',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 22000,
      sale_cents: 0
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
    description: 'Slim, straight fit jean in thicker 14.74 oz denim / Cone Mills White Oak raw selvage denim / Heavy cotton pocket bags / Bottom half of back pockets lined for extra durability / Button fly / 100% cotton / Graduated inseams from 33.5” to 35” / Made in San Francisco',
    url: 'john-graham-mellor-slim-strait-jean-1475oz-denim',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 22000,
      sale_cents: 0
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
    description: 'Medium rise slim, straight leg 5 pocket raw denim jean / Slightly fitted at bottom to give the appearance of a straight leg / Button fly / Narrow leg / Red selvedge / 100% cotton\r\n\r\nSizing Guidance - We recommend ordering one size down for a snug fit, which will relax in time with wear',
    url: 'jean-new-tandard-raw-denim',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 18500,
      sale_cents: 0
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
    title: 'Jean New Petit Standard',
    description: 'Slim, tapered 5 pocket raw denim jean / Cut narrower than the New Standard / Slightly higher rise than the original Petit Standard / Narrow leg, slightly fitted at bottom to give the appearance of a straight leg / Button fly / Raw japanese selvedge denim / 100% Cotton\r\n\r\nSizing Guidance - We recommend ordering one size down for a snug fit, which will relax in time with wear',
    url: 'jean-new-petit-standard-raw-denim',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 18500,
      sale_cents: 0
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
    title: 'Liberty Travel Wallet',
    description: 'Leather construction large zippered wallet / Numerous card slots and interior compartments / Signature silver and gold zippers / 4 1/2\" x 9\"',
    url: 'f13-liberty-travel-wallet',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 29500,
      sale_cents: 0
    },
    variants: [
      {
        sku: 'w230ajf',
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
    description: 'Wide and loose cotton gauze tank with pintucked yoke detail / Keyhole closure at back neck with button closure / 100% cotton / Made in NYC',
    url: 'ss14-white-pintucked-tank',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 22500,
      sale_cents: 11300
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
    description: 'Printed cotton voile and silk pullover short sleeve top / Keyhole detail on back neck with button closure / 57% cotton voile, 43% silk / Made in NYC',
    url: 'ss14-multi-popover-blouse',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 24000,
      sale_cents: 12000
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
    description: 'Lightweight single button blazer with incredible drape / Fully lined sleeves, half lined body / Slight shoulder pad / 30% linen, 70% tencel / Made in Los Angeles',
    url: 'ss14-white-linen-blazer',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 52900,
      sale_cents: 26500
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
    title: 'Chambray Buttondown',
    description: 'Classic Gitman button down in light weight green cotton chambray / 2 1/2\" button down collar / Single needle tailoring / 100% cotton / Made in Ashland, Pennsylvania\r\n\r\n*small note - all of our Gitman Vintage shirts are made exclusively for us with a 2 1/2\" button down collar - an slight update from their Classic 3\"\r\n',
    url: 's14-green-chambray-buttondown',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 16800,
      sale_cents: 8400
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
    title: 'Bandanna Buttondown',
    description: 'Classic Gitman button down in light weight printed cotton shirting / 2 1/2\" button down collar / Single needle tailoring / 100% cotton / Made in Ashland, Pennsylvania\r\n\r\n*small note - all of our Gitman Vintage shirts are made exclusively for us with a 2 1/2\" button down collar - an slight update from their Classic 3\"\r\n',
    url: 'ss14-blue-bandanna-buttondown',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 18000,
      sale_cents: 9000
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
    description: 'Clean styled cotton button up / Slim fit / Minimal interfacing on placket, cuff  and collar / 100% cotton ',
    url: 'ss14-bleu-gris-chemise-casual-poches',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 20500,
      sale_cents: 10300
    },
    variants: [
      {
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
    description: 'Straight wool suiting trouser in a point twill jacquard / Easy tailored fit with a slightly tapered leg / Zip fly / Two side pockets / Two back welt pockets with button closure / 100% italian virgin wool\r\n\r\n*coordinates with the 3 Button Rolling Blazer for a full suit',
    url: 'ss14-navy-classic-trouser',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 28300,
      sale_cents: 14200
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
  },
  {
    title: 'Point Twill Jacquard 3 Button Rolling Blazer',
    description: 'Point twill jacquard wool suiting blazer with a three button rolling notched lapel / Traditional tailored details include two front patch pockets and a single chest handkerchief pocket / Fully lined with two interior chest pockets / 100% italian virgin wool \r\n\r\n*coordinates with the Classic Trousers in point twill jacquard for a full suit',
    url: 'ss14-navy-3d-rolling-blazer',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 59400,
      sale_cents: 29700
    },
    variants: [
      {
        sku: 'g230jjf',
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
    title: 'Elisa Mid Waist Trouser',
    description: 'Cropped skinny ankle fit trouser in stretch cotton twill / Mid-rise rise with a tailored waistband / Two side pockets / Slits at the ankle / 27\" inseam / 98% cotton, 2% elastane / Made in the USA',
    url: 'ss14-navy-elisa-mid-waist-trouser',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 31000,
      sale_cents: 15500
    },
    variants: [
      {
        sku: 'x23tajr',
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
    title: 'Lace Back Tee Shirt',
    description: 'Striped cotton jersey tee with lace back / Scooped neckline / Jersey - 100% cotton  Lace - 40% cotton, 40% viscose, 20% poly / Made in NYC',
    url: 'ss14-breton-lace-back-t-shirt',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 18500,
      sale_cents: 9300
    },
    variants: [
      {
        sku: 'xq30qjf',
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
    title: 'Lace Cut Out Dress',
    description: 'Woven cotton dress with lace insert at the waist / Exposed center back zipper closure / Fully lined / Falls about 34\" from high shoulder point / 83% cotton, 10% poly, 7% polymide / Made in NYC',
    url: 'ss14-red-lase-cut-out-dress',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 40500,
      sale_cents: 15000
    },
    variants: [
      {
        sku: 'x2p0ajo',
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
    title: 'Skort',
    description: 'Thick cotton and linen woven skort / Two front pleats on skirt / Two side pockets / Exposed back metal zipper closure / Fully lined in cotton / 41% cotton, 31% linen, 19% polyester, 8% polymide, 1% acrylic / Made in NYC',
    url: 'ss14-navy-skort',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 33000,
      sale_cents: 16500
    },
    variants: [
      {
        sku: 'x235Yjf',
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
    title: 'Elasticated Pant',
    description: 'Lightweight cotton wide leg trouser / Elasticized waist with interior drawstring waistband / Patch pockets sit on side seam-less leg construction (each leg draped from a single piece of fabric) / French seam construction throughout / 100% cotton / Made in Hungary',
    url: 'ss14-midnight-elasticated-pant',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 44500,
      sale_cents: 22300
    },
    variants: [
      {
        sku: 'x990ajf',
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
    title: 'Bicycle Crossover Dress',
    description: 'Sleeveless printed silk dress / Draped wrap collar / Paneled full skirt / Invisible side zip closure / Falls about 45\" from shoulder / 100% silk / Made in NYC',
    url: 'ss14-black-bicycle-crossover-dress',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 36500,
      sale_cents: 18300
    },
    variants: [
      {
        sku: 'x288ajf',
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
    title: 'Reef Pocket Shirt',
    description: 'Printed silk habotai button front shirt / Covered button placket / Two buttoned chest pockets on yoke seam / Slightly cropped silhouette / 100% silk / Made in NYC',
    url: 'ss14-black-reef-hidden-pocket-shirt',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 27500,
      sale_cents: 11000
    },
    variants: [
      {
        sku: 'x23iijf',
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
    title: 'Elisa Mid Waist Trouser',
    description: 'Cropped skinny ankle fit trouser in stretch cotton twill / Mid-rise rise with a tailored waistband / Two side pockets / Slits at the ankle / 27\" inseam / 98% cotton, 2% elastane / Made in the USA',
    url: 'ss14-black-elisa-mid-waist-trouser',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 31000,
      sale_cents: 15500
    },
    variants: [
      {
        sku: 'vv30ajf',
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
    title: 'Furtive Dress',
    description: 'Black linen tank dress with contrasting yellow trim / Dropped waist lines with a single front pocket / Single vent on front / Falls about 40\" from shoulder point / 100% linen / Made in NYC',
    url: 'ss14-black-furtive-dress',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 33500,
      sale_cents: 16800
    },
    variants: [
      {
        sku: 'xio0ajf',
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
    title: 'Ryder Sandal',
    description: 'Flat leather handmade sandal / Adjustable grommet closure on ankle strap / 100% leather upper, 100% leather sole with rubber heel tap / Handmade in Peru',
    url: 'ss14-caramel-ryder-sandal',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 31900,
      sale_cents: 16000
    },
    variants: [
      {
        sku: 'x230qaf',
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
    title: 'Troy Sandal',
    description: 'Flat leather handmade sandal / Adjustable silver buckle closure on ankle strap / 100% leather upper, 100% leather sole with rubber heel tap / Handmade in Peru',
    url: 'ss14-natural-troy-sandal',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 29700,
      sale_cents: 14900
    },
    variants: [
      {
        sku: 'x230mkf',
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
    title: 'Jessa Sandal',
    description: 'Handmade leather sandal / Antiqued brass buckle on adjustable ankle strap / Leather upper, leather sole / Handmade in Spain',
    url: 'ss14-yellow-jessa-sandal',
    date: {
      created: now,
      modified: now
    },
    price: {
      regular_cents: 23600,
      sale_cents: 11800
    },
    variants: [
      {
        sku: 'x230xhf',
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