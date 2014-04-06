// ******************************************************************
// Format keyword
// ******************************************************************

var Errors = require('../../../../errors.js')
  , core = require('../../core.js')
  ;

module.exports = function(config, format_keyword, modifiedPreprocessor) {
  var errors = [];
  var valid = config.inst.match(core.FORMAT_REGEXPS[format_keyword]);

  //console.log('email.js is called...');

  if (!valid) {
      var desc = 'not a well-formated ' + format_keyword; 
      //errors.push(new Errors.FormatValidationError(config.resolutionScope,
            //config.instanceContext, 'format', format_keyword, config.inst, desc));
          
      var code=core.getErrorCode('format', format_keyword);
      var path =  core.getPropertyPath(config.instanceContext);

      errors.push(new Errors.FormatValidationError(config.resolutionScope,
              config.instanceContext, 'format', format_keyword, config.inst,
              desc, code,
              code + ', constraint-> ' + 'format' + ':' + format_keyword + ', tested-> '
                   +  config.inst_key + ': ' + config.inst + '(' + (typeof config.inst) + ')\npath: ' + path ,
              path
        ));

  }
  return errors;
};
