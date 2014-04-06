
var ValidatorPrototype = require('../lib');
var Validator = new ValidatorPrototype();

console.log(Validator.codes());

console.log('Testing get_codes()...');
var name, value;

name='type'; value='object';
code = Validator.codes.get_code(name, value);
console.log(name+':'+value+'-->'+code);

name='format'; value='mongodbid';
code = Validator.codes.get_code(name, value);
console.log(name+':'+value+'-->'+code);

name='XXXX'; value=null;
code = Validator.codes.get_code(name, value);
console.log(name+':'+value+'-->'+code);


