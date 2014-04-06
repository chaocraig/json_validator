//
// Error types for the JSON Schema validator.
//

'use strict';

var util = require('util'),
    core = require('./suites/draft-04/core.js')
  ;


// ******************************************************************
// Base error
// ******************************************************************

var ValidationError =
  function(resolutionScope, instanceContext, constraintName, constraintValue,
    testedValue, desc, code, message, property_path)
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
{
  Error.captureStackTrace(this, this.constructor);

  //modified by cray
  if (resolutionScope) { this.resolutionScope = resolutionScope; }
  if (instanceContext) { this.instanceContext = instanceContext; }
        else { this.instanceContext = '#/'; }
  if (constraintName) { this.property = this.constraintName = constraintName;  }
  if (constraintValue) { this.constraintValue = constraintValue; }
  if (testedValue) { this.testedValue = testedValue; }
  if (desc) { this.desc = desc;  }
  if (code) { this.code = code; }
  if (message) { this.message = message }
  if (property_path) { this.property_path = property_path; }
  //if (inst) { this.inst = inst; }

};
util.inherits(ValidationError, Error);

// ******************************************************************
// More-specific error types
// ******************************************************************

var NumericValidationError = function() {
  ValidationError.apply(this, arguments);
  this.kind = 'NumericValidationError';
};
util.inherits(NumericValidationError, ValidationError);

var StringValidationError = function() {
  ValidationError.apply(this, arguments);
  this.kind = 'StringValidationError';
};
util.inherits(StringValidationError, ValidationError);

var ArrayValidationError = function() {
  ValidationError.apply(this, arguments);
  this.kind = 'ArrayValidationError';
};
util.inherits(ArrayValidationError, ValidationError);

var ObjectValidationError = function() {
  ValidationError.apply(this, arguments);
  this.kind = 'ObjectValidationError';
};
util.inherits(ObjectValidationError, ValidationError);

var FormatValidationError = function() {
  ValidationError.apply(this, arguments);
  this.kind = 'FormatValidationError';
};

var LoaderError = function() {
  ValidationError.apply(this, arguments);
  this.kind = 'LoaderError';
};
util.inherits(ObjectValidationError, ValidationError);

var DefaultError = function() {
  ValidationError.apply(this, arguments);

  this.kind = 'DefaultError';
};
util.inherits(ObjectValidationError, ValidationError);


var SubSchemaValidationError = function() {
  ValidationError.apply(this, arguments);
  this.kind = 'SubSchemaValidationError';
  if (arguments.length > 10) {
    this.subSchemaValidationErrors = arguments[10];
  }
};
util.inherits(SubSchemaValidationError, ValidationError);


// ******************************************************************
// Exports
// ******************************************************************

exports.ValidationError = ValidationError;
exports.NumericValidationError = NumericValidationError;
exports.StringValidationError = StringValidationError;
exports.ArrayValidationError = ArrayValidationError;
exports.ObjectValidationError = ObjectValidationError;
exports.FormatValidationError = FormatValidationError;
exports.LoaderError = LoaderError;
exports.DefaultError = DefaultError;
exports.SubSchemaValidationError = SubSchemaValidationError;
