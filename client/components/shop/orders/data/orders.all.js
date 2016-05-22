Admin.data.orders = {
  all: [
    {
      "object": "order",
      "id": "9c7abc9f-a35c-421b-9a43-1ce210522ad5",
      "date": {
        "created": "2016-04-22T05:39:57Z",
        "modified": "2016-04-22T05:39:57Z"
      },
      "type": "online",
      "customer": {
        "object": "customer",
        "id": "da548ada-6655-4586-bd5e-fc4d77448b53",
        "name": {
          "first": "Sherlock",
          "last": "Holmes"
        },
        "company": null,
        "phone": null,
        "email": "holmes@sherlock.com",
        "avatar": null,
        "shipping": {
          "address": {
            "line_1": '221b Baker Street',
            "line_2": null,
            "city": 'London',
            "province": 'England',
            "postal_code": 'W1T 1JY',
            "country_code": "UK"
          },
          "delivery": {
            "phone": null,
            "instructions": null
          }
        },
        "billing": {
          "address": {
            "line_1": '221b Baker Street',
            "line_2": null,
            "city": 'London',
            "province": 'England',
            "postal_code": 'W1T 1JY',
            "country_code": "UK"
          }
        }
      },
      "items": [
        {
          "quantity": 2,
          "amount": {
            "subtotal_cents": 4400,
            "tax_cents": 0
          },
          "product_id": "487f6d77-d4db-4dd9-b0a5-d7552a814b51",
          "sku": {
            "object": "sku",
            "id": "8c16ab5a-b157-4a7b-bcc1-f85120854364",
            "attributes": {
              "size": "Three Quarters",
              "color": "Striped Blue"
            },
            "custom_sku": null,
            "date": {
              "created": "2016-04-22T05:39:57Z",
              "modified": "2016-04-22T05:39:57Z"
            },
            "description": "",
            "flags": {
              "is_active": false,
              "is_sale": false,
              "is_taxable": true
            },
            "images": {
              "cascade": "https://storage.googleapis.com/arishill-demo/stripe-three-quarter.jpg"
            },
            "options": {},
            "price": {
              "regular_cents": 2200,
              "sale_cents": 1500
            },
            "stock": 3,
            "tax_code": null,
            "name": "Three Quarters — Striped Blue"
          }
        }
      ],
      "options": {
        "gift_wrapping": false,
        "message": null
      },
      "payment": {
        "status": "approved",
        "transactions": [
          {
            "id": "8b5c2442-421d-4ec1-ba1e-66ddd2114f1e",
            "status": "pending",
            "date": {
              "created": "2016-04-22T05:39:57Z",
              "modified": "2016-04-22T05:39:57Z"
            },
            "gateway": {
              "provider": "stripe",
              "charge_id": "ch_183rBe2eZvKYlo2ChXE3EwX6"
            },
            "amount_cents": "5400",
            "currency": "usd",
            "method": {
              "type": "credit",
              "card": {
                "type": "amex",
                "last_4": "0145",
                "expiry": {
                  "month": "05",
                  "year": "2020"
                }
              }
            }
          }
        ]
      },
      "receipt": {
        "amount": {
          "discount_cents": null,
          "subtotal_cents": 4400,
          "tax_cents": 0,
          "shipping_cents": 1000,
          "total_cents": 5400
        },
        "currency_code": "usd",
        "discount_code": null,
        "fees": {
          "gateway_cents": 157
        },
        "tax": {
          "combined_rate": 0.0885,
          "tax_id": "tax-code-name",
        }
      },
      "refunds": {
        "entries": [],
        "amount_refunded": {
          "shipping_cents": 0,
          "subtotal_cents": 0,
          "tax_cents": 0,
          "total_cents": 0
        },
        "fees_refunded": {
          "gateway_cents": 0
        },
        "is_refunded": false,
        "type": null
      },
      "shipments": [
        {
          status: 'delivered'
        }
      ]
    },
    {
      "object": "order",
      "id": "9c7abc9f-a35c-421b-9a43-1ce210522ad5",
      "date": {
        "created": "2016-04-22T05:39:57Z",
        "modified": "2016-04-22T05:39:57Z"
      },
      "type": "online",
      "customer": {
        "object": "customer",
        "id": "da548ada-6655-4586-bd5e-fc4d77448b53",
        "name": {
          "first": "Mr.",
          "last": "Chellio"
        },
        "company": null,
        "phone": null,
        "email": "mr@chellio.com",
        "avatar": null,
        "shipping": {
          "address": {
            "line_1": "Patchen Avenue 921",
            "line_2": null,
            "city": 'Arishill',
            "province": 'Geshire',
            "postal_code": 'A512',
            "country_code": "US"
          },
          "delivery": {
            "phone": null,
            "instructions": null
          }
        },
        "billing": {
          "address": {
            "line_1": "Patchen Avenue 921",
            "line_2": null,
            "city": 'Arishill',
            "province": 'Geshire',
            "postal_code": 'A512',
            "country_code": "US"
          }
        }
      },
      "items": [
        {
          "quantity": 1,
          "amount": {
            "subtotal_cents": 30000,
            "tax_cents": 0
          },
          "product_id": "487f6d77-d4db-4dd9-b0a5-d7552a814b51",
          "sku": [
            {
              "attributes": {
                "color": "blue/green"
              },
              "custom_sku": null,
              "date": {
                "created": "2016-04-22T05:39:57Z",
                "modified": "2016-04-22T05:39:57Z"
              },
              "description": "",
              "flags": {
                "is_active": false,
                "is_sale": false,
                "is_taxable": true
              },
              "images": {
                "cascade": "https://storage.googleapis.com/arishill-demo/hawaiian-backpack.jpg"
              },
              "options": {},
              "price": {
                "regular_cents": 30000,
                "sale_cents": 15000
              },
              "sku_id": "8c16ab5a-b157-4a7b-bcc1-f85120854364",
              "stock": 3,
              "tax_code": null,
              "name": "Blue/Green"
            }
          ]
        }
      ],
      "options": {
        "gift_wrapping": false,
        "message": null
      },
      "payment": {
        "status": "approved",
        "transactions": [
          {
            "id": "8b5c2442-421d-4ec1-ba1e-66ddd2114f1e",
            "status": "pending",
            "date": {
              "created": "2016-04-22T05:39:57Z",
              "modified": "2016-04-22T05:39:57Z"
            },
            "gateway": {
              "provider": "stripe",
              "charge_id": "ch_183rBe2eZvKYlo2ChXE3EwX6"
            },
            "amount_cents": "5400",
            "currency": "usd",
            "method": {
              "type": "credit",
              "card": {
                "type": "amex",
                "last_4": "0145",
                "expiry": {
                  "month": "05",
                  "year": "2020"
                }
              }
            }
          }
        ]
      },
      "receipt": {
        "amount": {
          "discount_cents": null,
          "subtotal_cents": 30000,
          "tax_cents": 0,
          "shipping_cents": 2000,
          "total_cents": 32000
        },
        "currency_code": "usd",
        "discount_code": null,
        "fees": {
          "gateway_cents": 958
        },
        "tax": {
          "combined_rate": 0.0885,
          "tax_id": "tax-code-name",
        }
      },
      "refunds": {
        "entries": [],
        "amount_refunded": {
          "shipping_cents": 0,
          "subtotal_cents": 0,
          "tax_cents": 0,
          "total_cents": 0
        },
        "fees_refunded": {
          "gateway_cents": 0
        },
        "is_refunded": false,
        "type": null
      },
      "shipments": [
        {
          status: 'delivered'
        }
      ]
    },
    {
      "object": "order",
      "id": "9c7abc9f-a35c-421b-9a43-1ce210522ad5",
      "date": {
        "created": "2016-04-22T05:39:57Z",
        "modified": "2016-04-22T05:39:57Z"
      },
      "type": "online",
      "customer": {
        "object": "customer",
        "id": "da548ada-6655-4586-bd5e-fc4d77448b53",
        "name": {
          "first": "Harry",
          "last": "Potter"
        },
        "company": null,
        "phone": null,
        "email": "harrypotter@hogwarts.edu",
        "avatar": null,
        "shipping": {
          "address": {
            "line_1": "4 Pivot Drive",
            "line_2": null,
            "city": 'Little Whinging',
            "province": 'Surrey',
            "postal_code": 'GU2 7XH',
            "country_code": "UK"
          },
          "delivery": {
            "phone": null,
            "instructions": null
          }
        },
        "billing": {
          "address": {
            "line_1": "4 Pivot Drive",
            "line_2": null,
            "city": 'Little Whinging',
            "province": 'Surrey',
            "postal_code": 'GU2 7XH',
            "country_code": "UK"
          }
        }
      },
      "items": [
        {
          "quantity": 1,
          "amount": {
            "subtotal_cents": 15500,
            "tax_cents": 0
          },
          "product_id": "87084259-3322-4c8a-a307-b5cd030c5227",
          "sku": {
            "attributes": {
              "color": "Gray with Yellow/Red Stripes"
            },
            "custom_sku": null,
            "date": {
              "created": 1451273900369,
              "modified": 1451273900369
            },
            "description": "",
            "flags": {
              "is_active": false,
              "is_sale": false,
              "is_taxable": true
            },
            "images": {
              "cascade": "https://storage.googleapis.com/arishill-demo/classic-tie.jpg"
            },
            "options": {},
            "price": {
              "regular_cents": 15500,
              "sale_cents": 11500
            },
            "sku_id": "8c16ab5a-b157-4a7b-bcc1-f85120854364",
            "stock": 1,
            "tax_code": null,
            "name": "Gray with Yellow/Red Stripes"
          }
        },
        {
          "quantity": 1,
          "amount": {
            "subtotal_cents": 12500,
            "tax_cents": 0
          },
          "product_id": "08402939-90ea-4852-875c-9aeba07185f2",
          "sku": {
            "object": "sku",
            "id": "8c16ab5a-b157-4a7b-bcc1-f85120854364",
            "attributes": {
              "size": "Medium",
              "color": "Navy / Orange"
            },
            "custom_sku": null,
            "date": {
              "created": "2016-04-22T05:39:57Z",
              "modified": "2016-04-22T05:39:57Z"
            },
            "description": "Board short by Cuisse De Grenouille",
            "flags": {
              "is_active": false,
              "is_sale": false,
              "is_taxable": true
            },
            "images": {
              "cascade": "https://storage.googleapis.com/arishill-demo/board-short.jpg"
            },
            "options": {},
            "price": {
              "regular_cents": 12500,
              "sale_cents": 6300
            },
            "stock": 2,
            "tax_code": null,
            "name": "Medium — Navy / Orange"
          }
        }
      ],
      "options": {
        "gift_wrapping": false,
        "message": null
      },
      "payment": {
        "status": "pending",
        "transactions": [
          {
            "id": "8b5c2442-421d-4ec1-ba1e-66ddd2114f1e",
            "status": "pending",
            "date": {
              "created": "2016-04-22T05:39:57Z",
              "modified": "2016-04-22T05:39:57Z"
            },
            "gateway": {
              "provider": "stripe",
              "charge_id": "ch_183rBe2eZvKYlo2ChXE3EwX6"
            },
            "amount_cents": "26000",
            "currency": "usd",
            "method": {
              "type": "credit",
              "card": {
                "type": "amex",
                "last_4": "0145",
                "expiry": {
                  "month": "05",
                  "year": "2020"
                }
              }
            }
          }
        ]
      },
      "receipt": {
        "amount": {
          "discount_cents": null,
          "subtotal_cents": 24000,
          "tax_cents": 0,
          "shipping_cents": 2000,
          "total_cents": 26000
        },
        "currency_code": "usd",
        "discount_code": null,
        "fees": {
          "gateway_cents": 784
        },
        "tax": {
          "combined_rate": 0.0885,
          "tax_id": "tax-code-name",
        }
      },
      "refunds": {
        "entries": [],
        "amount_refunded": {
          "shipping_cents": 0,
          "subtotal_cents": 0,
          "tax_cents": 0,
          "total_cents": 0
        },
        "fees_refunded": {
          "gateway_cents": 0
        },
        "is_refunded": false,
        "type": null
      },
      "shipments": [
        {
          status: 'pending'
        }
      ]
    },
    {
      "object": "order",
      "id": "9c7abc9f-a35c-421b-9a43-1ce210522ad5",
      "date": {
        "created": "2016-04-22T05:39:57Z",
        "modified": "2016-04-22T05:39:57Z"
      },
      "type": "online",
      "customer": {
        "object": "customer",
        "id": "da548ada-6655-4586-bd5e-fc4d77448b53",
        "name": {
          "first": "Alegramus",
          "last": "the Wizard"
        },
        "company": null,
        "phone": null,
        "email": "alegramus@wigolia.com",
        "avatar": null,
        "shipping": {
          "address": {
            "line_1": "Cherry Valley Road 1208",
            "line_2": null,
            "city": "Wigolia",
            "province": "Geshire",
            "postal_code": 'W198',
            "country_code": "US"
          },
          "delivery": {
            "phone": null,
            "instructions": null
          }
        },
        "billing": {
          "address": {
            "line_1": "Cherry Valley Road 1208",
            "line_2": null,
            "city": "Wigolia",
            "province": "Geshire",
            "postal_code": 'W198',
            "country_code": "US"
          }
        }
      },
      "items": [
        {
          "quantity": 1,
          "amount": {
            "subtotal_cents": 26000,
            "tax_cents": 0
          },
          "product_id": "87084259-3322-4c8a-a307-b5cd030c5227",
          "sku": {
            "attributes": {
              "color": "Navy"
            },
            "custom_sku": null,
            "date": {
              "created": "2016-04-22T05:39:57Z",
              "modified": "2016-04-22T05:39:57Z"
            },
            "description": "",
            "flags": {
              "is_active": false,
              "is_sale": false,
              "is_taxable": true
            },
            "images": {
              "cascade": "https://storage.googleapis.com/arishill-demo/twill-rucksack.jpg"
            },
            "options": {},
            "price": {
              "regular_cents": 26000,
              "sale_cents": 18000
            },
            "sku_id": "8c16ab5a-b157-4a7b-bcc1-f85120854364",
            "stock": 3,
            "tax_code": null,
            "name": "Navy"
          }
        },
        {
          "quantity": 1,
          "amount": {
            "subtotal_cents": 3600,
            "tax_cents": 0
          },
          "product_id": "25066d44-f776-4c24-b749-4bd14b2cf18b",
          "sku": {
            "attributes": {
              "size": "Womens 7",
              "color": "Red/Striped"
            },
            "custom_sku": null,
            "date": {
              "created": "2016-04-22T05:39:57Z",
              "modified": "2016-04-22T05:39:57Z"
            },
            "description": "",
            "flags": {
              "is_active": true,
              "is_sale": false,
              "is_taxable": true
            },
            "images": {
              "cascade": "https://storage.googleapis.com/arishill-demo/soludos.jpg"
            },
            "options": {},
            "price": {
              "regular_cents": 3600,
              "sale_cents": 2000
            },
            "sku_id": "8c16ab5a-b157-4a7b-bcc1-f85120854364",
            "stock": 4,
            "tax_code": null,
            "name": "Womens 7 — Red/Stripe"
          }
        }
      ],
      "options": {
        "gift_wrapping": false,
        "message": null
      },
      "payment": {
        "status": "pending",
        "transactions": [
          {
            "id": "8b5c2442-421d-4ec1-ba1e-66ddd2114f1e",
            "status": "pending",
            "date": {
              "created": "2016-04-22T05:39:57Z",
              "modified": "2016-04-22T05:39:57Z"
            },
            "gateway": {
              "provider": "stripe",
              "charge_id": "ch_183rBe2eZvKYlo2ChXE3EwX6"
            },
            "amount_cents": "31600",
            "currency": "usd",
            "method": {
              "type": "credit",
              "card": {
                "type": "amex",
                "last_4": "0145",
                "expiry": {
                  "month": "05",
                  "year": "2020"
                }
              }
            }
          }
        ]
      },
      "receipt": {
        "amount": {
          "discount_cents": null,
          "subtotal_cents": 29600,
          "tax_cents": 0,
          "shipping_cents": 2000,
          "total_cents": 31600
        },
        "currency_code": "usd",
        "discount_code": null,
        "fees": {
          "gateway_cents": 946
        },
        "tax": {
          "combined_rate": 0.0885,
          "tax_id": "tax-code-name",
        }
      },
      "refunds": {
        "entries": [],
        "amount_refunded": {
          "shipping_cents": 0,
          "subtotal_cents": 0,
          "tax_cents": 0,
          "total_cents": 0
        },
        "fees_refunded": {
          "gateway_cents": 0
        },
        "is_refunded": false,
        "type": null
      },
      "shipments": [
        {
          status: 'delivered'
        }
      ]
    }
  ]
};
