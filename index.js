var transformer = require('dat-transformer');
var tHex = transformer('hex');
var tBuffer = transformer('buffer');
// require any other modules you may need here.

module.exports = transformer.Conversion(tHex, tBuffer, convert);

function convert(input) {
  return new Buffer(input, 'hex');
}
