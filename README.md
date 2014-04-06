# Validation_nodejs

A [JSON Schema](http://tools.ietf.org/html/draft-zyp-json-schema-04) validator for Node.js.
--------------------
Much of the source is forked from [jayschema](https://github.com/natesilva/jayschema/). Thanks for natesilva's great work!

The followings are original contributions of jayschema.

* Complete validation coverage of JSON Schema Draft v4.
* Optional dynamic loader for referenced schemas (load schemas from a database or the web)
* Useful error messages.

-----------------
We made some modifications and added some new functions for our own use:


* Divided the functions of '**format**' attribute into **simple_format** function and **complex_format** function. Customized simple format need only to add a new format(with a line of regular expression) and a new (minor) error code in core.js.
	* added complex formats: regex_i
	* added simple formats: 'ISO-639', 'ISO-4271', 'ISO-3166', 'url', 'number', 'alphanumeric', 'numeric', 'alpha', 'mongodbid'

* Much more comprehensive **error messages** including the major+minor error code, full error message, full path of working property and the (opitional) modified output.
If the type of input value is string, it has to be tested by isNaN() before raising an error.
* Added the '**divisibleBy**' attribute implementation

* Added 5 pre-processing functions for being more efficiency
	* Added the implementation of '**default**' attribute which seems to be missing in jayschema. We make its value be also validated resusively by all other attribtes
	* Added **checkAndSetBrowserType()** function to broaden the validation with inputs of integer/number and boolean types from browser
	
			~~Boolean:~~
				true --> true, false --> false,
				"true" --> true, "false" --> false,
				"1" --> true, "0" --> false
				any other else will still raise an error!
				
			~~Integer and Number:~~
			    If the validated string could be converted into an integer/number and its types include integer/number type, we will replace it in the instance. 
	* Full compatability of '**required**' attribute of JSON Schema Draft version 3 and 4.
	* Added removeExtraProperties option and function for removing the not defined properties of a instance
	* Added pre_func format to be 'eval()'ed before validation
* Added four sample testing programs and totally 40+ test cases



## Install

    npm install validation_nodejs

## Usages

### Basic usage

```js
> 
> var JayCraySchema = require('../lib');  
> var js = new JayCraySchema();  
> var instance = 64;  
> var schema = { "type": "integer", "multipleOf": 8 };
> 
> // synchronous…  
> 
> console.log('synchronous result:', js.validate(instance, schema));
> 
> // …or async  
> 
> js.validate(instance, schema, function(errs) {   
>     if (errs) { console.error(errs); }  
>     else { console.log('async validation OK!'); }  
> });

```


### Complete usage

```js

    var val_result_output; 
    one_test[test.desc] = {  
        		topic : Validator.validate(test.instance, schema),  
		test_errors : function(val_result) {
			/* assert errors */
            if (val_result.length>0) { 
                v = val_result[0]; //get object of errors
                if (v) {
                   if (v.output) {
                       val_result_output = v.output; //get modified output
                   }
  
                    errors =  'constraint-> '+v.constraintNam +':'+v.constraintValue + ', tested-> '+ v.testedValue;

                    if (errors !== test.errors) {
                        if (v.message)
                            console.log(v.message); //show full error messages
                    }
			        assert.equal(errors, test.errors );
                }
            }
		}
	};
       	if (test.output)
		/* if defined assert output */
		one_test[test.desc]['test_output'] = function(val_result) {
			assert.equal(JSON.stringify(val_result_output || {}), JSON.stringify(test.output || {}));
		};

```

## How-to…

### 1. How to add a new format
------------
#####  a) Add a new simple format

A simple format is an attribute:value like **format:alphanumeric** in which the alphanumeric is only *one line of regular expression* like /^[0-9a-zA-Z]*$/.

For adding a new simple format, a developer only needs to add a new line of regular expression and a line of error code in core.js. The added regular expression is declared in exports.FORMAT_REGEXPS of core.js. For example,  
>  alphanumeric: new RegExp( /^[0-9a-zA-Z]*$/ ),  

And, the added error code is declared in codeConstraint of core.js. For example,
>     format: {
>            code : 11,
>            value: {
>             //simple format
>               'email'    :10,
>               'ipv4'     :11,
>               'uri'      :12,
>               'time'     :13,
>               'ISO-639'  :14,
>               'ISO-4271' :15,
>               'ISO-3166' :16,
>               'url'      :17,
>               'number'   :18,
>               'alphanumeric':19,
>               'numeric'  :20,
>               'alpha'    :21,
>               'mongodbid':22,
>               //complex format
>               'date-time':70,
>               'hostname' :71,
>               'ipv6'     :72,
>               'regex_i'  :73
>            }
>     },
The final returned code is a 4 digit of string equals to format.code + '' + format.value. 


#####  b) Add a new comlex format

A complex format is an attribute:value like **format:regex_i** in which the regex_i is a .js file inside the directory of 'validation_nodejs/lib/suites/draft-04/keywords/formats'. 

Besides adding a new js file, for adding a new complex format, a developer also needs to add a declaration in SUPPORTED_COMPLEX_FORMATS of format.js. For example,



 var SUPPORTED_COMPLEX_FORMATS = {  
   'date-time': require('./formats/date-time.js'),  
   'hostname': require('./formats/hostname.js'),  
   'ipv6': require('./formats/ipv6.js'),  
   'regex_i': require('./formats/regex_i.js'),  
 };   

A new error code definition should be also added into codeConstraint of core.js as described above.




### 2. How to customize the browser-inputed validations
------------
Sometimes, the inputs from a browser could not be validated so strictly. For example, an integer/number could be string type instead of integer/number type. And, a boolean value could be a string of 'true'/'false'/'1'/'0' instead of true/false.

For not parsing the json tree once again in caller programs, we added the browser-inputed validations into this module. A developer could modify this kind of validation by modifying the checkAndSetBrowserType() in index.js. If this kind of validation is totally not necessary, just remove the  line of checkAndSetBrowserType() call in index.js.

Run tests
-------------

```
  npm test
```

Authors
-------

Craig Chao <<chaocraig@gmail.com>>





