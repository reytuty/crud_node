const Company = require('../lib/models/Company.js') ;
var company = new Company();
company.name = "teste 2" ;
let result = company.save() ;

console.log(result) ;