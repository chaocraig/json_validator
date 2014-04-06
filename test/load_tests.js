var files = [ './tests/main', './tests/pagination', './tests/country'
              , './tests/id.profile', './tests/id.contact' 
              , './tests/catalog' , './tests/extra_p' , './tests/addt_p'
            ]; 
var data = [];
for ( var i = 0; i < files.length; i++)
	data[i] = {
		name : files[i],
		tests : require('./' + files[i])
	};

module.exports = data;
