
// ******************************************************************
// Equality as defined in the JSON Schema spec.
// ******************************************************************
function jsonEqual(x, y) {
  var index, len;

  if (Array.isArray(x)) {
    if (!Array.isArray(y)) { return false; }
    if (x.length !== y.length) { return false; }
    for (index = 0, len = x.length; index !== len; ++index) {
      if (!jsonEqual(x[index], y[index])) { return false; }
    }
    return true;
  }

  if (typeof x === 'object' && x !== null) {
    if (typeof y !== 'object' || y === null) { return false; }
    var xkeys = Object.keys(x);
    if (xkeys.length !== Object.keys(y).length) { return false; }
    for (index = 0, len = xkeys.length; index !== len; ++index) {
      var key = xkeys[index];
      if (!y.hasOwnProperty(key) || !jsonEqual(x[key], y[key])) {
        return false;
      }
    }
    return true;
  }

  return x === y;   // scalar value (boolean, string, number)
}
exports.jsonEqual = jsonEqual;

// ******************************************************************
// Given an instance value, get its apparent primitive type.
// ******************************************************************
function apparentType(val) {
  switch (typeof val) {
    case 'boolean':
    case 'string':
      return typeof val;

    case 'number':
      if (val % 1 === 0) { return 'integer'; }
      return 'number';

    default:
      if (val === null) { return 'null'; }
      if (Array.isArray(val)) { return 'array'; }
      return 'object';
  }
}
exports.apparentType = apparentType;

// ******************************************************************
// Helper function to get the value of a schema property.
// ******************************************************************
function getSchemaProperty(schema, propName, defaultValue) {
  if (schema.hasOwnProperty(propName)) {
    return schema[propName];
  } else {
    return defaultValue;
  }
}
exports.getSchemaProperty = getSchemaProperty;

//Added by Cray
//Managing the default values which have to be modified and returned
function modifiedPreprocessor() {
    this.remove_extra_properties = true; //false will remove the extra properties from the input data.
    this.isChecked = false;
    this.isModified = false;
    this.out = {};
};
exports.modifiedPreprocessor = modifiedPreprocessor;


// ******************************************************************
// Get an error number by its constrant's name and value 
// ******************************************************************

var codeConstraint = {
    type: {
          code : '0',
          value: {
              'integer':10,
              'number' :11,
              'string' :12,
              'boolean':13,
              'object' :14,
              'array'  :15
          } 
    },
    format: {
           code : '1',
           value: {
            //simple format
              'email'    :10,
              'ipv4'     :11,
              'uri'      :12,
              'time'     :13,
              'ISO-639'  :14,
              'ISO-4271' :15,
              'ISO-3166' :16,
              'url'      :17,
              'number'   :18,
              'alphanumeric':19,
              'numeric'  :20,
              'alpha'    :21,
              'mongodbid':22,
              //complex format
              'date-time':70,
              'hostname' :71,
              'ipv6'     :72,
              'regex_i'  :73
           }
    },
    maximum: {
           code : '2'
    },
    minimum: {
           code : '3'
    },
    divisibleBy: {
           code : '4'
    },
    required: {
           code : '5'
    },
    additionalProperties: {
           code : '6'
    }
}
exports.codeConstraint = codeConstraint;


function getErrorCode(constraintName, constraintValue) {

    var code = '0';
    for (var name in codeConstraint) {
        if (name == constraintName) {
            code = codeConstraint[name].code;
            if (codeConstraint[name].value) { //has a code of value
                if (codeConstraint[name].value[constraintValue]) {
                    return( code + codeConstraint[name].value[constraintValue] );
                } 
            }
        }

    }
    return code + '00';
}
exports.getErrorCode = getErrorCode;

function getPropertyPath(instanceContext) {
    //var head = resolutionScope.indexOf('#');
    var head = instanceContext.indexOf('#');
    if (head != -1) {

        var path = instanceContext.substr(head+2, instanceContext.length - head );
        return ( path.replace(/\//g,'.') );
    }
    return '/';
}
exports.getPropertyPath = getPropertyPath;

// ******************************************************************
// RegExps for use with the format keyword.
// ******************************************************************
exports.FORMAT_REGEXPS = {

  email: new RegExp(
    '^' +
    '[A-Za-z0-9!#$%&\'*+=/?^_`{|}~-]+' +
      '(?:\\.[A-Za-z0-9!#$%&\'*+=/?^_`{|}~-]+)*' + // dot-atom
    '@' +
    '(' +
      '[A-Za-z0-9]' +         // must start with a letter or digit
      '(?:' +
        '[A-Za-z0-9-]*' +     // optional letters/digits/hypens
        '[A-Za-z0-9]' +       // must not end with a hyphen
      ')?' +
      '(?:' +
        '\\.' +
        '[A-Za-z0-9]' +       // must start with a letter or digit
        '(?:' +
          '[A-Za-z0-9-]*' +   // optional letters/digits/hypens
          '[A-Za-z0-9]' +     // must not end with a hyphen
        ')?' +
      ')*' +
    ')' +
    '$'
  ),

  ipv4: new RegExp(
    '^' +
    '(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[0-9]{1,2})' +
    '(?:' +
      '\\.' +
      '(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[0-9]{1,2})' +
    '){3}' +
    '$'
  ),
  uri: new RegExp(
    '^' +
    '([A-Za-z][A-Za-z0-9+.-]*:/{0,3})?' +          // scheme
    '[A-Za-z0-9\\[\\]._~%!$&\'()*+,;=:@/-]*' +  // hier-part
    '(' +
      '[?][A-Za-z0-9._~%!$&\'()*+,;=:@/?-]*' +  // query
    ')?' +
    '(' +
      '#[A-Za-z0-9._~%!$&\'()*+,;=:@/?-]*' +    // fragment
    ')?' +
    '$'
  ),

  mongodbid: new RegExp(
		/^[a-f0-9]{24}$/
        /*
		"pattern" : /^[a-f0-9]{24}$/,
		"errorMsg" : "Not a well-formated MongoDB ID"
        */
  ),

  time: new RegExp(
		/^[0-2]\d:[0-5]\d:[0-5]\d\.\d{3}$/
        /*
        "pattern" : /^[0-2]\d:[0-5]\d:[0-5]\d\.\d{3}$/,
		"errorMsg" : "Not a well-formated Time (00:00:00.000)"
        */
  ),

  url: new RegExp(
        /[-a-zA-Z0-9@:%_\+.~#?&\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/ =]*)?/gi
        /*
       	"pattern" : /[-a-zA-Z0-9@:%_\+.~#?&\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/ =]*)?/gi,
		"errorMsg" : "Not well-formated URL"
        */
  ),

  number: new RegExp(
        /^[-]?[0-9]+(\.[0-9]+)?([eE][+-]?[0-9]+)?$/
        /*
        "pattern" : /^[-]?[0-9]+(\.[0-9]+)?([eE][+-]?[0-9]+)?$/, // both integer and float
		"errorMsg" : "Not well-formated numbers"
        */
  ),

  alphanumeric: new RegExp(
        /^[0-9a-zA-Z]*$/
        /*
       	"pattern" : /^[0-9a-zA-Z]*$/,
		"errorMsg" : "Not an alphanumeric string"
        */
  ),

  numeric: new RegExp(
        /^[0-9]*$/
        /*
	    "pattern" : /^[0-9]*$/,
	    "errorMsg" : "Not a numeric string"
        */
  ),

  alpha: new RegExp(
        /^[a-zA-Z]*$/
        /*
        "pattern" : /^[a-zA-Z]*$/,
	    "errorMsg" : "Not an alpha string"
        */

  )

};
