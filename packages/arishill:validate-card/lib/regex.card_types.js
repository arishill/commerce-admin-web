/* ARISTOTLE VALIDATE REGEX CARDS
.................................................*/
Forms.regex.cards = {
  'default': {
    key: 'default',
    name: 'Default',
    prefix: null,
    regex: /^4[0-9]{12}(?:[0-9]{3})?$/,
    cvc: 3,
    spacing: [4,9,14],
    cap: 16,
    spaces: 3
  },
  'mastercard': {
    key: 'mc',
    name: 'MasterCard',
    prefix: /^5[1-5]/,
    regex: /^5[1-5][0-9]{14}$/,
    cvc: 3,
    spacing: [4,9,14],
    cap: 16,
    spaces: 3
  },
  'visa': {
    key: 'visa',
    name: 'Visa',
    prefix: /^4/,
    regex: /^4[0-9]{12}(?:[0-9]{3})?$/,
    cvc: 3,
    spacing: [4,9,14],
    cap: 16,
    spaces: 3
  },
  'amex': {
    key: 'amex',
    name: 'American Express',
    prefix: /^3[47]/,
    regex: /^3[47][0-9]{13}$/,
    cvc: 4,
    spacing: [4,11],
    cap: 15,
    spaces: 2
  },
  'jcb': {
    key: 'jcb',
    name: 'JCB',
    prefix: /^35(2[89]|[3-8][0-9])/,
    regex: /(?:2131|1800|35\d{3})\d{11}/,
    cvc: 3,
    spacing: [4,9,14],
    cap: 16,
    spaces: 3
  },
  'diners': {
    key: 'dc',
    name: 'Diner\'s Club',
    prefix: /^3(?:0[0-5]|[6]|[8])/,
    regex: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    cvc: 3,
    spacing: [4,11],
    cap: 14,
    spaces: 2
  },
  'discover': {
    key: 'disc',
    name: 'Discover',
    prefix: /^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,
    regex: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
    cvc: 3,
    spacing: [4,9,14],
    cap: 16,
    spaces: 3
  }
}