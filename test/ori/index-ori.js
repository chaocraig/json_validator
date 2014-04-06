var vows = require('vows'), assert = require('assert');

var Validator = require('../lib');
var schema = require('./test_schema');

var tests = require('./tests');
var suite = vows.describe("Validation module testings");

/* Add one test */
var addTest = function(test) {
	var one_test = {

	};
	one_test[test.desc] = {
		topic : Validator.validate(test.instance, schema),
		test_errors : function(val_result) {
			/* assert errors */
			assert.equal(JSON.stringify(val_result.errors || []), JSON.stringify(test.errors || []));
		}
	};
	if (test.output)
		/* if defined assert output */
		one_test[test.desc]['test_output'] = function(val_result) {
			assert.equal(JSON.stringify(val_result.out || {}), JSON.stringify(test.output || {}));
		};
	suite.addBatch(one_test);
};

/* add each tests */
for ( var t = 0, len = tests.length; t < len; t++)
	addTest(tests[t]);

/* run */
suite.run();