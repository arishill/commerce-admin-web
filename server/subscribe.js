'use strict';

require('dotenv').load();

const mcapi       = require('mailchimp-api');
const mc          = new mcapi.Mailchimp(process.env.MAILCHIMP_API_KEY);

const Subscribe = function(request, response) {
  mc.lists.subscribe({
    id: process.env.MAILCHIMP_LIST,
    email:{
      email: request.body.email
    }
  }, function() {
    response.send({
      code: 200,
      message: 'success'
    });
  }, function(error) {
    if (error.error) {
      response.send({
        code: 214,
        message: 'already_subscribed'
      });
    } else {
      response.send({
        code: 500,
        message: 'error'
      });
    }
  });
};

module.exports = Subscribe;
