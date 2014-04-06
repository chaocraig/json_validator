//
// Validation suite for JSON objects against a JSON Schema Draft v4
// schema. Each test returns an array (possibly empty) of errors.
//

'use strict';

var core = require('./core.js')
  , Errors = require('../../errors.js')
  //, uri = require('../../uri.js')
  //, checkRequired3 = require('./keywords/required3');
  ;

// ******************************************************************
// Categories of properties we can validate.
// ******************************************************************
var PROPS_TO_VALIDATE = {
  general: ['enum', 'allOf', 'anyOf', 'oneOf', 'not'],
  array: ['items', 'additionalItems', 'maxItems', 'minItems', 'uniqueItems'],
  number: ['multipleOf', 'maximum', 'exclusiveMaximum', 'minimum',
      'exclusiveMinimum', 'divisibleBy'],
  object: ['maxProperties', 'minProperties', 'required',
      'additionalProperties', 'properties', 'patternProperties',
      'dependencies'],
  string: ['maxLength', 'minLength', 'pattern', 'format']
};


var browserBooleanTypes = [ 'true', 'false', '0', '1' ];
var arraySimpleTypes = ["string","number","integer","boolean"]; 

//check if there exists any simple type in types(array)
var hasSimpleTypes = function(types) {

   if (!types || !(types instanceof Array) ) return false;; //not union types

   for (var check in arraySimpleTypes) { //except 'object' & 'array'
        if (types.indexOf(arraySimpleTypes[check]) != -1) return true;
   }

   return false;
}
  
  
var checkAndSetBrowserType = function(schema, property, inst, key) {
    
     if (!inst || !schema ) return;
     if ( (!inst[property]) && (!inst[key]) )  return;

     //schema is just for this inst[property]/inst[key]
     var instSchema = schema;

     if (property)
         var instanceType = core.apparentType(inst[property]);
     else if (key)
         var instanceType = core.apparentType(inst[key]);

     if (instanceType == 'object' || instanceType == 'array') {
         if (inst instanceof Array) {
             if (schema.items)
                 instSchema = schema.items;
         } 
         else if ( property && typeof inst == 'object') {
              if (schema.properties ) {
                   instSchema = schema.properties[property];
              }
         }
     } else if (hasSimpleTypes( (schema.type instanceof Array) ? schema.type : [schema.type] )) {
           //this schema has union type and instance is simple type
           instSchema = schema;
     } else if (schema.type=='object') { //the leaf object
              if (schema.properties ) {
                   instSchema = schema.properties[property];
              }
     }
    //console.log(instanceType);
     if (!instSchema) return;
     if (!instSchema.hasOwnProperty('type')) return;

/*
    console.log('Calling checkAndSetBrowserType().........');
    console.log(inst);
    console.log(inst[property]);
    console.log(inst[key]);
*/
    var types = Array.isArray(instSchema.type) ? instSchema.type : [instSchema.type];
    //console.log('types...');
    //console.log(types);


    if ( instanceType != 'string' && instanceType != 'integer' ) return false;
    //give 'string' one more chance
    //console.log('instanceType is string!');

    if (types.indexOf('string') != -1) return false; // both of schema and instance 'has' string--> matched, do nothing
    //console.log('Scheman has no string!');

    if ( (types.indexOf('integer') != -1) ||  (types.indexOf('number') != -1) ) {
    	//console.log('Schema has integer/number!');

	if (inst instanceof Array)
            var num = Number(inst[key]);
	else 
            var num = Number(inst[property]);

        if (isNaN(num)) {
		//console.log('Cannot convert into number!');
		//console.log(num);
		//console.log(inst);
		return false;
	}
        //it's a number
        if (inst instanceof Array)
            inst[key] = num;
	else
            inst[property] = num;
        //console.log('SET checkAndSetBrowserType().........OK');
        //console.log(inst);

        return true;

    } else if (types.indexOf('boolean') != -1) {
        /*
true --> true, false --> false,
"true" --> true, "false" --> false,
"1" --> true, "0" --> false
any other else will still raise an error!
         * */

        var value;
        if ( inst && (typeof inst == 'object') ) {
            if (inst instanceof Array) {
               var id = key;
            } else { //object
               var id = property;
            }
            value = inst[id];
            if ( (value == 'true') || (value == '1') || (value == 1) ) {
                    inst[id] = true;
            } else if  ( (value == 'false') || (value == '0') || (value == 0) )  {
                    inst[id] = false;
            }
            return true;
        }
    }

    return false;  //nothing to do on this instance

}


var checkAndSetDefault = function(schema, property, inst, key) {

     //only work in an object
     //console.log('calling checkAndSetDefault()...');
     if (!property) return;
     var properties = schema.properties;
     if ( !properties ) return;
     if ( (!properties[property]) || (properties[property]==undefined) ) return;

     var vDefault = properties[property]['default'];
 
     if (vDefault) {
         //console.log('Before default' + property);
         //console.log( inst );
 
        if ( (!inst.hasOwnProperty([property])) || (inst[property]==undefined) || (inst[property]=='undefined') ) {
            inst[property] = vDefault;
            //console.log('After default' + property);
            //console.log( inst );
        }
     }

}


