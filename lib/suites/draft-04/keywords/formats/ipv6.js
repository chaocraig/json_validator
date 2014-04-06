// ******************************************************************
// Format keyword
// ******************************************************************

var Errors = require('../../../../errors.js'), core = require('../../core.js');

var ipv6 = {
	allForms : new RegExp('^' + '[0-9A-Fa-f\\:\\.]{2,45}' + '$'),

	form1 : new RegExp('^' + '[0-9A-Fa-f]{1,4}' + '(?:' + ':' + '[0-9A-Fa-f]{1,4}' + '){7}' + '$'),

	form3full : new RegExp('^' + '(' + '[0-9A-Fa-f]{1,4}:' + '){6}' + '(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[0-9]{1,2})' + '(?:' + '\\.'
			+ '(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[0-9]{1,2})' + '){3}' + '$')
};

module.exports = function(config) {
	var errors = [];
	var index, len;

	// *** form 1
	if (config.inst.match(ipv6.form1)) {
		return errors;
	}
	if (config.inst.match(ipv6.form3full)) {
		return errors;
	}

	if (config.inst.match(ipv6.allForms)) {
		var parts = config.inst.split(':');
		if (parts.length >= 3 && parts.length <= 8 && (config.inst.indexOf('.') === -1 || config.inst.indexOf('.') > config.inst.lastIndexOf(':'))) {

			if (config.inst.indexOf('::') !== -1) {
				// *** form 2 or condensed form 3
				var filledCount = 0;
				for (index = 0, len = parts.length; index < len; ++index) {
					if (parts[index].length) {
						filledCount++;
					}
				}

				var missingCount;
				if (config.inst.indexOf('.') !== -1) {
					missingCount = 7 - filledCount; // condensed form 3
				} else {
					missingCount = 8 - filledCount; // form 2
				}

				var missingParts = new Array(missingCount);
				for (index = 0, len = missingParts.length; index < len; ++index) {
					missingParts[index] = '0';
				}

				var replacement = ':' + missingParts.join(':') + ':';
				var expanded = config.inst.replace('::', replacement);
				if (expanded[0] === ':') {
					expanded = expanded.slice(1);
				}
				if (expanded.slice(-1) === ':') {
					expanded = expanded.slice(0, -1);
				}
				if (expanded.match(ipv6.form1)) {
					return errors;
				} else if (expanded.match(ipv6.form3full)) {
					return errors;
				}
			}
		}
	}

	var desc = 'not a valid IPv6 address per RFC 2373 section 2.2';
	// errors.push(new Errors.FormatValidationError(config.resolutionScope,
	// config.instanceContext, 'format', 'ipv6', config.inst, desc));

	var code = core.getErrorCode('ipv6', config.schema.format);
	var path = core.getPropertyPath(config.instanceContext);

	errors.push(new Errors.FormatValidationError(config.resolutionScope, config.instanceContext, 'format', 'ipv6', config.inst, desc, code, code
			+ ', constraint-> format:ipv6, tested-> ' + config.inst_key + ': ' + config.inst + '\npath: ' + path, path));

	return errors;
};
