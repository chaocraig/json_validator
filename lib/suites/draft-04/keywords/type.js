// ******************************************************************
// § 5.5. Validation keywords for any instance type
// ******************************************************************

var Errors = require('../../../errors.js')
  , core = require('../core.js')
  //, checkAndSetDefault = require('./default.js');
  ;



module.exports = function(config) {
  var errors = [];

  //console.log('Calling type().......');
  if (!config.schema.hasOwnProperty('type')) { return errors; }

  var types = Array.isArray(config.schema.type) ? config.schema.type :
    [config.schema.type];
  var instanceType = core.apparentType(config.inst);

  config.instanceType = instanceType;
      
  //console.log(instanceType);
  //console.log(config.inst);
  //config.useDefault = checkAndSetDefault(config);

    //  0: resolutionScope,
    //  1: instanceContext
    //  2: constraintName
    //  3: constraintValue
    //  4: testedValue
    //  5: desc
    //  6: code
    //  7: message
    //  8: property_path
    //  9: output


  var isError = false;

  if (instanceType === 'integer') {
    if (types.indexOf('integer') === -1 && types.indexOf('number') === -1) {
        isError = true;
    }
  } 
    /*
    else {
    if ( instanceType == 'string' ) {
      //give 'string' one more chance

        if ( (types.indexOf('integer') != -1) ||  (types.indexOf('number') != -1) ) {

            var num = Number(config.inst);

            if (isNaN(num)) isError = true;
            //it's a number
            else isError = false;
        }
        else isError = true;
    }
    */
  else
  // boolean, string, number, null, array, object
  if (types.indexOf(instanceType) === -1) {
        isError = true;
  }


  if (isError) {
        var code=core.getErrorCode('type', config.schema.type);
        var path =  core.getPropertyPath(config.instanceContext);
        errors.push(new Errors.ValidationError(config.resolutionScope,
              config.instanceContext, 'type', config.schema.type, instanceType,
              'type error!', code,
              code + ': constraint-> type:' + config.schema.type + ', tested-> ' 
                  + instanceType + ':' + config.inst + '(' + (typeof config.inst) + '), path=' + path ,
               path
        ));
  }

  return errors;
}
