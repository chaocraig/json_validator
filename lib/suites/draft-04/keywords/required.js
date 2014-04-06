// ******************************************************************
// § 5.4. Validation keywords for objects
// ******************************************************************

var Errors = require('../../../errors.js');
var core = require('../core.js');


module.exports = function(config) {
  var errors = [];

  //console.log('required.js is calling');
  //console.log(config.schema.required);
  //console.log(config);

  var missing = [];

  if ( (typeof config.inst === 'object') && (config.schema.required instanceof Array) ) {
      var len = config.schema.required.length;
      if (len > 0) {
          for (var i = 0; i < len; ++i) {
              var prop = config.schema.required[i];
              if (!config.inst.hasOwnProperty(prop)) { missing.push(prop); }
          }
      }
  }

  //console.log('missing...');
  //console.log(missing);
  //console.log(missing.length);

  if (missing.length>0) {
       var code=core.getErrorCode('required', null);
       var path =  core.getPropertyPath(config.instanceContext);

       errors.push(new Errors.ObjectValidationError(config.resolutionScope,
              config.instanceContext, 'required', 
              config.schema.required, config.inst,
              'required error!', code,
              code+', MISSING: ' + JSON.stringify(missing || {}) 
                  + ', constraint-> required:'  
                  + JSON.stringify(config.schema.required || {}) + ', tested-> '
                  + JSON.stringify(config.inst || {})  + '\npath: ' + path ,
              path
        ));
  }

  return errors;
};
