'use strict';

/* App
..............................*/
require('dotenv').load();

const express   = require('express');
const http      = require('http');
const parser    = require('body-parser');
const app       = express();

app.set('port', process.env.PORT);
app.use(express.static('public'));
app.use(parser.json());

app.get('*', function(request, response) {
  response.sendFile(__dirname + '/layout.html');
});

const server = http.createServer(app);
server.listen(app.get('port'), function() {
  process.stdout.write('Web server listening on port ' + app.get('port'));
});
