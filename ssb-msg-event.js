var t = require('tcomb');

var eventEnum = t.enums({type: 'event'})

eventType = t.struct({
  type: eventEnum,
  description: t.String,
  time: t.String,
  location: t.String
}, 'Event')

module.exports = function SsbMsgEvent(description, time, location){
 return eventType({type: eventEnum('type'), description: description, time: time, location: location}) 
}
