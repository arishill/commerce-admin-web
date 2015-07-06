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
    channel:      Meteor.settings.braintree.channel,
    environment:  Meteor.settings.braintree.environment,
    merchant_id:  Meteor.settings.braintree.merchant_id,
    public_key:   Meteor.settings.braintree.public_key,
    private_key:  Meteor.settings.braintree.private_key
  },
  // stripe
  stripe: {

  }
});