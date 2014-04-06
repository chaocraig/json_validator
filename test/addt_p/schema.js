
module.exports =  



{
		   type : "object",
		   additionalProperties : false,
		   properties : {
		       scope : {
		                   description : "Object : a query to select the usable Billboard whith the coupon. Example : '_id' : ['my_billboard_id'], 'user' : 'my_id'",
		                   type : [ "string", "object" ],
		                   format : "object",
		                   additionalProperties : true,
		                   properties : {},
		                   optional : true
		       }
		   }
}

