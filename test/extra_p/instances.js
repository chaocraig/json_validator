
module.exports =  

[


 {   desc: "Remove extra properties is true",
	  instance : 
    {"_id":"515aa93e7bbb2a4a4e00005c","cdate":"2013-04-02T09:47:42.857Z","ts":"2013-04-16T02:24:31.022Z"
   	 ,"type":"DS","access_level":1,"settings":{},"stat":1},
     out : "{\"access_level\":1,\"settings\":{},\"stat\":1}"
 }

  ,

 {   desc: "Remove extra properties is false",
	  instance : 
    {"_id":"515aa93e7bbb2a4a4e00005c","cdate":"2013-04-02T09:47:42.857Z","ts":"2013-04-16T02:24:31.022Z"
   	 ,"type":"DS","access_level":1,"settings":{},"stat":1},
     out : '{"_id":"515aa93e7bbb2a4a4e00005c","cdate":"2013-04-02T09:47:42.857Z","ts":"2013-04-16T02:24:31.022Z","type":"DS","access_level":1,"settings":{},"stat":1}'
     		,
     remove_extra: false,
     errors: 'constraint-> additionalProperties:false, tested-> "_id"'
 }



]


