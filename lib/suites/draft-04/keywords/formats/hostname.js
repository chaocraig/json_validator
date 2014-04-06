// ******************************************************************
// Format keyword
// ******************************************************************

var Errors = require('../../../../errors.js')
  , core = require('../../core.js')
  ;


  
var hostname = new RegExp(
    '^' +
    '[A-Za-z0-9]' +         // must start with a letter or digit
    '(?:' +
      '[A-Za-z0-9-]*' +     // optional letters/digits/hypens
      '[A-Za-z0-9]' +       // must not end with a hyphen
    ')?' +
    '(?:' +
      '\\.' +
      '[A-Za-z0-9]' +       // must start with a letter or digit
      '(?:' +
        '[A-Za-z0-9-]*' +   // optional letters/digits/hypens
        '[A-Za-z0-9]' +     // must not end with a hyphen
      ')?' +
    ')*' +
    '$'
  );



module.exports = function(config) {
  var errors = [];

  var valid = config.inst.match(hostname);
  if (valid) {
    // per RFC 1035 “Preferred name syntax” each label must be no
    // more than 63 characters.
    var labels = config.inst.split('.');
    for (var index = 0, len = labels.length; valid && index !== len; ++index) {
      if (labels[index].length > 63) { valid = false; }
    }
  }

  if (!valid) {
    var desc = 'not a valid hostname per RFC 1034 Preferred Name Syntax';
    //errors.push(new Errors.FormatValidationError(config.resolutionScope,
     // config.instanceContext, 'format', 'hostname', config.inst, desc));

    
      var code=core.getErrorCode('hostname', config.schema.format);
      var path =  core.getPropertyPath(config.instanceContext);

      errors.push(new Errors.FormatValidationError(config.resolutionScope,
              config.instanceContext, 'format', 'hostname', config.inst,
              desc, code,
              code + ', constraint-> format:hostname, tested-> '
                  +   config.inst_key + ': ' + config.inst + '\npath: ' + path ,
              path
        ));


  }

  return errors;
};
