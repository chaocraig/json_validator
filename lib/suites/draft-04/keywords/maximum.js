// ******************************************************************
// § 5.1. Validation keywords for numeric instances
// ******************************************************************


var core = require('../core.js');


var Errors = require('../../../errors.js');

module.exports = function(config) {
  var errors = [];
  if (config.inst > config.schema.maximum) {
    //errors.push(new Errors.NumericValidationError(config.resolutionScope,
     // config.instanceContext, 'maximum', config.schema.maximum, config.inst));
         
    var code=core.getErrorCode('maximum', config.schema.type);
    var path =  core.getPropertyPath(config.instanceContext);

    errors.push(new Errors.ValidationError(config.resolutionScope,
              config.instanceContext, 'maximum', config.schema.maximum, config.inst,
              'maximum erroe!', code,
              code+': constraint-> ' + 'maximum' + ':' + config.schema.type + ', tested-> '+  config.inst_key 
                       +  config.inst_key + ': ' + config.inst + '\npath: ' + path ,
              path
        ));

  }
  return errors;
};
