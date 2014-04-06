// ******************************************************************
// § 5.5. Validation keywords for any instance type
// ******************************************************************

var Errors = require('../../../errors.js')
  , core = require('../core.js')
  ;

  
// added by Cray
module.exports = function(config) {


    if (!config.schema) return;
    if (!config.schema.properties) return;

    for (var property in config.schema.properties) { // property is one key of the properties
        //console.log('$$$$ checking....');
        //console.log(property);

        vRequired = config.schema.properties[property]['required']; //v3 is schema.properties.property.required = true/false ;

        if (typeof(vRequired)=='object'&&(vRequired instanceof Array)) {
            //this is a required v4, leave it to next level to be resolved
            return;
        } else if  (typeof vRequired == 'boolean') { //v3, true or false
            if (vRequired == true) {
                if ( !(typeof(config.schema.required)=='object'&&(config.schema.required instanceof Array)) )  { //v4 is schema.required
                    config.schema.required = [];
                }
                if (config.schema.required.indexOf(property)== -1) { // add this one only not exist
                    config.schema.required.push(property);
                }
            }
            delete config.schema.properties[property].required; //may only work in just this contex

        }
    }

}



