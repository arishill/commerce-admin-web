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
    channel:      'miners',
    environment:  'sandbox',
    merchant_id:  '***REMOVED***',
    public_key:   's2krxzh6shf67m46',
    private_key:  'b784752b1c101fdf96984eda80ef8dbd'
  },
  // stripe
  stripe: {

  }
});