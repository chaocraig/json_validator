// ******************************************************************
// § 5.4. Validation keywords for objects
// ******************************************************************

var Errors = require('../../../errors.js')
  , core = require('../core.js')
  , testRunner = require('../index.js')
  ;



var browserBooleanTypes = [ 'true', 'false', '0', '1' ];

  


module.exports = function(config, modifiedPreprocessor) {
  var errors = [];
  var keys, key, index, subTestConfig;

  var p = core.getSchemaProperty(config.schema, 'properties', {});
  var additionalProperties = core.getSchemaProperty(config.schema,
    'additionalProperties', {});

  //console.log('_propertiesImpl.js is called');
  //console.log(config.inst);
  //console.log(p);

  // for patternProperties, compile RegExps just once
  var pp = [];
  if (config.schema.hasOwnProperty('patternProperties')) {
    keys = Object.keys(config.schema.patternProperties);
    //console.log('patternProperties!!');
    //console.log(keys);
    for (index = 0; index < keys.length; ++index) {
      key = keys[index];
      //console.log('key=' + key);
      //console.log('config.schema.patternProperties[key]=');
      //console.log(config.schema.patternProperties[key]);
      pp.push([new RegExp(key), config.schema.patternProperties[key]]);
    }
  }



  // for each property, validate against matching property schemas
  //console.log(config.inst.length);
  //if (config.inst && config.inst.length > 0) 
  if ( (config.inst) && (typeof config.inst == 'object') )
      keys = Object.keys(config.inst);

  //console.log('keys');
  //console.log(keys);
    //console.log('_propertiesImpl checking.........');
    //console.log(config.inst);

  for (var x = 0; x < keys.length; ++x) {
    var m = keys[x]; //m is key of this instance

    //console.log('@@@@@@--------->' + m);

    var context = config.instanceContext + '/' + m; 
    var applyAdditionalProperties = true;

    if (config.inst instanceof Array)
        sub_inst = config.inst[x];
    else
        sub_inst = config.inst[m];

    //console.log(sub_inst);

    if (p.hasOwnProperty(m)) {
      subTestConfig = {
        inst_key: m,
        inst: sub_inst, //only value of this instance
        schema: p[m],
        resolutionScope: config.resolutionScope + '/properties/' + m,
        instanceContext: context,
        schemaRegistry: config.schemaRegistry
      };

      //console.log('before _proper.... testRunner.....');
      errors = errors.concat(testRunner(subTestConfig, modifiedPreprocessor));

      applyAdditionalProperties = false;
    }

    for (var y = 0; y < pp.length; ++y) {
      var rx = pp[y][0];

/*
      console.log('rx=' + rx +', m=' + m);
      console.log(config.inst[m]);
      console.log(pp[y][1]);
      console.log('m.match(rx)===');
      console.log(m.match(rx));
*/
      if (m.match(rx)) {
        subTestConfig = {
          inst: config.inst[m],
          schema: pp[y][1],
          resolutionScope: config.resolutionScope + '/patternProperties/' + m,
          instanceContext: context,
          schemaRegistry: config.schemaRegistry
        };

        //console.log('XXXXXXXXXXXXXXXXXXXXXXX');
        //console.log(subTestConfig);

        errors = errors.concat(testRunner(subTestConfig, modifiedPreprocessor));
        applyAdditionalProperties = false;
      }
    }

    if (applyAdditionalProperties) {
      if (additionalProperties === false) {
          var code=core.getErrorCode('additionalProperties', false);
            var path =  core.getPropertyPath(config.instanceContext);

            var desc = 'property "' + m + '" not allowed by "properties" or by ' +
                '"patternProperties" and "additionalProperties" is false';
            errors.push(new Errors.ObjectValidationError(config.resolutionScope,
                config.instanceContext, 'additionalProperties', 'false', m, desc,
            code,
            code +', constrant-> additionalProperties:false, tested-> '+ 
                +  config.inst + '\npath: ' + path ,
            path
            ));
      } else if (additionalProperties !== true) {
        subTestConfig = {
          inst: config.inst[m],
          schema: additionalProperties,
          resolutionScope: config.resolutionScope + '/additionalProperties',
          instanceContext: context,
          schemaRegistry: config.schemaRegistry
        };
        errors = errors.concat(testRunner(subTestConfig, modifiedPreprocessor));
      }
    }
  }

  return errors;
};
