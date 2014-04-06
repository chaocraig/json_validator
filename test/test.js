var vows = require('vows');
/* vows XUnit reporter */
// var reporter = require('../node_modules/vows/lib/vows/reporters/xunit');
// options.coverage = true;
// _coverage = require('../lib/vows/coverage/report-xml');
// _coverage.report(_$jscoverage);

/* module library */
var Module = require('../lib');

var covererageOn = process.argv.some(function(arg) {
	return /^--cover/.test(arg);
});
if (covererageOn)
	Module = require('../lib-cov');

/* tests */
var testsfiles = require('./load_tests');

var batch = vows.describe("Validation");

for ( var i = 0; i < testsfiles.length; i++) {
	var tests = testsfiles[i].tests.get_tests(Module);
	var name = testsfiles[i].name;
	if (tests instanceof Array)
		for ( var t = 0; t < tests.length; t++) {
			var test = {};
			test[name + t] = tests[t];
			batch = batch.addBatch(test);
		}
	else {
		var test = {};
		test[name] = tests;
		batch = batch.addBatch(test);
	}
}
return batch.export(module);