var checkAndSetPre_Func = function(schema, property, inst, key) {

     //only for an 'object' here!
     if (!property) return;
     var properties = schema.properties;
     if ( !properties ) return;
     if ( (!properties[property]) || (properties[property]==undefined) ) return;

     var vPre_Func = properties[property]['pre_func'];
 
     if (vPre_Func) {
         //console.log('Before vPre_Func');
         //console.log( items[property] );
         //console.log( inst );
        if ( (inst.hasOwnProperty([property]))  &&
                (typeof inst[property] !== undefined) ) {
            
            var value = vPre_Func(inst[property]);
            inst[property] = value; //change the value of output instance
            //delete items[property]['pre_func']; //not to do it again
            //console.log('After vPre_Func');
            //console.log( items[property] );
            //console.log( inst );
        }
     }
}



var checkRequired3 = function(schema, property, inst, key, err) {

     //only for an 'object' here!
     if (!property || !inst || !(typeof inst == 'object') ) return;
     if ( (!schema.properties) || ( schema.properties==undefined) ) return;

     var errors = [];
     var vRequired =  schema.properties[property]['required'];

     if ( vRequired && (typeof vRequired == 'boolean') ) {//v3, true or false
         /*
         console.log('vRequired');
         console.log( schema );
         console.log( items[property] );
         */

         if (!inst.hasOwnProperty(property)) {
              var code=core.getErrorCode('required', null);
              var path =  "?";

          if ( !(err.hasOwnProperty('errors')) ||  !(err.errors instanceof Array) ) return;

          err.errors = err.errors.concat(new Errors.ObjectValidationError("",
                  "", 'required',
                  vRequired, null,
                  'required error!', code,
                  code+', MISSING: ' + property
                      + ', constraint-> required: true'
                      + ', tested-> '
                      + null  + '\npath: ' + path ,
                  path
            ));

         }
     }
}



var checkAndRemoveExtraProperties = function(schema, property, inst, key) {

    
    //only work for an 'object'
    if ( !schema || !inst || (typeof inst !== 'object') ) return;
    //if ( !(typeof inst[property] == 'object') || !(inst[propertya] instanceof Array) )
    //    return;

    var keys = Object.keys(inst);
    //console.log('calling checkAndRemoveExtraProperties...');
    //console.log(inst);
    //console.log(keys);


    for (var key in keys) { //check every property in instance
        //if (!schema.hasOwnProperty(keys[key])) {
            if (schema.properties) {
                if (!schema.properties.hasOwnProperty(keys[key]))
                    delete inst[keys[key]] ;
            } 
        //}
    }
    //console.log(inst);
}


var getProperties = function(schema) {

     if (schema.properties) return schema.properties;
     else if (schema.properties) return schema.items;
     else return null;
}

var checkAndSetPreprocessor = function(schema, inst, func, err) {

    if (!schema) return;

    var items = [];
    var instSchema = schema;
    var key=null, property=null; 

    //enter next level
    if (!schema.properties) {
       if ( schema.items ) { //array, has to check each element
          items = schema.items;

          if ( !inst || !(inst instanceof Array) ) return;
          for (var key in inst) {
              instSchema = items;
              if (items.properties) { //object
                  checkEachProperty(func, instSchema, inst[key], err);
              } else if (items.items) {
                  //it's an array again, nothing to do but enter next level recursively
                   checkAndSetPreprocessor(items, inst[key], func, err);
              } else { //leaf node of an array
                   if (func != checkAndSetBrowserType) return; //here, only this function can work
                   func(schema.items, property, inst, key, err);
              }
          } 
       } else { // no properties & no items, no way to change its value
               return;
       }
    } 
    if (schema.properties) {
         checkEachProperty(func, instSchema, inst, err);
    } 
    
}


var checkEachProperty = function(func, schema, inst, err) {


    if ( !schema || !inst || (typeof inst != 'object')) return;

    var key = null;
    var properties = schema.properties; //only check 'object' type
    if (!properties) return;

    //only for checkAndRemoveExtraProperties()
    if (func == checkAndRemoveExtraProperties) {
    	if (schema.hasOwnProperty('additionalProperties'))
    		if (schema.additionalProperties==false)
    			func(schema, null, inst, null, err);
    }

    for (var property in properties) {

             if (inst.hasOwnProperty(property) ) {
                 if ( (properties[property].properties) || (properties[property].items) ) {//next level
                     //check each attribute recursively
                     if ( (typeof inst[property] == 'object') || (inst[property] instanceof Array) ) //has next level
                         checkAndSetPreprocessor(properties[property], inst[property], func, err); //recursively check
                     else {
                         if (func != checkAndSetBrowserType) continue; //here, only this function can work
                         func(properties[property], property, inst, key, err);
                     }
                 }
                 else 
                  func(schema, property, inst, key, err);
             }
             else { //the property of next level will has 'required(v3)? or checkAndRemoveExtraProperties()?
                    if (func == checkAndRemoveExtraProperties) continue;
            	    if ( (func != checkRequired3) &&  (func != checkAndSetDefault) ) continue; 
                    func(schema, property, inst, key, err);
             } 
    }

}


