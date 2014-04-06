
/**
 * This file contains basics unit-tests for JSON-schema validation
 */

module.exports = {
/** general attributes tests */
  	name : "test_schema",
	type : "object",
	additionalProperties : false,
	properties : {

        server: {
            "type": "string",
            "format": "ipv4" 
        },
        email: {
            "type": "string",
            "format": "email" 
        },
        str_num: {
            "type": "string",
            "format": "number" 
        },
        mongo: {
            "type": "string",
            "format": "mongodbid" 
        },
        bool: {
			type : "boolean",
        },
        num : {
			type : "number",
			minimum : 10,
			maximum : 100,
			divisibleBy : 2,
			optional : true
		},
        uniontype: {
            "type": ["number", "string", "object"]
        },
        def: {
            "type": "string",
            "format": "number",
            "default": "12345"
        },
        tag_no: {
            type: "number"
            //, required: true
        },
        dimensions: {
            "type": "object",
            "properties": {
                    "length": {"type": "number", "required": true},
                    //"width": {"type": "number"},
                    "height": {"type": "number"}
            }
            /* , "required": [ "length", "width", "height"] */
        },
        dim_array: {
            "type": "array"
        },
        iregex: {
            type: "string",
            format : 'regex_i',
            optional : true,
            description : "Match a regular expression!"
        }
        , vpc_Amount : {
			type : 'string',
			format : 'numeric',
			//required : true,
			description : "Order total amount: $12.50 is expressed as 1250",
			minimum : 1,
			minLength : 3,
			maxLength : 12,
			pre_func : function(value) {
				if (typeof value == 'number')
					value = (value.toFixed(2)).toString().replace('.', '');
				return value;
                         }

	},
        server6: {
            "type": "string",
            "format": "ipv6" 
        },
        hostname: {
            "type": "string",
            "format": "hostname" 
        },
        datetime: {
            "type": "string",
            "format": "date-time" 
        }
     },
    //
    //
    patternProperties: {
        "element\.[0-9]+\.property": {
            type: "boolean"
        }

    }


};


