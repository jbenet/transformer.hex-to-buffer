var Conversion = require('transformer-conversion');
var tHex = require('transformer.hex');
var tBuffer = require('transformer.buffer');
// require any other modules you may need here.

module.exports = Conversion(tHex, tBuffer, convert);

function convert(input) {
  return new Buffer(input, 'hex');
}
