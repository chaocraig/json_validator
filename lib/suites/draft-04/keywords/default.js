// ******************************************************************
// § 5.5. Validation keywords for any instance type
// ******************************************************************

var Errors = require('../../../errors.js')
  , core = require('../core.js')
  ;

  
// added by Cray
module.exports = function(config) {


    //console.log('checkAndSetDefault() is called');
    //console.log(config);

  if (!config.schema.hasOwnProperty('default')) return false;


  //console.log("schema.hasOwnProperty('default')) is true!");

  //else has a 'default property
  //check if the value of this instance is undefined
  if (typeof config.inst === "string") { 
     //console.log("It is a string!");
     if (config.inst != "undefined") {
         //console.log("It is not 'undefined'!");
         return false; //it's a string but not "undefined"
     }
  } else if (typeof config.inst !== "undefined") {
      return false;
  }
  //if (config.inst[key] == null) {

      //console.log("config.schema['default']=");
      //console.log(config.schema['default']);

      /*
      strKey = "\"" + key + "\"";
      strJson = "{ " + strKey + " : \""+ config.schema['default'] + "\" }" ;
      console.log(strJson);
      config.inst = JSON.parse(strJson);
      */

  if (!config.inst_key) return false;

  config.inst = config.schema['default']; //return default value in schema

  return true;

}


