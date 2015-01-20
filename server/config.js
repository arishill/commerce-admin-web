Uploader.config({
  pem: Assets.getText('gcloud.pem'),
  email: Meteor.settings.gcloud.email,
  bucket: Meteor.settings.gcloud.bucket
});