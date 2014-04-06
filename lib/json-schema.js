/**
 * JSONSchema Validator - Validates JavaScript objects using JSON Schemas (http://www.json.com/json-schema-proposal/)
 * 
 * Copyright (c) 2007 Kris Zyp SitePen (www.sitepen.com) Licensed under the MIT (MIT-LICENSE.txt) license. To use the validator call JSONSchema.validate with an
 * instance object and an optional schema object. If a schema is provided, it will be used to validate. If the instance object refers to a schema
 * (self-validating), that schema will be used to validate and the schema parameter is not necessary (if both exist, both validations will occur). The validate
 * method will return an array of validation errors. If there are no errors, then an empty list will be returned. A validation error will have two properties:
 * "property" which indicates which property had the error "message" which indicates what the error was
 */

// add code mapping table
var Codes = require('./validation_code_def');
var codes = {};
var currency_codes = require('./currency_codes');
var country_codes = require('./country_codes');
var language_codes = require('./language_codes');

// setup primitive classes to be JSON Schema types
/*
 * String.type = "string"; Boolean.type = "boolean"; Number.type = "number"; exports.Integer = {type:"integer"}; Object.type = "object"; Array.type = "array";
 * Date.type = "string"; Date.format = "date-time";
 */

// applied for type "String" only
var formats = {
	"alpha" : {
		"pattern" : /^[a-zA-Z]*$/,
		"errorMsg" : "Not an alpha string"
	},
	"numeric" : {
		"pattern" : /^[0-9]*$/,
		"errorMsg" : "Not a numeric string"
	},
	"alphanumeric" : {
		"pattern" : /^[0-9a-zA-Z]*$/,
		"errorMsg" : "Not an alphanumeric string"
	},
	"number" : {
		"pattern" : /^[-]?[0-9]+(\.[0-9]+)?([eE][+-]?[0-9]+)?$/, // both integer and float
		"errorMsg" : "Not well-formated numbers"
	},
	"email" : {
		"pattern" : /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\ ".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA -Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		"errorMsg" : "Not well-formated email address"
	},
	"url" : {
		"pattern" : /[-a-zA-Z0-9@:%_\+.~#?&\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/ =]*)?/gi,
		"errorMsg" : "Not well-formated URL"
	},
	"ISO-3166" : {
		"pattern" : /^[A-Z]{2-3}$/,
		"errorMsg" : "Not well-formated ISO-3166",
		"convert" : {
			'actions' : function(value, key) {
				if (key == 'N')
					key = 'number';
				if (typeof country_codes[value] != 'undefined' && typeof country_codes[value][key.toLowerCase()] != 'undefined')
					return country_codes[value][key.toLowerCase()];
				else
					return 'NaN';
			}
		}
	},
	"ISO-4271" : {
		"pattern" : /^[A-Z]{2-3}$/,
		"errorMsg" : "Not well-formated ISO-4217",
		"convert" : {
			'actions' : function(value, key) {
				if (key == 'N')
					key = 'number';
				if (typeof currency_codes[value] != 'undefined' && typeof currency_codes[value][key.toLowerCase()] != 'undefined')
					return currency_codes[value][key.toLowerCase()];
				else
					return 'NaN';
			}
		}
	},
	"ISO-639" : {
		"pattern" : /^[a-z]{2-3}-[A-Z]{2}$/,
		"errorMsg" : "Not well-formated ISO-639-1+'-'+iso3166",
		"convert" : {
			'actions' : function(value, key) {
				// we may want translate iso639-3 to iso639-1 + iso3166
				if (language_codes[value])
					if (key && language_codes[value][key.toLowerCase()])
						return language_codes[value][key.toLowerCase()];
					else
						return value;
				else
					return 'NaN';
			}
		}
	},
	"time" : {
		"pattern" : /^[0-2]\d:[0-5]\d:[0-5]\d\.\d{3}$/,
		"errorMsg" : "Not a well-formated Time (00:00:00.000)"
	},
	"date-time" : {
		"pattern" : /^\d{4}-(1[0-2]|0[1-9])-(0[1-9]|[1-2]\d|3[0-1])T[0-2]\d:[0-5]\d:[0-5]\d(\.\d+)?([+-][0-2]\d:[0-5]\d|Z)/,
		"errorMsg" : "Not a well-formated Date"
	},
	"mongodbid" : {
		"pattern" : /^[a-f0-9]{24}$/,
		"errorMsg" : "Not a well-formated MongoDB ID"
	}
};

exports.validate = function(/* Any */instance,/* Object */schema,/* Object */options) {
	// Summary:
	// To use the validator call JSONSchema.validate with an instance object and an optional schema object.
	// If a schema is provided, it will be used to validate. If the instance object refers to a schema (self-validating),
	// that schema will be used to validate and the schema parameter is not necessary (if both exist,
	// both validations will occur).
	// The validate method will return an object with two properties:
	// valid: A boolean indicating if the instance is valid by the schema
	// errors: An array of validation errors. If there are no errors, then an
	// empty list will be returned. A validation error will have two properties:
	// property: which indicates which property had the error
	// message: which indicates what the error was
	//

	var step_id = (typeof options != 'undefined' && typeof options.step_id != 'undefined') ? options.step_id : '';
	codes = new Codes(step_id);
	return validate(instance, schema, false, options);
};
exports.checkPropertyChange = function(/* Any */value,/* Object */schema, /* optins */property) {
	// Summary:
	// The checkPropertyChange method will check to see if an value can legally be in property with the given schema
	// This is slightly different than the validate method in that it will fail if the schema is readonly and it will
	// not check for self-validation, it is assumed that the passed in value is already internally valid.
	// The checkPropertyChange method will return the same object type as validate, see JSONSchema.validate for
	// information.
	//
	return validate(value, schema, property || "property");
};
var validate = exports._validate = function(/* Any */instance,/* Object */schema,/* Boolean */_changing,/* Object */options) {
	var step_id = (typeof options != 'undefined' && typeof options.step_id != 'undefined') ? options.step_id : '';
	var extra_properties = (typeof options != 'undefined' && options.extra_properties === false) ? false : true;
	var convert_all_types = (typeof options != 'undefined' && options.convert_all_types === false) ? false : true;

	var errors = [];
	// validate a value against a property definition

	function checkProp(value, schema, path, i) {
		var copy;
		var l;
		path += path ? typeof i == 'number' ? '[' + i + ']' : typeof i == 'undefined' ? '' : '.' + i : i;
		function addError(message, sub, key) {
			errors.push({
				code : codes.get_code(sub, key),
				property : path,
				message : message
			});
		}

		if ((typeof schema != 'object' || schema instanceof Array) && (path || typeof schema != 'function') && !(schema && schema.type)) {
			if (typeof schema == 'function') {
				if (!(value instanceof schema)) {
					addError("is not an instance of the class/constructor " + schema.name, "generals", "not an instance");
				}
			} else if (schema) {
				addError("Invalid schema/property definition " + schema, "generals", "invalid schema/property definition");
			}
			return null;
		}
		if (_changing && schema.readonly) {
			addError("is a readonly field, it can not be changed", "generals", "readonly field");
		}
		if (schema['extends']) { // if it extends another schema, it must pass that schema as well
			checkProp(value, schema['extends'], path, i);
		}
		// validate a value against a type definition
		function checkType(type, value,/* Integer */arrayTypeIndex) {
			if (type) {
				if (schema.type instanceof Array && arrayTypeIndex === (schema.type.length - 1)) {
					var showErrors = true;
					for ( var j = 0; j < schema.type.length; j++) {
						var _type = schema.type[j];
						if (!(typeof _type == 'string' && _type != 'any' && (_type == 'null' ? value !== null : typeof value != _type)
								&& !(value instanceof Array && _type == 'array') && !(_type == 'integer' && value % 1 === 0))) {
							showErrors = false;
							break;
						}
					}
					if (showErrors) {
						var join_arr = [];
						for ( var j = 0; j < schema.type.length; j++) {
							join_arr.push('"' + schema.type[j] + '"');
						}

						return [ {
							code : codes.get_code('types', 'union'),
							property : path,
							message : (typeof value) + " value found, but a " + join_arr.join(' OR ') + " are required"
						} ];
					}
				} else if (typeof type == 'string' && type != 'any' && (type == 'null' ? value !== null : typeof value != type)
						&& !(value instanceof Array && type == 'array') && !(type == 'integer' && value % 1 === 0)) {
					return [ {
						code : codes.get_code('types', type),
						property : path,
						message : (typeof value) + " value found, but a " + type + " is required"
					} ];
				}
				if (type instanceof Array) {
					var unionErrors = [];

					for ( var j = 0; j < type.length; j++) { // a union type
						if (!(unionErrors = checkType(type[j], value, j)).length) {
							break;
						}
					}
					if (unionErrors.length) {
						return unionErrors;
					}
				} else if (typeof type == 'object') {
					var priorErrors = errors;
					errors = [];
					checkProp(value, type, path);
					var theseErrors = errors;
					errors = priorErrors;
					return theseErrors;
				}
			}
			return [];
		}
		if (schema.pre_func) { // before validate
			value = schema.pre_func(value);
		}
		if ((value === undefined || value === null) && schema['default']) // set default value
			return schema['default'];
		if (value === undefined) {
			if (!schema.optional && !schema.get) {
				addError("is missing and it is not optional", "generals", "is missing and it is not optional");
			}
		} else {
			if (value !== null) {
				if (value instanceof Array && schema.items) { // array recursive
					// errors.concat(checkObj(value, schema.properties, path, schema.additionalProperties));
					if (schema.items) {
						copy = [];
						if (schema.items instanceof Array) {
							for (i = 0, l = value.length; i < l; i++) {
								// errors.concat(checkProp(value[i],schema.items[i],path,i));
								var sub_r = checkProp(value[i], schema.items[i], path, i);
								if (sub_r != undefined)
									copy[copy.length] = sub_r;
							}
						} else {
							var enums = schema.items['enum'];
							if (enums)
								var founded = false;
							for (i = 0, l = value.length; i < l; i++) {
								if (enums) {
									for ( var e_i = 0; e_i < enums.length; e_i++) {
										if (enums[e_i] == value[i]) {
											founded = true;
											break;
										}
									}
								}
								// errors.concat(checkProp(value[i],schema.items,path,i));
								var sub_r = checkProp(value[i], schema.items, path, i);
								if (sub_r != undefined)
									copy[copy.length] = sub_r;
							}
							if (founded === false)
								errors.push({
									code : codes.get_code('generals', 'does not have a value in the enumeration'),
									property : path,
									message : "Parameter must be in the enumeration : " + enums
								});
						}
					}
					if (schema.minItems && value.length < schema.minItems) {
						addError("There must be a minimum of " + schema.minItems + " in the array", "validates", "minItems");
					}
					if (schema.maxItems && value.length > schema.maxItems) {
						addError("There must be a maximum of " + schema.maxItems + " in the array", "validates", "maxItems");
					}
				} else if (typeof value == 'object' && (schema.properties || schema.additionalProperties)) { // object recursive
					copy = {};
					if (typeof schema.properties == 'object') {
						if (typeof value != 'object' || value instanceof Array) {
							errors.push({
								code : codes.get_code('generals', 'an object is required'),
								property : path,
								message : "an object is required"
							});
						}

						for ( var i in schema.properties) {
							if (schema.properties.hasOwnProperty(i) && !(i.charAt(0) == '_' && i.charAt(1) == '_')) {
								var _v = value[i];
								var propDef = schema.properties[i];
								// set default
								if (_v === undefined && propDef["default"]) {
									_v = value[i] = propDef["default"];
								}
								var sub_r = checkProp(_v, propDef, path, i);
								if (sub_r != undefined)
									copy[i] = sub_r;
							}
						}
					}
					for (i in value) {
						var _v = value[i];
						if (value.hasOwnProperty(i) && !(i.charAt(0) == '_' && i.charAt(1) == '_') && schema.properties && !schema.properties[i]
								&& schema.additionalProperties === false) {
							if (extra_properties == true) {
								var sub_r = checkProp(_v, schema.additionalProperties, path, i);
								if (sub_r != undefined)
									copy[i] = sub_r;
							} else {
								errors.push({
									code : codes.get_code('generals', 'not defined in the schema'),
									property : path,
									message : (typeof value) + " The property " + i
											+ " is not defined in the schema and the schema does not allow additional properties"
								});
							}
						}
						var requires = schema.properties && schema.properties[i] && schema.properties[i].requires;
						if (requires && !(requires in value)) {
							errors.push({
								property : path,
								message : "the presence of the property " + i + " requires that " + requires + " also be present"
							});
						}
						if (schema.additionalProperties && (!(schema.properties && typeof schema.properties == 'object') || !(i in schema.properties))) {
							copy[i] = value[i];
						}
						if (!_changing && _v && _v.$schema) {
							var sub_r = checkProp(_v, _v.$schema, path, i);
							if (sub_r != undefined)
								copy[i] = sub_r;
						}
					}
					// errors.concat(checkObj(value, schema.properties, path, schema.additionalProperties));
				} else {
					copy = value;
				}

				if (schema.type === 'object' && value instanceof Array)
					errors.push({
						code : codes.get_code('generals', 'an object is required'),
						property : path,
						message : "an object is required"
					});

				if (typeof schema.format !== 'undefined' && typeof formats[schema.format] !== 'undefined' && typeof value == 'string'
						&& !value.match(formats[schema.format].pattern)) {
					if (typeof formats[schema.format].convert === 'undefined'
							|| (step_id == 'get_Parameters' && typeof formats[schema.format].convert !== 'undefined')) // just
						// conert
						// value
						// at
						// 'get_Parameters'
						// Step
						// if
						// we
						// have
						// convert
						// property
						addError(formats[schema.format].errorMsg, "formats", schema.format);
				}
				if (schema.pattern && typeof value == 'string' && !value.match(schema.pattern)) {
					addError("does not match the regex pattern " + schema.pattern, "validates", "regex");
				}
				if (schema.maxLength && typeof value == 'string' && value.length > schema.maxLength) {
					addError("may only be " + schema.maxLength + " characters long", "validates", "maxLength");
				}
				if (schema.minLength && typeof value == 'string' && value.length < schema.minLength) {
					addError("must be at least " + schema.minLength + " characters long", "validates", "minLength");
				}
				if (typeof schema.minimum !== undefined && typeof value == typeof schema.minimum && schema.minimum > value) {
					addError("must have a minimum value of " + schema.minimum, "validates", "min");
				}
				if (typeof schema.maximum !== undefined && typeof value == typeof schema.maximum && schema.maximum < value) {
					addError("must have a maximum value of " + schema.maximum, "validates", "max");
				}
				if (schema['enum'] && typeof value == 'string') {
					var enumer = schema['enum'];
					l = enumer.length;
					var found;
					for ( var j = 0; j < l; j++) {
						if (enumer[j] === value) {
							found = 1;
							break;
						}
					}
					if (!found) {
						addError("does not have a value in the enumeration " + enumer.join(", "), "generals", "does not have a value in the enumeration");
					}
				}
				if (typeof schema.maxDecimal == 'number' && (value.toString().match(new RegExp("\\.[0-9]{" + (schema.maxDecimal + 1) + ",}")))) {
					addError("may only have " + schema.maxDecimal + " digits of decimal places", "validates", "maxDecimal");
				}

				if (typeof copy == 'string' && typeof schema.format !== 'undefined') { // convert specific type copy
					var _arr = schema.format.split('-');
					var key = _arr.pop(-1);
					var format = _arr.join('-');
					if (typeof formats[format] !== 'undefined') {
						if (typeof formats[format].convert != 'undefined') {
							copy = formats[format].convert.actions(copy, key);
						}
					}
				}
				if (typeof copy == 'string' && schema.convertType) { // convert type
					if (schema.type == 'number' && typeof copy !== 'number') {
						if (copy % 1 === 0)
							copy = parseInt(copy);
						else
							copy = parseFloat(copy);
					} else if (schema.type == 'boolean' && typeof copy !== 'boolean') {
						if (copy == 1 || copy == 'true' || copy == '1')
							copy = true;
						else
							copy = false;
					}
				}
				if (convert_all_types) { // force converting
					if (schema.type == 'integer' || schema.type == 'number'
							|| (schema.type instanceof Array && (schema.type.indexOf('number') != -1 || schema.type.indexOf('integer') != -1))) {
						if (typeof copy != 'object') {
							try {
								copy = Number(copy);
							} catch (err) {
								return undefined;
							}
						}
					} else if (schema.type == 'boolean' || (schema.type instanceof Array && schema.type.indexOf('boolean') != -1)
							&& schema.type.indexOf(typeof copy) == -1) {
						switch (typeof copy) {
						case 'string':
							copy = copy.toLowerCase();
							copy = (copy == 'true' || copy == '1') ? true : (copy == 'false' || copy == '0') ? false : undefined;
							break;
						case 'boolean':
							break;
						case 'number':
							copy = (copy > 0);
							break;
						default:
							copy = undefined;
						}
					}
				}
			}
			errors = errors.concat(checkType(schema.type, copy));
			if (schema.disallow && !checkType(schema.disallow, copy).length) {
				addError(" disallowed copy was matched", "generals", "disallowed copy was matched");
			}
		}
		if (typeof schema != 'undefined' && schema.post_func) { // after validate
			copy = schema.post_func(copy);
		}
		return copy;
	}
	// validate an object against a schema
	function checkObj(instance, objTypeDef, path, additionalProp) {

		if (typeof objTypeDef == 'object') {
			if (typeof instance != 'object' || instance instanceof Array) {
				errors.push({
					code : codes.get_code('generals', 'an object is required'),
					property : path,
					message : "an object is required"
				});
			}

			for ( var i in objTypeDef) {
				if (objTypeDef.hasOwnProperty(i) && !(i.charAt(0) == '_' && i.charAt(1) == '_')) {
					var value = instance[i];
					var propDef = objTypeDef[i];
					// set default
					if (value === undefined && propDef["default"]) {
						value = instance[i] = propDef["default"];
					}
					checkProp(value, propDef, path, i);
				}
			}
		}
		for (i in instance) {
			if (instance.hasOwnProperty(i) && !(i.charAt(0) == '_' && i.charAt(1) == '_') && objTypeDef && !objTypeDef[i] && additionalProp === false) {
				errors.push({
					property : path,
					message : (typeof value) + " The property " + i + " is not defined in the schema and the schema does not allow additional properties"
				});
			}
			var requires = objTypeDef && objTypeDef[i] && objTypeDef[i].requires;
			if (requires && !(requires in instance)) {
				errors.push({
					property : path,
					message : "the presence of the property " + i + " requires that " + requires + " also be present"
				});
			}
			value = instance[i];
			if (additionalProp && (!(objTypeDef && typeof objTypeDef == 'object') || !(i in objTypeDef))) {
				// checkProp(value,additionalProp,path,i);
			}
			if (!_changing && value && value.$schema) {
				errors = errors.concat(checkProp(value, value.$schema, path, i));
			}
		}
		return errors;
	}
	var out = instance;
	if (schema) {
		out = checkProp(out, schema, '', _changing || '');
	}
	if (!_changing && instance && instance.$schema) {
		out = checkProp(instance, instance.$schema, '', '');
	}
	return {
		out : out,
		valid : !errors.length,
		errors : errors
	};
};
exports.mustBeValid = function(result) {
	// summary:
	// This checks to ensure that the result is valid and will throw an appropriate error message if it is not
	// result: the result returned from checkPropertyChange or validate
	if (!result.valid) {
		throw new TypeError(result.errors.map(function(error) {
			return "for property " + error.property + ': ' + error.message;
		}).join(", \n"));
	}
}
/*
 * will add this later newFromSchema : function() { }
 */

exports.cacheLinks = true;
exports.getLink = function(relation, instance, schema) {
	// gets the URI of the link for the given relation based on the instance and schema
	// for example:
	// getLink(
	// "brother",
	// {"brother_id":33},
	// {links:[{rel:"brother", href:"Brother/{brother_id}"}]}) ->
	// "Brother/33"
	var links = schema.__linkTemplates;
	if (!links) {
		links = {};
		var schemaLinks = schema.links;
		if (schemaLinks && schemaLinks instanceof Array) {
			schemaLinks.forEach(function(link) {
				/*
				 * // TODO: allow for multiple same-name relations if(links[link.rel]){ if(!(links[link.rel] instanceof Array)){ links[link.rel] =
				 * [links[link.rel]]; } }
				 */
				links[link.rel] = link.href;
			});
		}
		if (exports.cacheLinks) {
			schema.__linkTemplates = links;
		}
	}
	var linkTemplate = links[relation];
	return linkTemplate && exports.substitute(linkTemplate, instance);
};

exports.substitute = function(linkTemplate, instance) {
	return linkTemplate.replace(/\{([^\}]*)\}/g, function(t, property) {
		var value = instance[decodeURIComponent(property)];
		if (value instanceof Array) {
			// the value is an array, it should produce a URI like /Table/(4,5,8) and store.get() should handle that as an array of values
			return '(' + value.join(',') + ')';
		}
		return value;
	});
};

exports.codes = Codes;
