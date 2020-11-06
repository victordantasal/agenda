/* eslint-disable */ 
var express = require('express')
var serveStatic = require('serve-static')

app = express()
// envoirment staging
app.set('env', 'staging')
app.use(serveStatic(__dirname + '/dist'))

var port = process.env.PORT || 5000

app.listen(port)
