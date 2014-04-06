/**
 * @author richardchan STATIC object describing for schema validating CODES
 * 
 * group_id: general-1, module-2, endpoint-3, ui-endpoint-4 category_id(usually file specific): none, db, validation step_id custom key
 * 
 * group_id|cateogry_id 1|01|001|xx
 * 
 * 
 * 
 * ******************************************************* Step 1: Set validation options at top of file
 * 
 * var validate_group_id = 3; var validate_cat_id = 1;
 * 
 * Step 2: Set validation options after Step callback parameter { 'group_id': validate_group_id, 'cat_id': validate_cat_id, 'step_id': 1, 'steps' : { 0 :
 * 'Unable to activate billboard : missing MAC address.', 1 : 'Unable to activate billboard : missing CPU Id.' } }
 * 
 * Step 3: In Step callback. Define error message { code : 400, description : "digbil system log string", _message : { 'custom_id' : 50, 'property' :
 * "type3.sel.ds", 'substitute' : ds_ids.join(), 'other' : { 'missing_ds' : ds_ids } }
 * 
 * *******************************************************
 */

function Codes() {
};

Codes.prototype.get_message = function(options, custom_id, property, substitute, other_messages) {
	var message = {
		code : 'undefined code',
		message : ''
	};
	if (options && typeof options.steps !== 'undefined' && typeof options.steps[custom_id] !== 'undefined') {

		if (substitute !== undefined) {
			if (!(substitute instanceof Array))
				substitute = [ substitute ];

			for ( var i = 0, len = substitute.length; i < len; i++) {
				if (substitute[i] === undefined || substitute[i] === null)
					substitute[i] = "";
				if (typeof substitute[i] == 'object')
					substitute[i] = JSON.stringify(substitute[i]);
				else if (typeof substitute[i] != 'string')
					if (substitute[i].toString)
						substitute[i] = substitute[i].toString();
					else
						substitute[i] = substitute[i] + "";
			}
			substitute.unshift(options.steps[custom_id]);
		}

		var _message = typeof substitute !== 'undefined' ? LOCALS.modules.utils.common.sprintf.apply(null, substitute) : options.steps[custom_id];
		message = {
			code : options.group_id + LOCALS.modules.utils.common.sprintf('%02d', options.cat_id)
					+ LOCALS.modules.utils.common.sprintf('%03d', options.step_id) + LOCALS.modules.utils.common.sprintf('%02d', custom_id),
			message : _message
		};
		if (property)
			message.property = property;

		if (other_messages)
			for ( var key in other_messages)
				message[key] = other_messages[key];
	}
	return message;
};

module.exports.codes = new Codes();
