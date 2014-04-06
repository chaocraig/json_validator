
module.exports =  



{
		      "name": "Service",
		      "type": "object",
		      "additionalProperties": false,
		      "properties": {
		          "access_level": {
		              "type": "number",
		              "optional": true,
		              "required": false
		         },
		         "settings": {
		             "type": "object",
		             "optional": true,
		             "additionalProperties": false,
		             "properties": {
		                 "ui": {
		                     "type": "string",
		                     "description": "User interface settings storage",
		                     "optional": true,
		                     "required": false
		                 }
		             },
		             "required": false
		         },
		         "stat": {
		             "description": "0: Registered, 1: Granted, 2: Rejected, 3: Unsuscribed",
		             "type": "number",
		             "optional": true,
		             "required": false
		         }
		     },
		     "required": false,
		     "optional": true
}

