var http = require("http");
var express = require('express');
var app = express();
var apicache = require("apicache");

var cache = apicache.middleware;

app.use(cache('5 minutes'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var ApplicationController = require('./application_controller');
app.use('', ApplicationController);
module.exports = app;