// ******************************************************************
// Return a set of tests to apply to the instance.
// ******************************************************************
function getApplicableTests(config) {
  var result = [];
  var len, i, key;


  // general tests that apply to all types
  for (i = 0, len = PROPS_TO_VALIDATE.general.length; i !== len; ++i) {
    key = PROPS_TO_VALIDATE.general[i];


    if (config.schema.hasOwnProperty(key)) { result.push(key); }
  }

  // type-specific tests
  var apparentType = core.apparentType(config.inst);
  if (apparentType === 'integer') { apparentType = 'number'; }

  var props = PROPS_TO_VALIDATE[apparentType] || [];

  
  for (i = 0, len = props.length; i !== len; ++i)
  {
    key = props[i];

    if (config.schema.hasOwnProperty(key)) { 
        result.push(key);

    }
  }

   //if (config.schema.hasOwnProperty('required')) { result.push('required'); }

  // for objects, the properties, patternProperties, and
  // additionalProperties validations are inseperable
  if (result.indexOf('properties') !== -1 ||
      result.indexOf('patternProperties') !== -1 ||
      result.indexOf('additionalProperties') !== -1)
  {
    result.push('_propertiesImpl');
  }

  return result;
}

// ******************************************************************
// Run all applicable tests.
//
// config values:
//
//   inst: instance to validate
//   schema: schema to validate against
//   resolutionScope: resolutionScope,
//   instanceContext: current position within the overall instance
//   schemaRegistry: a SchemaRegistry
//
// ******************************************************************
function run(config, modifiedPreprocessor)
{
  var errors = [];
  var desc;

  var maxRefDepth = 10;   // avoid infinite loops
  var depth = 0;

  while (depth < maxRefDepth &&
         config.schema &&
         config.schema.hasOwnProperty('$ref'))
  {
    var ref = "#"; //uri.resolve(config.resolutionScope,
      //decodeURI(config.schema.$ref)); 
    if (config.schemaRegistry)
        config.schema = config.schemaRegistry.get(ref);

    if (!config.schema) {
      desc = 'schema not available: ' + ref;
      errors.push(new Errors.ValidationError(null, null, null, null, null,
        desc));
      return errors;
    }

    if (!config.inst) {
      desc = 'instance not available: ' + ref;
      errors.push(new Errors.ValidationError(null, null, null, null, null,
        desc));
      return errors;
    }

    config.resolutionScope = ref;
    depth++;

    if (depth >= maxRefDepth) {
      desc = 'maximum nested $ref depth of ' + maxRefDepth + ' exceeded; ' +
        'possible $ref loop';
      errors.push(new Errors.ValidationError(null, config.instanceContext,
        '$ref', null, null, desc));
      return errors;
    }
  }

  // empty schema - bail early
  if (Object.keys(config.schema).length === 0) { return errors; }


  //set the default value if it is not set
  if (!modifiedPreprocessor.isChecked) {
      //clone instance first
      //var out = (JSON.parse(JSON.stringify(config.inst)));
      var out = config.inst;

      //console.log('Start preprocessor!');

      checkAndSetPreprocessor(config.schema, out, checkAndSetDefault);
      checkAndSetPreprocessor(config.schema, out, checkAndSetPre_Func);
      checkAndSetPreprocessor(config.schema, out, checkAndSetBrowserType);

      //checkRequired3() must be after checkAndSetDefault()
      var err={};  err.errors = errors;
      checkAndSetPreprocessor(config.schema, out, checkRequired3, err);
      if (err.errors.length > 0) errors = err.errors;

      
      //console.log('modifiedPreprocessor.extra_properties = ' + modifiedPreprocessor.extra_properties);
      if (modifiedPreprocessor.remove_extra_properties) {
    	  
          checkAndSetPreprocessor(config.schema, out, checkAndRemoveExtraProperties);
      }
 
      //console.log('After checkAndSetPreprocessor()..........');
      //console.log(config.inst);
      //console.log(JSON.stringify(config.schema));

      modifiedPreprocessor.isChecked = true; //check only once globally
  }



  // validate the type: if it isn't valid we can bail early
  errors = errors.concat(require('./keywords/type.js')(config));
  if (errors.length) { return errors; }

  // test all applicable schema properties
  //
  //console.log('getApplicableTests...');
  var props = getApplicableTests(config);

  //console.log(props);

  for (var index = 0; index < props.length; ++index) {
    var prop = props[index];

    //console.log("index.js: calling " + prop + ".js !!");

    var fn = require('./keywords/' + prop + '.js');
    errors = errors.concat(fn(config, modifiedPreprocessor));
    //console.log("ERRORS=");
    //console.log(errors);
  }
  return errors;
}

module.exports = run;
