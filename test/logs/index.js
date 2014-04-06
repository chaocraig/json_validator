var vows = require('vows'), assert = require('assert');

var ValidatorPrototype = require('../../lib');
var Validator = new ValidatorPrototype();

//var Validator = require('../lib');

var schema = require('./schema.js');
//var missingSchemas = Validator.register(schema);
/*
console.log('schema:------------------');
console.log(schema);
console.log('--------------------');
*/
//var missingSchemas = Validator.register(schema);


var tests = require('./instances.js');
//var tests = require('./cases/case-numbers.js');
/*
console.log('instances:------------------');
console.log(tests);
console.log('--------------------');
*/


var suite = vows.describe("Validation module testings");


var tid = 0;

/* Add one test */
var addTest = function(test) {
	var one_test = {

	};
    var str_instance = JSON.stringify(test.instance);

    console.log(str_instance+"============");
    console.log(test);
    console.log("-----------------------");

    var val_result_output;

	one_test[test.desc] = {
        		topic : Validator.validate(test.instance, schema, true),
		test_errors : function(val_result) {
			/* assert errors */
                console.log(JSON.stringify(test.instance)+"============");
                console.log(val_result);
                console.log("^Error============");
                if (val_result.out) {
                       val_result_output = val_result.out;
                }

            if (val_result) { 

                v = val_result.errors[0];
                if (v) {

                    errors =  'constraint-> '+v.constraintName+':'+v.constraintValue
                         + ', tested-> '+ JSON.stringify(v.testedValue || {}) ;

                    if (errors != test.errors) {
                        if (v.message)
                            console.log(v.message);
                    }
		        assert.equal(errors, test.errors );
                }
            }
		}
	};
       	if (test.output)
		/* if defined assert output */
		one_test[test.desc]['test_output'] = function(val_result) {
			assert.equal(JSON.stringify(val_result_output || {}), JSON.stringify(test.output || {}));
		};
	suite.addBatch(one_test);
};

/* add each tests */
for ( var t = 0, len = tests.length; t < len; t++)
	addTest(tests[t]);

/* run */
suite.run();


