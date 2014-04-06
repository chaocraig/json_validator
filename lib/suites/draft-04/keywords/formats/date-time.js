// ******************************************************************
// Format keyword
// ******************************************************************

var Errors = require('../../../../errors.js')
  , core = require('../../core.js')
  ;

  
  var date_time = new RegExp(
    '^' +
    '(\\d{4})\\-(\\d{2})\\-(\\d{2})' +        // full-date
    '[T ]' +
    '(\\d{2}):(\\d{2}):(\\d{2})(\\.\\d+)?' +  // partial-time
    '(Z|(?:([\\+|\\-])(\\d{2}):(\\d{2})))' +  // time-offset
    '$'
    );

module.exports = function(config) {
  var errors = [];
  var valid = false;

  //var match = config.inst.match(core.FORMAT_REGEXPS['date-time']);
  var match = config.inst.match(date_time);

  if (match) {
    var year = parseInt(match[1], 10);
    var month = parseInt(match[2], 10);
    var mday = parseInt(match[3], 10);
    var hour = parseInt(match[4], 10);
    var min = parseInt(match[5], 10);
    var sec = parseInt(match[6], 10);

    if (
        month >= 1 && month <= 12 &&
        mday >= 1 && mday <= 31 &&
        hour >= 0 && hour <= 23 &&
        min >= 0 && min <= 59 &&
        sec >= 0 && sec <= 60       // it’s 60 during a leap second
       )
    {
      var d = new Date(year, (month - 1) + 1);  // the next month
      var lastDay = new Date(d - 86400000);
      if (mday <= lastDay.getDate()) {

        // [day-of-month is valid]

        if (match[10]) {
          var offsetHour = parseInt(match[10], 10);
          var offsetMin = parseInt(match[11], 10);
          if (
              offsetHour >=0 && offsetHour <= 23 &&
              offsetMin >= 0 && offsetMin <= 59
             )
          {
            valid = true;
          }
        } else {
          valid = true;
        }
      }
    }
  }

  if (!valid) {
    var desc = 'not a valid date-time per RFC 3339 secton 5.6';
    //errors.push(new Errors.FormatValidationError(config.resolutionScope,
     // config.instanceContext, 'format', 'date-time', config.inst, desc));

    
      
    var code=core.getErrorCode('required', config.schema.format);
    var path =  core.getPropertyPath(config.instanceContext);

    errors.push(new Errors.FormatValidationError(config.resolutionScope,
              config.instanceContext, 'format', 'date-time', config.inst,
              desc, code,
              code + ', constraint-> format:date-time, tested-> '
              +  config.inst + '\npath: ' + path ,
              path
        ));

  }

  return errors;
};

