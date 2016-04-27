var test = require('tape')
var pull = require('pull-stream')
var ssbClient = require('ssb-client')
var ssbKeys = require('ssb-keys')


var piet = ssbKeys.generate()
var katie  = ssbKeys.generate()

var pietDb = ssbClient(null, {temp: 'teste', keys: piet}, function(err, sbot) {
 console.log(err, sbot) 
 sbot.close()
})
