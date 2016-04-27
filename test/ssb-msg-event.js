var test = require('tape')

var ssbEvent = require('../ssb-msg-event');

test('creating a new ssbEvent with correct types', function(t) {
  var newEvent = ssbEvent(
    'whiskey potluck',
    '12pm',
    'joshs house'
  )
  t.equal(newEvent.description, 'whiskey potluck')
  t.end()
})

