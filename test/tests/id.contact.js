var assert = require('assert');

module.exports.get_tests = function(ValidatorPrototype) {
	var Validator = new ValidatorPrototype();
	var all_tests = [];

	console.log('schema:------------------');
	var schema = require('../id.contact/schema');
	console.log('instances:------------------');
	var tests = require('../id.contact/instances');

	var addTest = function(test) {
		var one_test = {};
		one_test[test.desc] = {
			topic : Validator.validate(test.instance, schema),
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

                        if (errors !== test.errors) {
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
		return one_test;
	};

	/* add each tests */
	for ( var t = 0, len = tests.length; t < len; t++)
		all_tests[t] = addTest(tests[t]);

	return all_tests;
};
