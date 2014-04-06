//
// JaySchema (draft v4) validator for Node.js.
//

'use strict';

var Errors = require('./errors.js')
  //, crypto = require('crypto')
  //, SchemaRegistry = require('./schemaRegistry.js')

  , core = require('./suites/draft-04/core.js')
  ;


var DEFAULT_SCHEMA_VERSION = 'http://json-schema.org/draft-04/schema#';
var ANON_URI_SCHEME = 'anon-schema';

var testRunners = {
  'http://json-schema.org/draft-04/schema#': require('./suites/draft-04')
};

// ******************************************************************
// Constructor
// ******************************************************************
var JaySchema = function(loader) {
  // public
  this.maxRecursion = 5;
  this.loader = (typeof loader === 'function') ? loader : null;

  // internal
  //this._schemaRegistry = new SchemaRegistry();
  this._refsRequested = [];
};

// ******************************************************************
// The main validation guts (internal implementation).
// ******************************************************************
JaySchema.prototype._validateImpl = function(instance, schema, resolutionScope,
  instanceContext, modifiedPreprocessor)
{


   resolutionScope = '#';

  // no schema passed
  if (!schema) { return [];}

  // run the tests
  var config = {
    inst: instance,
    schema: schema,
    resolutionScope: resolutionScope,
    instanceContext: instanceContext || '#',
    schemaRegistry: null  //this._schemaRegistry
  };

  var testRunner = testRunners[schema.$schema || DEFAULT_SCHEMA_VERSION];
  return testRunner(config, modifiedPreprocessor);
};

// ******************************************************************
// The main validation function (public API). Our raison d'être.
// ******************************************************************
//JaySchema.prototype.validateOri = function(modifiedPreprocessor, instance, schema, callback)
JaySchema.prototype.validateOri = function(modifiedPreprocessor, instance, schema)
{
  // for schemas that have no id, use an internal anonymous id

    var errs = [];
    //this.modifiedPreprocessor.isModified = false;
    modifiedPreprocessor.isChecked  = false;
    //console.log('Start validation');
    if (console.debug) {
        console.debug('Before validation---------------------------------------------------');
        console.debug(JSON.stringify(instance));
    } else {
        console.log('Before validation---------------------------------------------------');
        console.log(JSON.stringify(instance));
    }

    errs = errs.concat(this._validateImpl(instance, schema, null, null, modifiedPreprocessor));

      //for being compatable with existing module
   var ret = {};

    if (console.debug) {
        console.debug('After validation.................');
        console.debug(JSON.stringify(instance));
    } else {
        console.log('After validation.................');
        console.log(JSON.stringify(instance));
    }
       ret.out = instance;
   ret.errors = errs;
   //console.log('final errors');
   //console.log(errs);

   return ret;
};


// ******************************************************************
// The main validation function (public API). Our raison d'être.
// ******************************************************************
JaySchema.prototype.validate = function(instance, schema, options)
{

    var modifiedPreprocessor = new core.modifiedPreprocessor();

    if (options != null) {
        if ( typeof options == 'boolean' ) {
            modifiedPreprocessor.remove_extra_properties = options;
        }
        else if (typeof options.remove_extra_properties == 'boolean') {
            modifiedPreprocessor.remove_extra_properties = options.remove_extra_properties;
        }
    }
    
    return( this.validateOri(modifiedPreprocessor, instance, schema) );
};



JaySchema.prototype.codes = function()
{

    var out = {};
    var key1,  key2;
    var code1='0';

    var keys1 = Object.keys(core.codeConstraint);
    for (key1 in keys1) {
        var constraintName = keys1[key1];
        code1 = core.codeConstraint[constraintName].code;
        var code2='00', constraintValue = '';

        if (core.codeConstraint[constraintName].value) {
            var keys2 = Object.keys(core.codeConstraint[constraintName].value);

            for (key2 in keys2) {
                var constraintValue = keys2[key2];
                code2 = core.codeConstraint[constraintName].value[constraintValue];

                var out2 = {};
                var msg = 'Constraint name: '+constraintName + ', Constraint value: '+ constraintValue 
                      + ' has not beed fulfilled.';
                out2['message'] = out2['description'] = msg;
                out[code1+code2] = out2;
            }
        }
        else {
                var out2 = {};
                var msg = 'Constraint name: ' + constraintName + ' has not beed fulfilled.';
                out2['message'] = out2['description'] = msg;
                out[code1+code2] = out2;
        }

    }

    return out;

};


JaySchema.prototype.codes.get_code = function(constraintName, constranitValue) {


    return ( core.getErrorCode(constraintName, constranitValue) );

};

module.exports = JaySchema;
