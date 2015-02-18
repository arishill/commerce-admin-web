Uploader.config({
  pem: Assets.getText('gcloud.pem'),
  email: Meteor.settings.gcloud.email,
  bucket: Meteor.settings.gcloud.bucket
});

Transactions.setup({
  default_gateway: 'braintree',
  backup_gateway: 'stripe',
  store_card: false,
  authorize_only: true,

  // braintree
  braintree: {
    channel:      '***REMOVED***',
    environment:  'sandbox',
    merchant_id:  'kctt83ctv47tjtkd',
    public_key:   '***REMOVED***',
    private_key:  '***REMOVED***'
  },
  // stripe
  stripe: {

  }
});