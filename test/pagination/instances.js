
module.exports =  

[

      { instance : { "location" : {"$near":{"$point":["121","23.46"] }}} }

    , { instance : { "location" : {"$near":{"$point":["-118.23","34.05"], "$maxDistance": 0.01 }}}  }

    , { instance : { "location":{"$within":[["-77.01","38.53"],["-77.02","38.54"]]} } }

    , { instance : { "location" : {"$near":{"$point":[], "$maxDistance": 0.01 }}}
        , errors: "constraint-> minItems:2, tested-> {}" }

    , { instance : { "location" : {"$near":{"$maxDistance": 1 }}}  
        , errors: "constraint-> required:true, tested-> {}" }


    , 
 { instance : { "location" : {"$within":[["-118.24","34.059999999999995"],["-118.24","34.029999999999994"],["-118.26","34.029999999999994"],["-118.26","34.059999999999995"],["-118.25","34.04"]]}  } 
}

    ,   { instance : { "location.long" : "-77.01"} }


    , { instance:  { "location.long" : {"$lt":"-77.01"}} }

    ,  { instance: { "location" : {"$near":{"$maxDistance": 0.01 }}},
           errors:   "constraint-> required:true, tested-> {}" }

     ,   { instance: { "location" : {"$near":{"$point":["-118.25","34.05"] }}} }


/*
    , { instance: {"name":"Test"
                     ,"tags":["test"]
                     ,"finc":{"budg":200,"coupon":"51481805210211c644000078"}
                     ,"media":"2e4a3ed16af866d822000000"
                     ,"type":2
                     ,"type2":{"zone":[{"name":"test zone","pt":{"lat":25,"long":121},"rad":12,"sched":[{"day":"2013-03-26T10:47:15.988Z"}]}]}
                     ,"lay":"4a301088155552ce039422c0"} }


     ,  { instance:  "DRw71kNKy1Lokzfb2ApV78do" }

/*
     ,  { instance: {"name":"Test","tags":["test"],"finc":{"budg":200,"coupon":"51482f35bd7ff1ab49000078"},"media":"2e4a3ed16af866d822000000","type":2,"type2":{"zone":[{"name":"test zone","pt":{"lat":25,"long":121},"rad":12,"sched":[{"day":"2013-03-26T10:26:11.841Z"}]}]},"lay":"4a301088155552ce039422c0"} }

*/
     ,   { instance: "1" 
           , errors: "constraint-> type:object, tested-> \"string\"" }


]

