/**
 * @author richardchan STATIC object describing for schema validating
 * 0x : general error, x : ['Missing required property', ...]
 * 2x : type error with x : ['string','number',..]
 * 4x : format error with x : ['email', 'url', 'mongodbid',...]
 * 6x : value validation error : ['min', 'max', 'regex',...]
 *
 * group: general-1, module-2, endpoint-3, ui-endpoint-4
 * category: none, db, validation
 * steps
 * custom key
 * 
 * 
 * 1|01|01|xx
 */

var cat_step_mapping = { // define steps of category to group
  'general' : {
    "Validation" : ['validate_Input'],
    "In_Out" : ['get_Parameters'],
  },
};

var step_index = {}; // mapping number to step
var sub_index = {
  generals: 0,
  types: 2,
  formats: 4,
  validates: 6
};
var common_error_def = {
  generals : [ // 0x
    'is missing and it is not optional', // 0
    'an object is required', // 1
    "not an instance",
    "invalid schema/property definition",
    "readonly property",
    "disallowed value was matched",
    "does not have a value in the enumeration",
    "not an instance",
    "invalid schema/property definition",
    "readonly property",
    "disallowed value was matched", // 10
    "does not have a value in the enumeration",
    "must be a JSON object",
    "The selected media is not Ready for use!",
    "empty object",
    "not defined in the schema"
  ],
  types : [ // 2x
    'string', // 0
    'boolean', // 1
    'number', // 2
    'object', // 3
    'array', // 4
    'union' // 5
  ],
  formats : [ // 4x
    'email', // 0
    'mongodbid', // 1
    'url',// 2
    'ISO-3166',
    'ISO-4271',
    'number'
  ],
  validates : [ // 6x
    'min', // 0
    'max', // 1
    'regex', // 2
    'minItems', // 3
    'maxItems', // 4
    "maxLength",
    "minLength",
    "maxDecimal"
  ],
};

var prefix_key;
var step_index_arr = [];
var cat_index_arr = [];
var group_index_arr = [];

var init_mapping_arr = function() {
  var group_i = 1;
  for(var group_id in cat_step_mapping) {
    var cat_i = 0;
    for(var cat_id in cat_step_mapping[group_id]) {
      for(var step_index in cat_step_mapping[group_id][cat_id]) {
        var step = cat_step_mapping[group_id][cat_id][step_index];
        step_index_arr[step]= step_index < 10?'0' + step_index.toString():step_index.toString();
        cat_index_arr[step] = cat_i < 10?'0' + cat_i.toString():cat_i.toString();
        group_index_arr[step] = group_i;
      }
      cat_i++;
    }
    group_i++;
  }
};

function get_prefix_key(step_id) {
  var _prefix_key = 0;
  _prefix_key = group_index_arr[step_id] + cat_index_arr[step_id] + step_index_arr[step_id];
  return _prefix_key?_prefix_key:'';
}

var format_key = function(string) {
  return string.charAt(0).toUpperCase() + string.replace(/_/g,' ').slice(1);
};

function Codes(step_id) {
  // init mapping array
  init_mapping_arr();
  this.step_id = step_id;
  prefix_key = get_prefix_key(step_id);
};


Codes.prototype.get_code = function(sub, key) {
   if(typeof sub_index[sub] != 'undefined') {
      var _sub_index = sub_index[sub];

      for(var i = 0; i < common_error_def[sub].length; i++) {
         if(key == common_error_def[sub][i])
            return prefix_key + _sub_index.toString() + i.toString();
      }
   } else {
      return prefix_key + _sub_index + 'x'; // x for unknown sub index
   }
};

Codes.prototype.get_all_codes = function() {
  var cat_index = {}; // mapping number to category
  var errors = {
    generals: 'General error',
    types: 'Type error',
    formats: 'Format error',
    validates: 'Value validation error'
  };

  var error_code = {};

  for(var group_id in cat_step_mapping) {
    for(var cat_id in cat_step_mapping[group_id]) {
      for(var step_index in cat_step_mapping[group_id][cat_id]) {
        var step = cat_step_mapping[group_id][cat_id][step_index];
        var _prefix_key = get_prefix_key(step);

        for(var sub in sub_index) {
          var cat_index = sub_index[sub];
          for(var type_id in common_error_def[sub]) {
            var msg = common_error_def[sub][type_id];
            if(type_id >= 10)
              var final = cat_index * 10 + parseInt(type_id);
            else
              var final = type_id;

            var code = _prefix_key + (type_id < 10?cat_index.toString():'') + final.toString();


            error_code[code] =  '['+ format_key(group_id) +']['+ format_key(cat_id) +'] ' + errors[sub]+':'+ msg; 
          }
        }
      }
    }
  }
  return error_code;
};

module.exports = Codes;
module.exports.codes = new Codes();
