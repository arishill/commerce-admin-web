Imgix  = Npm.require('imgix-core-js');
var client = new Imgix(Meteor.settings.imgix.name + '.imgix.net', Meteor.settings.imgix.token);
var url = client.path("https://2d9b70c535fc172aa4cd-a27708413334a08f9872f13f334ef644.ssl.cf1.rackcdn.com/site.summer-2015.jpg").toUrl({ w: 400, h: 300 }).toString();
console.log(url);