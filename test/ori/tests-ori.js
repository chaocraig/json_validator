/**
 * This file contains basics unit-tests for JSON-schema validation
 */

module.exports = [
/** general attributes tests */
/* required */
{
	"desc" : "required field",
	"instance" : {}
}, {
	"desc" : "required field fail",
	"instance" : null,
	"errors" : [ {
		"code" : "23",
		"property" : "",
		"message" : "undefined value found, but a object is required"
	} ]
},
/* default */
{
	"desc" : "required field",
	"instance" : {},
	"output" : {
		def : true
	}
}, {
	"desc" : "required field fail",
	"instance" : {
		def : false
	},
	"output" : {
		def : false
	}
},

/** Type tests */
/* Boolean */
{
	"desc" : "Boolean full",
	"instance" : {
		bool : true
	}
}, {
	"desc" : "Boolean num",
	"instance" : {
		bool : 0
	}
}, {
	"desc" : "Boolean type fail",
	"instance" : {
		bool : "nok"
	},
	"errors" : [ {
		"code" : "21",
		"property" : "bool",
		"message" : "wrongundefinedundefined typevaluevalue found, but a boolean is required"
	} ]
},
/* Number */
{
	"desc" : "Number",
	"instance" : {
		num : 20
	}
}, {
	"desc" : "Number type fail",
	"instance" : {
		num : "NaN"
	}
}, {
	"desc" : "Number minimum",
	"instance" : {
		num : 10
	}
}, {
	"desc" : "Number minimum underpass",
	"instance" : {
		num : 9
	},
	"errors" : [ {
		"code" : "60",
		"property" : "num",
		"message" : "must have a minimum value of 10"
	} ]
}, {
	"desc" : "Number maximum",
	"instance" : {
		num : 100
	}
}, {
	"desc" : "Number maximum overpass",
	"instance" : {
		num : 101
	},
	"errors" : [ {
		"code" : "61",
		"property" : "num",
		"message" : "must have a maximum value of 100"
	} ]
}, {
	"desc" : "Number divisibleBy",
	"instance" : {
		num : 40
	}
}, {
	"desc" : "Number divisibleBy fail",
	"instance" : {
		num : 39
	},
	"errors" : [ {
		property : "num",
		message : "divisibleBy"
	} ]
}, {
	"desc" : "Number enum",
	"instance" : {
		num_enum : 3
	}
}, {
	"desc" : "Number enum fail",
	"instance" : {
		num_enum : 5
	},
	"errors" : [ {
		property : "num_enum",
		message : "not in enum"
	} ]
} ];