const debugInspect = require('../');
const debug = require('debug')('debug-inspect');

debugInspect('debug-inspect')({ a: { b: { c: { d: { e: { greetings: 'Hello from e'}}}}}});
debugInspect(debug)({ a: { b: { c: { d: { e: { greetings: 'Hello from e'}}}}}});