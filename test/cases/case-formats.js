
/**
 * This file contains basics unit-tests for JSON-schema validation
 */

module.exports = [
/** general attributes tests */
/* required */



// ipv4 format
{
   	"instance" : {
        server: "140.117.11.1" 
        , tag_no:  345
        , email:   "cray@ntu.edu.tw"
	}
} ,    
{
   	"instance" : {
        server: "140.117.11." 
	},
    "errors": "constraint-> format:ipv4, tested-> \"140.117.11.\""
} ,    


//ipv6
{
        "instance" : {
        server6: "2001:0db8:85a3:0042:1000:8a2e:0370:7334"
        },
    "errors": "constraint-> format:ipv6, tested-> \"140.117.11.\""
} ,

{
        "instance" : {
        server6: "2001:0gb8:85a3:0042:1000:8a2e:0370:7334"
        },
    "errors": "constraint-> format:ipv6, tested-> \"2001:0gb8:85a3:0042:1000:8a2e:0370:7334\""
} ,


//hostname
{
        "instance" : {
            hostname: "ami.com.tw"
        }
} ,

{
        "instance" : {
            hostname: "@ami.com.tw"
        },
    "errors": "constraint-> format:hostname, tested-> \"@ami.com.tw\""
} ,


//date-time
{
        "instance" : {
            datetime: "2010-06-09T15:20:00-07:00"
        }
} ,

{
        "instance" : {
            datetime: "2010-16-09T15:20:00-07:00"
        },
    "errors": "constraint-> format:date-time, tested-> \"2010-16-09T15:20:00-07:00\""
} ,





//email format
{
   	"instance" : {
        email: "craychao@ami.com.tw" 
	},
} ,
{
   	"instance" : {
        email: "@ami.com.tw" 
	},
    "errors": "constraint-> format:email, tested-> \"@ami.com.tw\""
} ,    

//mongodbid format
{
    "instance" : {
        mongo: "507f191e810c19729de860ea" 
	}
} ,
{
    "instance" : {
        mongo: "07f191e810c19729de860ea" 
	},
    "errors": "constraint-> format:mongodbid, tested-> \"07f191e810c19729de860ea\""
},

//string of number
{
    "instance" : {
        str_num: "1234567890"
	},
},
{
    "instance" : {
        str_num: "A234567890"
	},
    "errors": "constraint-> format:number, tested-> \"A234567890\""
},


//boolean
//
{
    "instance" : {
        bool: true
	}
},

{
    "instance" : {
        bool: false
	}
},

    


{
    "instance" : {
        bool: "true"
	}
},


{
    "instance" : {
        bool: "false"
	}
},

    
{
    "instance" : {
        bool: "1"
	}
},


    
{
    "instance" : {
        bool: "0"
	}
},


    
{
    "instance" : {
        bool: "2"
	},
    errors: "constraint-> type:boolean, tested-> \"string\""
},



//number
{
    "instance" : {
        num:     10
        , tag_no:  123
        , email: "craychao@ami.com.tw"
	},
    errors: "constraint-> required:tag_no,email, tested-> \"undefined\""
},

{
    "instance" : {
        num:     100
        , tag_no:  345
	},
},
{
    "instance" : {
        num:     1000
        , tag_no:  345
	},
    "errors": "constraint-> maximum:100, tested-> 1000"
},

{
    "instance" : {
        num:     5
        , tag_no:  345
	},
    "errors": "constraint-> minimum:10, tested-> 5"
},

{
    "instance" : {
        num:     57
	},
    "errors": "constraint-> divisibleBy:2, tested-> 57"
},


    
{
    "instance" : {
        num:     "57"
	},
    "errors": "constraint-> divisibleBy:2, tested-> 57"
},


{
    "instance" : {
        str_num: "A234567890"
	},
    "errors": "constraint-> format:number, tested-> \"A234567890\""
},


//union_type
{
    "instance" : {
        uniontype: "1234567890"
	}
},
{
    "instance" : {
        uniontype: 1234567890
	}
},
{
    "instance" : {
        uniontype: {err:1234567890}
	},
    "errors": "constraint-> format:number, tested-> {err:1234567890}"
},
{
    "instance" : {
        uniontype: true
	},
    "errors": "constraint-> type:number,string,object, tested-> \"boolean\""
},



{
    "instance" : {
        def: (typeof a1)
	},
    "errors": "constraint-> format:number, tested-> \"undefined\"",
},

// patternProperties
//
{
    "instance" : {
       "element.2.property" : true
    },
    "errors": "constraint-> default:object, tested-> \"string\"",
},



{
    "instance" : {
        "dimensions": {
            "length": 2.2,
            "width": 12.0,
            "height": 9.5
        }
    },
    "errors" : "constraint-> required:length,width,height, tested-> {\"length\":2.2,\"height\":9.5}"
},


/*

{
    "instance" : {
        iregex: "abcde2345"
        //iregex: "/^[a-f0-9]{24}$/"
	},
    "errors": "constraint-> format:regex_i, tested-> /^[a-f0-9]{24}$/",
    "output": /^[a-f0-9]{24}$/i
},


*/


{
    "instance" : {
        vpc_Amount: 10
	},
    "errors": "vpc_Amount error!",
}



];


