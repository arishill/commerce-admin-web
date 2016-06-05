'use strict';

/* App
..............................*/
require('dotenv').load();

const express     = require('express');
const http        = require('http');
const parser      = require('body-parser');
const handlebars  = require('handlebars');
const fs          = require('fs');
const app         = express();
const subscribe   = require('./subscribe');

app.set('port', process.env.PORT);
app.use(express.static('public'));
app.use(parser.json());

app.post('/subscribe', function(request, response) {
  subscribe(request, response);
});

app.get('*', function(request, response) {
  let data = {
    API: {
      url: process.env.API_URL,
      key: process.env.API_KEY
    },
    GOOGLE_API_KEY: process.env.GOOGLE_PUBLIC_API_KEY
  };

  fs.readFile(__dirname + '/layout.html', 'utf8', function(err, source){
    if (err) {
      return console.log(err);
    }
    response.send(handlebars.compile(source)(data));
  });
});

const server = http.createServer(app);
server.listen(app.get('port'), function() {
  process.stdout.write('Web server listening on port ' + app.get('port'));
});
