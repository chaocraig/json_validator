// ******************************************************************
// § 5.1. Validation keywords for numeric instances
// ******************************************************************

var core = require('../core.js');

var Errors = require('../../../errors.js');

module.exports = function(config) {
	var errors = [];

	/*
	 * console.log('calling divisibleBy '); console.log(config.inst); console.log(config.schema.divisibleBy);
	 */

	if (!isNaN(config.inst)) {

		if ((config.inst % config.schema.divisibleBy) != 0) {
			errors
					.push(new Errors.NumericValidationError(config.resolutionScope, config.instanceContext, 'divisibleBy', config.schema.divisibleBy,
							config.inst));

			var code = core.getErrorCode('divisibleBy', config.schema.type);
			var path = core.getPropertyPath(config.resolutionScope);

			errors.push(new Errors.FormatValidationError(config.resolutionScope, config.instanceContext, 'divisibleBy', config.schema.divisibleBy, config.inst,
					'divisibleBy error!', code, code + ', constraint-> divisibleBy:' + config.schema.divisibleBy + ', tested-> ' + config.inst_key + ': '
							+ config.inst + '\npath: ' + path, path, null));

			return errors;
		}
	}
};