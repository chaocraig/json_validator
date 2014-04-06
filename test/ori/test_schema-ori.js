/**
 * This is the JSON schema definition which must be supported by the validation module
 */

module.exports = {
	name : "test_schema",
	type : "object",
	additionalProperties : false,
	required : true,
	properties : {
		/* default */
		def : {
			type : "boolean",
			required : true,
			default : true
		},

		/* boolean */
		bool : {
			type : "boolean",
			optional : true
		},

		/* number */
		num : {
			type : "number",
			minimum : 10,
			maximum : 100,
			divisibleBy : 2,
			optional : true
		},
		num_enum : {
			type : "number",
			enum : [ 2, 3, 7 ],
			optional : true
		},

		/* String testing */
		_id : {
			type : "string",
			format : "mongodbid",
			optional : true
		},
		date : {
			type : "string",
			format : "date-time",
			optional : true
		},
		time : {
			description : "Time format : (00:00:00.000)",
			type : "string",
			format : "time",
			optional : true
		},
		email : {
			type : "string",
			format : "email",
			optional : true
		},
		text : {
			type : "string",
			minLength : 2,
			maxLength : 10,
			pattern : /^hi(.)*$/,
			optional : true
		},
		list : {
			type : "string",
			enum : [ "hello", "world" ],
			optional : true
		},
		link : {
			type : "string",
			format : "mongodbid",
			links : [ {
				"href" : "digbil.com/apis/other/{link}"
			} ],
			optional : true
		},
		currency : {
			type : "string",
			format : "ISO-4271",
			optional : true
		},
		country : {
			type : "string",
			format : "ISO-3166",
			optional : true
		},
		language : {
			type : "string",
			format : "ISO-639-ISO-3166",
			optional : true
		},

		/* object */
		obj : {
			type : "object",
			additionalProperties : false,
			properties : {
				num : {
					type : "number"
				},
				str : {
					type : "string"
				}
			},
			patternProperties : {
				"att[0-9]" : {
					type : "string"
				}
			},
			optional : true
		},
		obj_empty : {
			type : "object",
			additionalProperties : true,
			properties : {},
			optional : true
		},

		/* array */
		obj_arr : {
			type : "array",
			minItems : 1,
			maxItems : 2,
			items : {
				type : "object",
				additionalProperties : false,
				properties : {
					'att' : {
						type : "boolean"
					}
				}
			},
			optional : true
		},
		str_arr : {
			type : "array",
			uniqueItems : true,
			items : {
				type : "string"
			},
			optional : true
		},

		/* multi-type */
		str_or_obj : {
			type : [ "string", "object" ],
			enum : [ "ok", "nok" ],
			properties : {
				'att' : {
					type : "boolean"
				}
			},
			optional : true
		},

		/* modification function (getter) */
		low_str : {
			pre_func : function(data) {
				return (typeof data == "string") ? data.toLowerCase() : data;
			},
			type : "string",
			pattern : /ok/,
			post_func : function(data) {
				return data ? data + "hello" : undefined;
			},
			optional : true
		}
	}
};
