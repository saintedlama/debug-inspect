'use strict';

const debug = require('debug');
const util = require('util');

module.exports = function(namespace) {
  const log = buildLog(namespace);

  return function(obj, options) {
    options = options || {};
    options.depth = options.depth || 10;

    if (log.enabled) {
      log(util.inspect(obj, { depth: 10 }));
    }
  }
}

function buildLog(namespace) {
  if (typeof namespace == 'function') {
    return namespace;
  } else {
    return debug(namespace);
  }
}

