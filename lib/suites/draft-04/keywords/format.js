// ******************************************************************
// § 5.5. Validation keywords for any instance type
// ******************************************************************
// modified by Cray

/*
var SUPPORTED_SIMPLE_FORMATS = {
  'date-time': require('./formats/date-time.js'),
  'email': require('./formats/email.js'),
  'hostname': require('./formats/hostname.js'),
  'ipv4': require('./formats/ipv4.js'),
  'uri': require('./formats/uri.js'),
  'date-time': require('./formats/date-time.js'),
  'time': require('./formats/time.js'),
  'ISO-639': require('./formats/ISO-639.js'),
  'ISO-4271': require('./formats/ISO-4271.js'),
  'ISO-3166': require('./formats/ISO-3166.js'),
  'url': require('./formats/url.js'),
  'number': require('./formats/number.js'),
  'alphanumeric': require('./formats/alphanumeric.js'),
  'numeric': require('./formats/numeric.js'),
  'alpha': require('./formats/alpha.js'),
  'mongodbid': require('./formats/mongodbid.js')
};
*/
var core = require('../core.js');
var simple_format = require('./formats/simple_format.js');

/*
var SUPPORTED_SIMPLE_FORMATS = [
  'email', 'ipv4', 'uri', 'time',
  'ISO-639', 'ISO-4271', 'ISO-3166', 'url', 'number', 'alphanumeric',
  'numeric', 'alpha', 'mongodbid'
];
*/

var SUPPORTED_COMPLEX_FORMATS = {
  'date-time': require('./formats/date-time.js'),
  'hostname': require('./formats/hostname.js'),
  'ipv6': require('./formats/ipv6.js'),
  'regex_i': require('./formats/regex_i.js'),
};

module.exports = function(config, modifiedPreprocessor) {
  var errors = [];

  //console.log('format.js is called');

  var simple_keys = Object.keys(core.FORMAT_REGEXPS);
  if (simple_keys.indexOf(config.schema.format)!==-1) {
    errors = errors.concat(simple_format(config, config.schema.format, modifiedPreprocessor));
  }
  else if (SUPPORTED_COMPLEX_FORMATS.hasOwnProperty(config.schema.format)) {
    errors = errors.concat(SUPPORTED_COMPLEX_FORMATS[config.schema.format](config, modifiedPreprocessor));
  }

  return errors;
};
