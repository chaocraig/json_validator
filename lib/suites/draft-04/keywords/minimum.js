// ******************************************************************
// § 5.1. Validation keywords for numeric instances
// ******************************************************************


var core = require('../core.js');


var Errors = require('../../../errors.js');

module.exports = function(config) {
  var errors = [];
  if (config.inst < config.schema.minimum) {
    //errors.push(new Errors.NumericValidationError(config.resolutionScope,
      //config.instanceContext, 'minimum', config.schema.minimum, config.inst));

            
    var code=core.getErrorCode('minimum', config.schema.type);
    var path =  core.getPropertyPath(config.instanceContext);

    errors.push(new Errors.ValidationError(config.resolutionScope,
              config.instanceContext, 'minimum', config.schema.minimum, config.inst,
              'minimum erroe!', code,
              core.getErrorCode('minimum', config.schema.type),
              'constraint-> ' + 'minimum' + ':' + config.schema.type + ', tested-> '
              +  config.inst_key + ': ' + config.inst  + '\npath: ' + path ,
              path
        ));


  }
  return errors;
};

