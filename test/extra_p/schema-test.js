
module.exports =  



{
		      "name": "Service",
		      "type": "object",
		      "additionalProperties": false,
		      "properties": {
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
		         }
		     },
		     "required": false,
		     "optional": true
}

