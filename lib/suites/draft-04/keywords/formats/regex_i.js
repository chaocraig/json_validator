// ******************************************************************
// Format keyword
// ******************************************************************

var Errors = require('../../../../errors.js')
  , core = require('../../core.js')
  ;

/*
 *
Schema example : {
         type : 'string',
         format : 'regex',
         optional : true,
         description : "Match a regular expression!"
     }

The 'regex' format has to convert the string input in to a javascript 
regex object :
function(input_string_regex) {
            if (input_string_regex)
                 return new RegExp(input_string_regex, "i"); //"i" is 
for case-insensitive
             else
                 return input_string_regex;
         }

 *
 */

  

module.exports = function(config, modifiedPreprocessor) {

      var errors = [];

      var code=core.getErrorCode('format', config.schema.format);
      var path =  core.getPropertyPath(config.instanceContext);
      var output = {};
      
      if (config.inst) {
           output = new RegExp(config.inst, "i"); 
      } else {
           output = config.inst;
      }

      errors.push(new Errors.FormatValidationError(config.resolutionScope,
              config.instanceContext, 'format', 'regex_i', config.inst,
              "add 'i' for case insensitive", code,
              code + ', constraint-> format:regex_i, tested-> '
                  +   config.inst_key + ': ' + config.inst + '\npath: ' + path ,
              path
        ));

  return errors;
};
