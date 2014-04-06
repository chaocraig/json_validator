
module.exports =  

[


  {
	desc : "Country",
   instance :  { where:{ "location" : {"$near":{"$maxDistance": 0.01 }}}  }  
    , errors: 'constraint-> required:true, tested-> {}' }

]


